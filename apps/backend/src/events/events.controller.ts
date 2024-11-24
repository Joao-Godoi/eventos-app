import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import {
  completeEvent,
  completeGuest,
  DateUtil,
  Id,
  IEvent,
  IGuest,
} from 'core';
import { EventRepository } from './event.repository';

@Controller('events')
export class EventsController {
  constructor(readonly eventRepository: EventRepository) {}

  @Get()
  async getEvents() {
    const events = await this.eventRepository.getAllEvents();
    return events.map(this.serializer);
  }

  @Get(':idOrAlias')
  async getEvent(@Param('idOrAlias') idOrAlias: string) {
    let event: IEvent;
    if (Id.isValid(idOrAlias)) {
      event = await this.eventRepository.getById(idOrAlias, true);
    } else {
      event = await this.eventRepository.getByAlias(idOrAlias, true);
    }
    return this.serializer(event);
  }

  @Get('validate/:alias/:id')
  async validateAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const event = await this.eventRepository.getByAlias(alias);
    return { valid: !event || event.id === id };
  }

  @Post('access')
  async accessEvent(@Body() data: { id: string; password: string }) {
    const event = await this.eventRepository.getById(data.id, false);
    if (!event || event.password !== data.password) {
      throw new HttpException('Senha inválida ou evento não encontrado', 400);
    }
    return this.serializer(event);
  }

  @Post(':alias/guest')
  async addGuest(@Param('alias') alias: string, @Body() guest: IGuest) {
    const event = await this.eventRepository.getByAlias(alias);
    if (!event) {
      throw new HttpException('Evento não encontrado', 404);
    }
    if (!this.isValidEmail(guest.email)) {
      throw new HttpException('Email inválido', 400);
    }

    const isEmailRegistered = await this.eventRepository.isGuestEmailRegistered(
      event.id,
      guest.email,
    );
    if (isEmailRegistered) {
      throw new HttpException('Email já cadastrado', 400);
    }

    const fullGuest = completeGuest(guest);
    await this.eventRepository.saveGuest(event, fullGuest);
    return this.serializer(event);
  }

  @Post()
  async createEvent(@Body() event: IEvent) {
    const existEvent = await this.eventRepository.getByAlias(event.alias);
    if (existEvent && existEvent.id !== event.id) {
      throw new HttpException('Alias já utilizado', 400);
    }

    const fullEvent = completeEvent(this.deserializer(event));
    await this.eventRepository.saveEvent(fullEvent);
    return this.serializer(fullEvent);
  }

  private serializer(event: IEvent) {
    if (!event) {
      return null;
    }
    return {
      ...event,
      date: DateUtil.formatDate(event.date),
    };
  }

  private deserializer(event: any): IEvent {
    if (!event) return null;
    return {
      ...event,
      date: DateUtil.parseDate(event.date),
    };
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

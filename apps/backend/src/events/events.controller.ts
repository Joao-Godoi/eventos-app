import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  completeEvent,
  completeGuest,
  DateUtil,
  Id,
  IEvent,
  IGuest,
  mockEvents,
} from 'core';

@Controller('events')
export class EventsController {
  @Get()
  async getEvents() {
    return mockEvents.map(this.serializer);
  }

  @Get(':idOrAlias')
  async getEvent(@Param('idOrAlias') idOrAlias: string) {
    if (Id.isValid(idOrAlias)) {
      return this.serializer(
        mockEvents.find((event) => event.id === idOrAlias),
      );
    } else {
      return this.serializer(
        mockEvents.find((event) => event.alias === idOrAlias),
      );
    }
  }

  @Get('validate/:alias/:id')
  async validateAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const event = mockEvents.find((event) => event.alias === alias);
    return { valid: !event || event.id === id };
  }

  @Post('access')
  async accessEvent(@Body() data: { id: string; password: string }) {
    const event = mockEvents.find(
      (event) => event.id === data.id && event.password === data.password,
    );
    if (!event) {
      throw new Error('Senha inválida ou evento não encontrado');
    }
    return this.serializer(event);
  }

  @Post(':alias/guest')
  async addGuest(@Param('alias') alias: string, @Body() guest: IGuest) {
    const event = mockEvents.find((event) => event.alias === alias);
    if (!event) {
      throw new Error('Evento não encontrado');
    }
    const checkGuest = event.guests.find((g) => g.email === guest.email);
    if (checkGuest) {
      throw new Error('E-mail já utilizado');
    }
    const fullGuest = completeGuest(this.deserializer(guest));
    event.guests.push(fullGuest);
    return this.serializer(event);
  }

  @Post()
  async createEvent(@Body() event: IEvent) {
    const checkAlias = mockEvents.find((e) => e.alias === event.alias);
    if (checkAlias) {
      throw new Error('Alias já utilizado');
    }

    const fullEvent = completeEvent(this.deserializer(event));
    mockEvents.push(fullEvent);
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
}

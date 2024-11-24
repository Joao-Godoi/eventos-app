import { Injectable } from '@nestjs/common';
import { IEvent, IGuest } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventRepository {
  constructor(readonly prismaProvider: PrismaProvider) {}

  saveEvent(event: IEvent) {
    return this.prismaProvider.event.create({
      data: {
        ...event,
        guests: { create: event.guests },
      },
    });
  }

  async isGuestEmailRegistered(
    eventId: string,
    email: string,
  ): Promise<boolean> {
    const guest = await this.prismaProvider.guest.findFirst({
      where: {
        eventId,
        email,
      },
    });
    return Boolean(guest);
  }

  saveGuest(event: IEvent, guest: IGuest) {
    return this.prismaProvider.guest.create({
      data: {
        ...guest,
        quantityCompany: +(guest.quantityCompany || 0),
        Event: { connect: { id: event.id } },
      },
    });
  }

  getAllEvents(): IEvent[] {
    return this.prismaProvider.event.findMany() as any;
  }

  async getById(id: string, complete: boolean): Promise<IEvent> | null {
    return this.prismaProvider.event.findUnique({
      where: { id },
      include: { guests: complete },
    }) as any;
  }

  async getByAlias(
    alias: string,
    complete: boolean = false,
  ): Promise<IEvent> | null {
    return this.prismaProvider.event.findUnique({
      select: {
        id: true,
        name: true,
        description: true,
        date: true,
        location: true,
        image: true,
        backgroundImage: true,
        alias: complete,
        password: complete,
        limitGuests: complete,
        guests: complete,
      },
      where: { alias },
    }) as any;
  }
}

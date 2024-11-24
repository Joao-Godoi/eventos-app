import { PrismaClient } from '@prisma/client';
import { mockEvents } from 'core';

async function seed() {
  const prisma = new PrismaClient();

  const transactions = mockEvents.map(async (event) => {
    await prisma.event.create({
      data: {
        id: event.id,
        alias: event.alias,
        password: event.password,
        name: event.name,
        date: event.date,
        location: event.location,
        description: event.description,
        image: event.image,
        backgroundImage: event.backgroundImage,
        limitGuests: event.limitGuests,
        guests: {
          create: event.guests.map((guest) => ({
            id: guest.id,
            name: guest.name,
            email: guest.email,
            confirmed: guest.confirmed,
            hasCompany: guest.hasCompany,
            quantityCompany: guest.quantityCompany,
          })),
        },
      },
    });
  });

  await Promise.all(transactions);
}

seed();

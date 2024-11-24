import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventRepository {
  constructor(readonly prismaProvider: PrismaProvider) {}
}

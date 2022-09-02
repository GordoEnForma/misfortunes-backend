import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from '../prisma.service';
import { Note, Prisma } from '@prisma/client';

@Injectable()
export class NoteService {
  constructor(private prisma: PrismaService) {}

  create(createNoteDto: CreateNoteDto) {
    return 'This action adds a new note';
  }

  async createNote(data: Prisma.NoteCreateInput): Promise<Note> {
    return this.prisma.note.create({
      data,
    });
  }

  findAll() {
    return `This action returns all note`;
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}

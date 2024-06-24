/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Note as PrismaNote,
  Topic as PrismaTopic,
} from "@prisma/client";

export class NoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.NoteCountArgs, "select">): Promise<number> {
    return this.prisma.note.count(args);
  }

  async notes(args: Prisma.NoteFindManyArgs): Promise<PrismaNote[]> {
    return this.prisma.note.findMany(args);
  }
  async note(args: Prisma.NoteFindUniqueArgs): Promise<PrismaNote | null> {
    return this.prisma.note.findUnique(args);
  }
  async createNote(args: Prisma.NoteCreateArgs): Promise<PrismaNote> {
    return this.prisma.note.create(args);
  }
  async updateNote(args: Prisma.NoteUpdateArgs): Promise<PrismaNote> {
    return this.prisma.note.update(args);
  }
  async deleteNote(args: Prisma.NoteDeleteArgs): Promise<PrismaNote> {
    return this.prisma.note.delete(args);
  }

  async getTopic(parentId: string): Promise<PrismaTopic | null> {
    return this.prisma.note
      .findUnique({
        where: { id: parentId },
      })
      .topic();
  }
}

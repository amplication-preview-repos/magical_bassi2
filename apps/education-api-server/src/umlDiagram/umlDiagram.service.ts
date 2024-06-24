import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UmlDiagramServiceBase } from "./base/umlDiagram.service.base";

@Injectable()
export class UmlDiagramService extends UmlDiagramServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

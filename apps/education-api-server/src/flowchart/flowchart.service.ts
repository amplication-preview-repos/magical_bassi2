import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FlowchartServiceBase } from "./base/flowchart.service.base";

@Injectable()
export class FlowchartService extends FlowchartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

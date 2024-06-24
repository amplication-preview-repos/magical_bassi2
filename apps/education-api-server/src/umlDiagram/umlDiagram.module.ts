import { Module } from "@nestjs/common";
import { UmlDiagramModuleBase } from "./base/umlDiagram.module.base";
import { UmlDiagramService } from "./umlDiagram.service";
import { UmlDiagramController } from "./umlDiagram.controller";
import { UmlDiagramResolver } from "./umlDiagram.resolver";

@Module({
  imports: [UmlDiagramModuleBase],
  controllers: [UmlDiagramController],
  providers: [UmlDiagramService, UmlDiagramResolver],
  exports: [UmlDiagramService],
})
export class UmlDiagramModule {}

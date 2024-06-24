import { Module } from "@nestjs/common";
import { FlowchartModuleBase } from "./base/flowchart.module.base";
import { FlowchartService } from "./flowchart.service";
import { FlowchartController } from "./flowchart.controller";
import { FlowchartResolver } from "./flowchart.resolver";

@Module({
  imports: [FlowchartModuleBase],
  controllers: [FlowchartController],
  providers: [FlowchartService, FlowchartResolver],
  exports: [FlowchartService],
})
export class FlowchartModule {}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FlowchartService } from "./flowchart.service";
import { FlowchartControllerBase } from "./base/flowchart.controller.base";

@swagger.ApiTags("flowcharts")
@common.Controller("flowcharts")
export class FlowchartController extends FlowchartControllerBase {
  constructor(protected readonly service: FlowchartService) {
    super(service);
  }
}

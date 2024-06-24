import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UmlDiagramService } from "./umlDiagram.service";
import { UmlDiagramControllerBase } from "./base/umlDiagram.controller.base";

@swagger.ApiTags("umlDiagrams")
@common.Controller("umlDiagrams")
export class UmlDiagramController extends UmlDiagramControllerBase {
  constructor(protected readonly service: UmlDiagramService) {
    super(service);
  }
}

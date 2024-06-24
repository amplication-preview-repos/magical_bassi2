import * as graphql from "@nestjs/graphql";
import { UmlDiagramResolverBase } from "./base/umlDiagram.resolver.base";
import { UmlDiagram } from "./base/UmlDiagram";
import { UmlDiagramService } from "./umlDiagram.service";

@graphql.Resolver(() => UmlDiagram)
export class UmlDiagramResolver extends UmlDiagramResolverBase {
  constructor(protected readonly service: UmlDiagramService) {
    super(service);
  }
}

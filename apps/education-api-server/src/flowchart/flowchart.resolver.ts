import * as graphql from "@nestjs/graphql";
import { FlowchartResolverBase } from "./base/flowchart.resolver.base";
import { Flowchart } from "./base/Flowchart";
import { FlowchartService } from "./flowchart.service";

@graphql.Resolver(() => Flowchart)
export class FlowchartResolver extends FlowchartResolverBase {
  constructor(protected readonly service: FlowchartService) {
    super(service);
  }
}

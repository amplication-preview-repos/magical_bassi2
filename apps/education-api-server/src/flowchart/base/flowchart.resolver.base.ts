/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Flowchart } from "./Flowchart";
import { FlowchartCountArgs } from "./FlowchartCountArgs";
import { FlowchartFindManyArgs } from "./FlowchartFindManyArgs";
import { FlowchartFindUniqueArgs } from "./FlowchartFindUniqueArgs";
import { CreateFlowchartArgs } from "./CreateFlowchartArgs";
import { UpdateFlowchartArgs } from "./UpdateFlowchartArgs";
import { DeleteFlowchartArgs } from "./DeleteFlowchartArgs";
import { Topic } from "../../topic/base/Topic";
import { FlowchartService } from "../flowchart.service";
@graphql.Resolver(() => Flowchart)
export class FlowchartResolverBase {
  constructor(protected readonly service: FlowchartService) {}

  async _flowchartsMeta(
    @graphql.Args() args: FlowchartCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Flowchart])
  async flowcharts(
    @graphql.Args() args: FlowchartFindManyArgs
  ): Promise<Flowchart[]> {
    return this.service.flowcharts(args);
  }

  @graphql.Query(() => Flowchart, { nullable: true })
  async flowchart(
    @graphql.Args() args: FlowchartFindUniqueArgs
  ): Promise<Flowchart | null> {
    const result = await this.service.flowchart(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Flowchart)
  async createFlowchart(
    @graphql.Args() args: CreateFlowchartArgs
  ): Promise<Flowchart> {
    return await this.service.createFlowchart({
      ...args,
      data: {
        ...args.data,

        topic: args.data.topic
          ? {
              connect: args.data.topic,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Flowchart)
  async updateFlowchart(
    @graphql.Args() args: UpdateFlowchartArgs
  ): Promise<Flowchart | null> {
    try {
      return await this.service.updateFlowchart({
        ...args,
        data: {
          ...args.data,

          topic: args.data.topic
            ? {
                connect: args.data.topic,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Flowchart)
  async deleteFlowchart(
    @graphql.Args() args: DeleteFlowchartArgs
  ): Promise<Flowchart | null> {
    try {
      return await this.service.deleteFlowchart(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Topic, {
    nullable: true,
    name: "topic",
  })
  async getTopic(@graphql.Parent() parent: Flowchart): Promise<Topic | null> {
    const result = await this.service.getTopic(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}

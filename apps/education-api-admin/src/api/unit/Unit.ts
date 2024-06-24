import { Topic } from "../topic/Topic";

export type Unit = {
  createdAt: Date;
  id: string;
  name: string | null;
  topics?: Array<Topic>;
  updatedAt: Date;
};

import { Topic } from "../topic/Topic";

export type Note = {
  content: string | null;
  createdAt: Date;
  id: string;
  topic?: Topic | null;
  updatedAt: Date;
};

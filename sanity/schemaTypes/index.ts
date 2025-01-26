import { type SchemaTypeDefinition } from "sanity";
import {owner} from "@/sanity/schemaTypes/owner";
import {agent} from "@/sanity/schemaTypes/agent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [owner, agent],
};

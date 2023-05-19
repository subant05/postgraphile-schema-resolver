import { makeAddInflectorsPlugin } from "graphile-utils";

const SchemaResolver = makeAddInflectorsPlugin(
  {
    _tableName(table) {
      return table.tags.name || table.type.tags.name || table.name;
    },
  },
  true
);

export { SchemaResolver };

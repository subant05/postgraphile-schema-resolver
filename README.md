#Postgraphile Schema Resolver

## Installation
- npm i postgraphile-schema-resolver


## Use: SchemaResolver
- import { SchemaResolver } from "postgraphile-schema-resolver";
- postgraphile(
    POSTGRAPHILE_URL,
    ["someShema"],
    {
      appendPlugins: [
        SchemaResolver
      ],
    }
  )
## node-asana-api

[Asana](https://developers.asana.com/docs) API client. 

Generated with [GitHub - ferdikoomen/openapi-typescript-codegen: NodeJS library that generates Typescript or Javascript clients based on the OpenAPI specification](https://github.com/ferdikoomen/openapi-typescript-codegen).

I will try to keep the package up to date with new released versions.

Requires Node16+.
## To install

`npm i node-asana-api`

## To use

```typescript
import { AsanaApi } from "node-asana-api";

const client = new AsanaApi({
    BASE: 'https://app.asana.com/api/1.0',
    WITH_CREDENTIALS: true,
    TOKEN: ""
});
```

## Development

Generated with (from repo folder):

```bash
cd ..
npm --global -i openapi-typescript-codegen
openapi -c fetch -o ./node-asana-api/ -i https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml --name="AsanaApi" --useOptions
```
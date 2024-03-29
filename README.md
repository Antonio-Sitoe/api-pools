1 - First -

```
   npm init -y
```

2 - Add typescript

```
npm install typescript @types/node
```

3 - Inicializacao do typescript

```
npx tsc --init
```

4 - target - para tsconfig
https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping

5 - instalar a biblioteca que converte codigo javascript para typescript

```
npm install tsx -D
```

6 - Modificar o package.json para iniciar o servidor

```json
{
  "scripts": {
    "dev": "tsx watch src/http/server.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

7 - Instalar o fastify -> Template inicial

```ts
import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
  console.log("dsd");
  return "jhjhg";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server runing on port http://localhost:3333");
  });
```

9 - Subir base de dados no docker

```bash
  docker-compose -up -d
```

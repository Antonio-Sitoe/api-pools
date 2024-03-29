import { createPoll } from "@/routes/create-poll";
import { getPoll } from "@/routes/get-poll";
import { VoteOnPoll } from "@/routes/vote-on-poll";
import fastify from "fastify";
import cookie from "@fastify/cookie";

const app = fastify();

app.register(createPoll);
app.register(getPoll);
app.register(VoteOnPoll);
app.register(cookie, {
  secret: "my-secrete",
  hook: "onRequest",
  parseOptions: {},
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server runing on port http://localhost:3333");
  });

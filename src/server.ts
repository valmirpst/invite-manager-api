import { fastifyCors } from "@fastify/cors"
import fastifySwagger from "@fastify/swagger"
import fastifySwaggerUi from "@fastify/swagger-ui"
import { fastify } from "fastify"
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod"
import { env } from "./env"
import { accessInviteLinkRoute } from "./routes/access-invite-link-route"
import { getRankingRoute } from "./routes/get-ranking-route"
import { getSubscriberInviteClicksRoute } from "./routes/get-subscriber-invite-clicks-route"
import { getSubscriberInvitesCountRoute } from "./routes/get-subscriber-invites-count-route"
import { getSubscriberRankingPositionRoute } from "./routes/get-subscriber-ranking-position-route"
import { subscribeToEventRoute } from "./routes/subscribe-to-event-route"

const app = fastify().withTypeProvider<ZodTypeProvider>()

// serialização de dados antes de enviar para o frontend
app.setSerializerCompiler(serializerCompiler)
// validação de dados
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
  origin: true,
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "NLW Connect Node.js API with Docker",
      version: "0.0.1",
    },
  },

  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
})

app.register(subscribeToEventRoute)
app.register(accessInviteLinkRoute)
app.register(getSubscriberInviteClicksRoute)
app.register(getSubscriberInvitesCountRoute)
app.register(getSubscriberRankingPositionRoute)
app.register(getRankingRoute)

app.listen({ host: "0.0.0.0", port: env.PORT }, () => {
  console.log(`Server is running on port ${env.PORT}`)
})

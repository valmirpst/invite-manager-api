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
import { accessInviteLinkRoute } from "./routes/access-invite-link"
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
      title: "NLW Connect Node.js API",
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

app.listen({ port: env.PORT }, () => {
  console.log(`Server is running on port ${env.PORT}`)
})

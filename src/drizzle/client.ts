import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { env } from "../env"
import { subscriptions } from "./schema/subscriptions"

// Ao criar uma tabela ou fazer alguma alterção, rode:
// npx drizzle-kit generate
// npx drizzle-kit migrate

export const pg = postgres(env.POSTGRES_URL)
export const db = drizzle(pg, {
  schema: {
    subscriptions,
  },
})

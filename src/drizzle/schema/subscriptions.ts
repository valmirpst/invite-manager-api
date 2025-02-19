import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

export const subscriptions = pgTable("subscriptions", {
  // uuid("nome_no_banco_de_dados")
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})

import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import z from "zod"
import { env } from "../env"
import { accessInviteLink } from "../functions/access-invite-link"

export const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    "/invites/:subscriberId",
    {
      schema: {
        summary: "Access invite link and redirects user",
        tags: ["referral"], // referral -> sistema de indicação
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          302: z.null(),
        },
      },
    },
    async (request, reply) => {
      const { subscriberId } = request.params

      await accessInviteLink({ subscriberId })

      const redirectUrl = new URL(env.WEB_URL)

      redirectUrl.searchParams.set("referrer", subscriberId)

      // status 301: redirect permanente
      // status 302: redirect temporário
      return reply.redirect(redirectUrl.toString(), 302)
    }
  )
}

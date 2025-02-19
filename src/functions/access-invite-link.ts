import { redis } from "../redis/client"

interface AccessInviteLinkParams {
  subscriberId: string
}

export async function accessInviteLink({
  subscriberId,
}: AccessInviteLinkParams) {
  // Chave / Valor
  const result = await redis.hincrby("referral:access-count", subscriberId, 1)
}

// Redis
// - lists []
// - hashes {}
// - sorted sets [ likes: number ]

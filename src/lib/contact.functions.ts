import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(200),
  subject: z.string().min(2).max(200),
  message: z.string().min(10).max(4000),
});

type Msg = z.infer<typeof schema> & { at: string };
// Lightweight in-memory ledger; visible in server logs.
const inbox: Msg[] = [];

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((raw: unknown) => schema.parse(raw))
  .handler(async ({ data }) => {
    const entry: Msg = { ...data, at: new Date().toISOString() };
    inbox.push(entry);
    // Print for the developer / server-side inspection
    console.log("[contact] new message", JSON.stringify(entry));
    return { ok: true as const, receivedAt: entry.at, queuePosition: inbox.length };
  });
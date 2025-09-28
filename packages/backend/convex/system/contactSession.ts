import { ConvexError, v } from "convex/values";
import { internalMutation, internalQuery } from "../_generated/server";
import { AUTO_REFRESH_THRESHOLD_MS, SESSION_DURATION_MS } from "../constants";

export const refresh = internalMutation({
  args: {
    constactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    const contactSession = await ctx.db.get(args.constactSessionId);

    if (!contactSession) {
      throw new ConvexError({
        code: "NOT_FOUND",
        message: "Contact Session not found",
      });
    }
    if (contactSession.expiresAt < Date.now()) {
      throw new ConvexError({
        code: "BAD_REQUEST",
        message: "Contact Session expired",
      });
    }

    const timeRemaining = contactSession.expiresAt - Date.now();
    if (timeRemaining < AUTO_REFRESH_THRESHOLD_MS) {
      const newExpiresAt = Date.now() + SESSION_DURATION_MS;
      await ctx.db.patch(args.constactSessionId, {
        expiresAt: newExpiresAt,
      });
      return { ...contactSession, expiresAt: newExpiresAt };
    }

    return contactSession;
  },
});

export const getOne = internalQuery({
  args: {
    contactSessionId: v.id("contactSessions"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.contactSessionId);
  },
});

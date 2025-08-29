import { ConvexError, v } from "convex/values";
import { mutation, query } from "../_generated/server";
import { supportAgent } from "../system/ai/agents/supportAgent";
import { MessageDoc, saveMessage } from "@convex-dev/agent";
import { components } from "../_generated/api";
import { paginationOptsValidator, PaginationResult } from "convex/server";
import { Doc } from "../_generated/dataModel";

export const getMany = query({
  args: {
    paginationOpts: paginationOptsValidator,
    status: v.optional(
      v.union(
        v.literal("unresolved"),
        v.literal("escalated"),
        v.literal("resolved")
      )
    ),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Identity not found",
      });
    }

    const orgId = (await identity.orgId) as string;
    if (!orgId) {
      throw new ConvexError({
        code: "UNAUTHORIZED",
        message: "Organization not found",
      });
    }

    let conversations: PaginationResult<Doc<"conversations">>;
    if (args.status) {
      conversations = await ctx.db
        .query("conversations")
        .withIndex("by_status_and_organization_id", (q) =>
          q
            .eq("status", args.status as Doc<"conversations">["status"])
            .eq("organizationId", orgId)
        )
        .order("desc")
        .paginate(args.paginationOpts);
    } else {
      conversations = await ctx.db
        .query("conversations")
        .withIndex("by_organization_id", (q) => q.eq("organizationId", orgId))
        .order("desc")
        .paginate(args.paginationOpts);
    }
  },
});

// export const getOne = query({
//   args: {
//     conversationId: v.id("conversations"),
//     contactSessionId: v.id("contactSessions"),
//   },
//   handler: async (ctx, args) => {
//     const session = await ctx.db.get(args.contactSessionId);

//     if (!session || session.expiresAt < Date.now()) {
//       throw new ConvexError({
//         code: "UNAUTHORIZED",
//         message: "Invalid Session",
//       });
//     }

//     const conversation = await ctx.db.get(args.conversationId);
//     if (!conversation) {
//       throw new ConvexError({
//         code: "NOT_FOUND",
//         message: "Conversation not found",
//       });
//     }
//     if (conversation.contactSessionId !== session._id) {
//       throw new ConvexError({
//         code: "UNAUTHORIZED",
//         message: "Invalid Session",
//       });
//     }

//     return {
//       _id: conversation._id,
//       status: conversation.status,
//       threadId: conversation.threadId,
//     };
//   },
// });

// export const create = mutation({
//   args: {
//     organizationId: v.string(),
//     contactSessionId: v.id("contactSessions"),
//   },
//   handler: async (ctx, args) => {
//     const session = await ctx.db.get(args.contactSessionId);

//     if (!session || session.expiresAt < Date.now()) {
//       throw new ConvexError({
//         code: "UNAUTHORIZED",
//         message: "Invalid Session",
//       });
//     }

//     const { threadId } = await supportAgent.createThread(ctx, {
//       userId: args.organizationId,
//     });

//     await saveMessage(ctx, components.agent, {
//       threadId,
//       message: {
//         role: "assistant",
//         content: "Hello, how can I help you today?",
//       },
//     });

//     const conversationId = await ctx.db.insert("conversations", {
//       contactSessionId: session._id,
//       status: "unresolved",
//       organizationId: args.organizationId,
//       threadId,
//     });

//     return conversationId;
//   },
// });

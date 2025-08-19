import { createClerkClient } from "@clerk/backend";
import { v } from "convex/values";
import { mutation } from "../_generated/server";

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

export const validate = mutation({
  args: {
    organizationId: v.string(),
  },
  handler: async (_, args) => {
    try {
      await clerkClient.organizations.getOrganization({
        organizationId: args.organizationId,
      });

      return { valid: true };
    } catch (error) {
      return { valid: false, reason: "Organization not found" };
    }
  },
});

"use client";
import { DicebearAvatar } from "@workspace/ui/components/dicebear-avatar";
import { useParams } from "next/navigation";
import React from "react";

export const ContactPanel = () => {
  const params = useParams();

  const conversationId = params.conversationId;

  return (
    <div className="flex h-full w-full flex-col bg-background text-foreground">
      <div className="flex flex-col gap-y-4 p-4">
        <div className="flex items-center gap-x-2">
          <DicebearAvatar badgeImageUrl="" imageUrl="" seed="" size={42} />
        </div>
      </div>
      {conversationId}
    </div>
  );
};

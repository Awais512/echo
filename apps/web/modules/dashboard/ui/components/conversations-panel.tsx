"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  ListIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckIcon,
  CornerUpLeftIcon,
} from "lucide-react";

import { ScrollArea } from "@workspace/ui/components/scroll-area";

export const ConversationsPanel = () => {
  return (
    <div className="flex flex-col h-full w-full bg-background text-sidebar-foreground">
      <div className="flex flex-col gap-3.5 border-b p-2">
        <Select defaultValue="all" onValueChange={() => {}} value="all">
          <SelectTrigger className="h-8 border-none px-1.5 shadow-none ring-0 hover:bg-accent hover:text-accent-foreground focus-visible:ring-0">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              <div className="flex items-center gap-2">
                <ListIcon className="size-4" />
                <span>All</span>
              </div>
            </SelectItem>
            <SelectItem value="unresolved">
              <div className="flex items-center gap-2">
                <ArrowRightIcon className="size-4" />
                <span>Unresolved</span>
              </div>
            </SelectItem>
            <SelectItem value="escalated">
              <div className="flex items-center gap-2">
                <ArrowUpIcon className="size-4" />
                <span>Escalated</span>
              </div>
            </SelectItem>
            <SelectItem value="resolved">
              <div className="flex items-center gap-2">
                <CheckIcon className="size-4" />
                <span>Resolved</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className="max-h-[calc(100vh-53px)]">
        <div className="flex w-full flex-1 flex-col text-sm"></div>
      </ScrollArea>
    </div>
  );
};

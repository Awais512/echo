import { ArrowLeftIcon, MicIcon, MicOffIcon } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  AIConversation,
  AIConversationContent,
  AIConversationScrollButton,
} from "@workspace/ui/components/ai/conversation";
import {
  AIMessage,
  AIMessageContent,
} from "@workspace/ui/components/ai/message";
import { useVapi } from "../../hooks/use-vapi";
import { WidgetHeader } from "../components/widget-header";
import { useSetAtom } from "jotai";
import { screenAtom } from "../../atoms/widget-atoms";
import { WidgetFooter } from "../components/widget-footer";

export const WidgetVoiceScreen = () => {
  const setScreen = useSetAtom(screenAtom);

  const { isconnected, isSpeaking } = useVapi();

  return (
    <>
      <WidgetHeader>
        <div className="flex items-center gap-x-2">
          <Button
            variant="transparent"
            size="icon"
            onClick={() => setScreen("selection")}
          >
            <ArrowLeftIcon />
          </Button>
          <p>Voice Chat</p>
        </div>
      </WidgetHeader>
      <div className="flex flex-1 h-full flex-col items-center justify-center gap-y-4">
        <div className="flex items-center justify-center rounded-full border bg-white p-3">
          <MicIcon className="size-6 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground">Transcript will appear here</p>
      </div>
      <div className="border-t bg-background p-4">
        <div className="flex flex-col items-center gap-y-4">
          <div className="flex items-center gap-x-2">
            <div className="size-3 rounded-full animate-pulse bg-red-500" />
            <span className="text-muted-foreground text-sm">
              Assistant Speaking...
            </span>
          </div>
        </div>
      </div>
      <WidgetFooter />
    </>
  );
};

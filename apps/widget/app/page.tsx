"use client";

import { Button } from "@workspace/ui/components/button";
import { useVapi } from "@/modules/widget/hooks/use-vapi";

export default function Page() {
  const {
    isConnecting,
    isSpeaking,
    isconnected,
    transcript,
    startCall,
    endCall,
  } = useVapi();

  return (
    <div className="flex flex-col items-center justify-center min-h-svh max-w-md mx-auto w-full">
      <Button onClick={() => startCall()}>Start Call</Button>
      <Button onClick={() => endCall()} variant="destructive">
        End Call
      </Button>
      <p>isConnected: {`${isconnected}`}</p>
      <p>isConnected: {`${isConnecting}`}</p>
      <p>isConnected: {`${isSpeaking}`}</p>
      <p>{JSON.stringify(transcript)}</p>
    </div>
  );
}

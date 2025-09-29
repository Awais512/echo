"use client";

import { useOrganization } from "@clerk/nextjs";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

export const IntegrationsView = () => {
  const { organization } = useOrganization();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(organization?.id ?? "");
      toast.success("Copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted p-8">
      <div className="mx-auto w-full max-w-screen-md">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl">Setup & Integrations</h1>
          <p className="text-muted-foreground">
            Choose the integrations thats right for you
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="flex items-center gap-4">
            <Label className="w-34" htmlFor="website-id">
              Organization ID
            </Label>
            <Input
              className="flex-1 bg-background font-mono text-sm"
              disabled
              readOnly
              value={organization?.id ?? ""}
            />
            <Button className="gap-2" onClick={handleCopy} size="sm">
              <CopyIcon className="size-4" />
              Copy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

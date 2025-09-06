"use client";
import { z } from "zod";
import { useState } from "react";

import {
  GlobeIcon,
  PhoneCallIcon,
  PhoneIcon,
  WorkflowIcon,
} from "lucide-react";
import { Feature, PluginCard } from "../components/plugin-card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@workspace/ui/components/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";

import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const vapiFeatures: Feature[] = [
  {
    icon: GlobeIcon,
    label: "Web voice calls",
    description: "Voice chat directly in your app",
  },
  {
    icon: PhoneCallIcon,
    label: "Phone numbers",
    description: "Get dedicated business lines",
  },
  {
    icon: PhoneIcon,
    label: "Outbound calls",
    description: "Automated customer outreach",
  },
  {
    icon: WorkflowIcon,
    label: "Workflows",
    description: "Customer conversation flows",
  },
];

const formSchema = z.object({
  publicApiKey: z.string().min(1, { message: "Public Api key is required" }),
  privateApiKey: z.string().min(1, { message: "Private Api Key is required" }),
});

export const VapiView = () => {
  const vapiPlugin = useQuery(api.private.plugins.getOne, { service: "vapi" });

  const [connectOpen, setConnectOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-muted p-8">
      <div className="mx-auto w-full max-w-screen-md">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl">Vapi Plugins</h1>
          <p className="text-muted-foreground">
            Connect vapi to enable AI voice calls and phone support
          </p>
        </div>
        <div className="mt-8">
          {vapiPlugin ? (
            <p>Connected</p>
          ) : (
            <PluginCard
              features={vapiFeatures}
              serviceImage="/vapi.jpg"
              serviceName="Vapi"
              isDisabled={vapiPlugin === undefined}
              onSubmit={() => {}}
            />
          )}
        </div>
      </div>
    </div>
  );
};

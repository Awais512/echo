"use client";
import { ArrowLeftIcon, CheckIcon, CopyIcon, PhoneIcon } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

import { WidgetHeader } from "../components/widget-header";
import { useAtomValue, useSetAtom } from "jotai";
import { screenAtom, widgetSettingsAtom } from "../../atoms/widget-atoms";
import { useState } from "react";
import Link from "next/link";

export const WidgetContactScreen = () => {
  const [copied, setCopied] = useState(false);

  const setScreen = useSetAtom(screenAtom);
  const widgetSettings = useAtomValue(widgetSettingsAtom);
  const phoneNumber = widgetSettings?.vapiSettings?.phoneNumber;

  // Check if phoneNumber looks like an ID (UUID format) rather than actual phone number
  const isPhoneNumberId =
    phoneNumber &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      phoneNumber
    );
  const actualPhoneNumber = isPhoneNumberId ? null : phoneNumber;

  const handleCopy = async () => {
    if (!actualPhoneNumber) {
      return;
    }
    try {
      await navigator.clipboard.writeText(actualPhoneNumber);
      setCopied(true);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

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
          <p>Contact Us</p>
        </div>
      </WidgetHeader>
      <div className="flex h-full flex-col items-center justify-center gap-y-4">
        <div className="flex items-center justify-center rounded-full border bg-white p-3">
          <PhoneIcon className="size-6 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground">Available 24/7</p>
        {actualPhoneNumber && actualPhoneNumber !== "none" ? (
          <p className="font-bold text-2xl">{actualPhoneNumber}</p>
        ) : isPhoneNumberId ? (
          <p className="text-muted-foreground">
            Phone number needs to be reconfigured
          </p>
        ) : (
          <p className="text-muted-foreground">No phone number available</p>
        )}
      </div>
      <div className="border-t bg-background p-4">
        <div className="flex flex-col items-center gap-y-2">
          <Button
            className="w-full"
            onClick={handleCopy}
            size="lg"
            variant="outline"
          >
            {copied ? (
              <>
                <CheckIcon className="mr-2 size-4" />
                Copied
              </>
            ) : (
              <>
                <CopyIcon className="mr-2 size-4" />
                Copy Number
              </>
            )}
          </Button>
          <Button asChild className="w-full" size="lg">
            <Link href={`tel:${actualPhoneNumber}`}>
              <PhoneIcon />
              Call Now
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

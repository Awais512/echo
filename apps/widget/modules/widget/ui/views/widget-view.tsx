"use client";

import { WidgetFooter } from "@/modules/widget/ui/components/widget-footer";
import { WidgetAuthScreen } from "../screens/widget-auth-screen";

interface Props {
  organizationId: string;
}

export const WidgetView = ({ organizationId }: Props) => {
  return (
    <main className="min-h-screen min-w-screen flex w-full h-full flex-col overflow-hidden rounded-xl border bg-muted">
      <WidgetAuthScreen />
      <WidgetFooter />
    </main>
  );
};

"use client";

import { WidgetHeader } from "../components/widget-header";

export const WidgetSelectionScreen = () => {
  return (
    <>
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-6 font-semibold">
          <p className="text-3xl">Hi there! 👋</p>
          <p className="text-lg">Let's get you started</p>
        </div>
      </WidgetHeader>
      <div className="flex flex-1 flex-col items-center justify-center gap-y-4 p-4 text-muted-foreground">
        <p className="text-sm">Selection Screen</p>
      </div>
    </>
  );
};

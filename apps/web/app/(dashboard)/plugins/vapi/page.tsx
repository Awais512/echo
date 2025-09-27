import { PremiiumFeatureOverlay } from "@/modules/billing/ui/components/premium-feature-overlay";
import { VapiView } from "@/modules/plugins/ui/views/vapi-view";
import { Protect } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <Protect
      condition={(has) => has({ plan: "pro" })}
      fallback={
        <PremiiumFeatureOverlay>
          <VapiView />
        </PremiiumFeatureOverlay>
      }
    >
      <VapiView />
    </Protect>
  );
};

export default Page;

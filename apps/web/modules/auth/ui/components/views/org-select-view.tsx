import { OrganizationList } from "@clerk/nextjs";
import React from "react";

export const OrgSelectView = () => {
  return (
    <OrganizationList
      afterCreateOrganizationUrl="/"
      afterSelectOrganizationUrl="/"
      hidePersonal
      skipInvitationScreen
    />
  );
};

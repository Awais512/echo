"use client";

import { useOrganization } from "@clerk/nextjs";
import { AuthLayout } from "./layouts/auth-layout";

export const OrganizationGuard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { organization } = useOrganization();

  if (!organization) {
    return (
      <AuthLayout>
        <p>Create an organization</p>
      </AuthLayout>
    );
  }

  return <div>{children}</div>;
};

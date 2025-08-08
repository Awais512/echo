import { AuthLayout } from "@/modules/auth/ui/components/layouts/auth-layout";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;

import { SignIn } from "@clerk/nextjs";
import { SignUp } from "@clerk/nextjs";

export const SignInView = () => {
  return <SignIn routing="hash" />;
};

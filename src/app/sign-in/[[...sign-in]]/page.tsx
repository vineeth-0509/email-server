import { SignIn as ClerkSignIn } from "@clerk/nextjs";
export default function SignIn() {
  return (
    <div className="justify-center flex h-screen items-center">
      <ClerkSignIn />
    </div>
  );
}

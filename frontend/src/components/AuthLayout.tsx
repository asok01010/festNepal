import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

// A simple wrapper that provides a full-screen container for auth pages.
// Styling is handled by the page-specific CSS so the layout can be customized per-page.
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="auth-root">{children}</div>;
};

export default AuthLayout;

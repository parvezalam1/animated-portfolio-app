import "./globals.css";
import type { Metadata } from "next";
import TransitionProvider from '../components/TransitionProvider.jsx'

export const metadata: Metadata = {
  title: "Portfolio App",
  description: "This is Portfolio App For Represent My Ability & Skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          {/* <TransitionProvider children={children} /> */}
          <TransitionProvider>{children}</TransitionProvider>
        </div>
      </body>
    </html>
  );
}

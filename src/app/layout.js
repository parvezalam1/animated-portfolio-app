import "./globals.css";
import TransitionProvider from '../components/TransitionProvider'

export const metadata= {
  title: "Portfolio App",
  description: "This is Portfolio App For Represent My Ability & Skills",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={''}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}

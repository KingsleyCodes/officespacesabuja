import "./globals.css";
import PageTransition from "../components/PageTransition";

export const metadata = {
  title: "officespacesabuja | Premium Workspaces & Private Offices",
  description: "Bespoke private office suites and elite coworking ecosystems in Abuja.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
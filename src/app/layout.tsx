import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Basic Blog Site",
  description: "Basic blog website using Next.js and MaterialUI ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <AppRouterCacheProvider>
          <CssBaseline />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

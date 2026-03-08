import "./globals.css";
import MatrixBackground from "@/components/MatrixBackground";
import type { ReactNode } from "react";

export const metadata = {
  title: "Rishi Kaul | Systems Engineer",
  description: "Cybersecurity, Systems, Software",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="cyber-grid min-h-screen">
        <MatrixBackground />
        {children}
      </body>
    </html>
  );
}
import "./globals.css";
import MatrixBackground from "@/components/MatrixBackground";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "Rishi Kaul | Cybersecurity Engineer",
  description: "Cybersecurity, DevSecOps, Systems"
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <html lang="en">

      <body className="cyber-grid min-h-screen">

        <MatrixBackground />

        <Navbar />

        {/* THIS FIXES THE OVERLAP */}
        <div className="pt-24">
          {children}
        </div>

      </body>

    </html>
  );
}
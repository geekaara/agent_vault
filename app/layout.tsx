import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import React from "react";

const spaceMono = localFont({
    src: [
        {
            path: './fonts/SpaceMono-Bold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/SpaceMono-Regular.ttf',
            weight: '400',
            style: 'normal',
        }
    ],
    variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: "Agent Vault",
  description: "Hire and Sell AI Agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={spaceMono.variable}
      >
        {children}
      </body>
    </html>
  );
}

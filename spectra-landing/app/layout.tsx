import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MatrixRain } from "../components/MatrixRain";
import { SystemStatusSidebar } from "../components/SystemStatusSidebar";
import { CRTOverlay } from "../components/CRTOverlay";
import { PanicButton } from "../components/PanicButton";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SPECTRA Protocol",
  description: "Democratizing Cyber-Defense.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jetbrainsMono.variable} antialiased flex overflow-hidden h-screen bg-black`}
      >
        <CRTOverlay />
        <MatrixRain />
        <PanicButton />

        {/* Fixed Sidebar */}
        <SystemStatusSidebar />

        {/* Main Content Area */}
        <div className="flex-1 relative z-10 h-full overflow-y-auto overflow-x-hidden lg:ml-[20%]">
          {children}
        </div>
      </body>
    </html>
  );
}

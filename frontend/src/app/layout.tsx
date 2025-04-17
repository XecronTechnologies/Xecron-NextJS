import type { Metadata ,Viewport} from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/providers"; //https://chat.deepseek.com/a/chat/s/01b4bdf6-f162-494c-ae83-6407334f3a9c
import Navbar from "@/components/common/Navbar";
import { FooterBar } from "@/components/common/FooterBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#fff",
  colorScheme: "light",
  // Alternatively, set it to 'dark' or 'only dark' to force the dark mode.
  // colorScheme: 'dark' 
};
export const metadata: Metadata = {
  title: "Xecron Technologies - Innovative Solutions",
  description: "We provide cutting-edge web, mobile, and desktop applications tailored to your needs.",
  keywords: "web apps, mobile apps, desktop apps, software development, startup",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return(
  <html lang="en">
    <body className={inter.className}>
      <Providers>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <FooterBar />
        </div>
      </Providers>
    </body>
  </html>
)
}
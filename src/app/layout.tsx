import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "navyanth",
  description: "personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"suppressHydrationWarning>
       <head>
            <link rel="apple-touch-icon" sizes="180x180" href="icon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="icon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="icon/favicon-16x16.png"/>
            <link rel="manifest" href="icon/site.webmanifest"/>
       </head>
       <body>
      
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
             <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
    </html>
  );
}

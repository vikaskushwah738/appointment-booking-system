import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Clinic Now : Doctor appointment app",
  description: "Easily schedule medical consultations, manage appointments, and pay online — all in one secure, responsive platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}
        >
          <Header />
          <ThemeProvider
            attribute="class"
            // defaultTheme="system"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            {/* footer */}
            <Footer />
          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}

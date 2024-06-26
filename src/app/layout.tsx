import Footer from "@/components/site/footer"
import Navbar from "@/components/site/navbar"
import Providers from "@/components/ui/providers"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "./globals.css"

const urbanist = Urbanist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "मेरा Squad",
  description:
    "Pick your top 15 players for the upcoming T20 Men's World Cup and share your squad with everyone."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={urbanist.className}>
          <div className="flex min-h-dvh flex-col gap-10 selection:bg-primary/80 selection:text-primary-foreground">
            <Navbar />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <Analytics />
        </body>
      </Providers>
    </html>
  )
}

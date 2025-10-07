import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <Script
            src="https://cdn.utmify.com.br/scripts/utms/latest.js"
            data-utmify-prevent-subids
            strategy="afterInteractive"
          />

          <Script id="utmify-pixel" strategy="afterInteractive">
            {`
              window.pixelId = "68e4b4500b29d732ddeba688";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `}
          </Script>
        </Suspense>

        {children}
        <Analytics />
      </body>
    </html>
  )
}

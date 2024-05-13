 import { Inter } from "next/font/google";
import "./globals.css";

import { GenerateMetadata } from "@/lib/utils"
import StateProvider from "@/Components/UI/StateProvider";

export const metadata =GenerateMetadata({})
 const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider>
        {children}
        </StateProvider>
      </body>
    </html>
  )
}

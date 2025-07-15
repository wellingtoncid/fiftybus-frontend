"use client"

import { ThemeProvider } from "@/components/ThemeProvider"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex h-screen overflow-hidden">
            {/* Sidebar fixa à esquerda */}
            <Sidebar />

            {/* Conteúdo principal com navbar no topo */}
            <div className="flex flex-col flex-1">
              <Navbar />

              <main className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
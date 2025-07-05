"use client"

import ThemeToggle from "@/components/ThemeToggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900 dark:bg-gray-900 dark:text-white gap-4">
      <h1 className="text-4xl font-bold">Fiftybus subindo a bordo! 🚍🔥</h1>
      <ThemeToggle />
    </main>
  )
}
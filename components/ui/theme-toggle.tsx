import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import * as React from 'react'

export function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="ml-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-900" />
      )}
    </button>
  )
}

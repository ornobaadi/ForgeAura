"use client" 

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ThemeToggleButton } from "@/components/ui/theme-toggle"
import { Menu, X } from "lucide-react"
import { onAuthStateChanged, User } from "firebase/auth"
import { auth } from "@/lib/firebase"
import UserAvatarMenu from "@/components/comp-377"
import Link from "next/link"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = React.useState<User | null>(null)

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser)
    })
    return () => unsubscribe()
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="flex justify-center w-full py-6 px-4">
      <div className="flex items-center justify-between px-6 py-3 
        bg-white/80 dark:bg-[#18181b]/80 
        border border-gray-200 dark:border-gray-700 
        text-gray-900 dark:text-gray-100 
        backdrop-blur-md rounded-full shadow-lg w-full max-w-5xl relative z-10 transition-colors">
        <div className="flex items-center">
          <motion.div
            className="w-8 h-8 mr-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9966" />
                  <stop offset="1" stopColor="#FF5E62" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          
        </div>
        
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[{label: "Home", href: "/"}, {label: "Pricing", href: "/pricing"}, {label: "Docs", href: "/docs"}, {label: "Projects", href: "/projects"}].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link href={item.href} className="text-sm text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-medium">
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

        {/* Desktop CTA Button + Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4 text-gray-900 dark:text-gray-100">
          <ThemeToggleButton />
          {user ? (
            <UserAvatarMenu
              displayName={user.displayName || "User"}
              email={user.email || ""}
              photoURL={user.photoURL || undefined}
            />
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center justify-center px-5 py-2 text-sm text-white bg-black dark:bg-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
            >
              Get Started
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          <Menu className="h-6 w-6 text-gray-900" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-[#18181b] z-50 pt-24 px-6 md:hidden transition-colors"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-gray-900" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {["Home", "Pricing", "Docs", "Projects"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <Link href={item === "Home" ? "/" : item === "Pricing" ? "/pricing" : item === "Docs" ? "/docs" : "/projects"} className="text-base text-gray-900 dark:text-gray-100 font-medium transition-colors" onClick={toggleMenu}>
                    {item}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                {user ? (
                  <UserAvatarMenu
                    displayName={user.displayName || "User"}
                    email={user.email || ""}
                    photoURL={user.photoURL || undefined}
                  />
                ) : (
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-black dark:bg-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors "
                    onClick={toggleMenu}
                  >
                    Get Started
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


export { Navbar1 }
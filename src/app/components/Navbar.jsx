import React from 'react'
import Link from 'next/link'
import ThemeButton from './ThemeButton'
// import Themebutton from "./ThemeButton";

export const Navbar = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <h1 className="text-3xl font-medium">
              LetsCode <span className="font-bold text-green-500">Blog</span>
            </h1>
          </Link>

          <ThemeButton />
        </div>
      </div>
    </div>
  )
}

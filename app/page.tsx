'use client'

import PopOverButton from "@/components/ui/GeneralPopover"
import SearchInput from "@/components/ui/SearchInput"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative w-full">
      <div className="flex md:flex-row flex-col min-h-screen w-full">
        <div className="w-full md:w-[20%] md:max-w-xs"></div>
        <div className="w-full md:w-[80%] border-l">
          <SearchInput />
        </div>
      </div>

      <div className="absolute right-4 bottom-4">
        <PopOverButton />
      </div>
    </main>
  )
}

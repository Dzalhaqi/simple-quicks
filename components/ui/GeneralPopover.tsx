'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Image from "next/image"

export default function GeneralPopover() {


  return (
    <Popover>
      <PopoverTrigger
        className="p-3 flex items-center justify-center rounded-full bg-[#2F80ED]"
      >
        <div>
          <Image
            src={'/img/assets/cloud-lightning.svg'}
            alt="cloud-lightning"
            priority={true}
            height={30}
            width={30}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="shadow-none border-none w-fit p-4">
        <div className="flex gap-x-5">
          <div className="p-3 flex items-center justify-center rounded-full bg-[#E0E0E0]"
          >
            <Image
              src={'/img/assets/inbox.svg'}
              alt="inbox"
              height={20}
              width={20} />
          </div>
          <div className="p-3 flex items-center justify-center rounded-full bg-[#E0E0E0]">
            <Image
              src={'/img/assets/book.svg'}
              alt="book"
              height={20}
              width={20} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

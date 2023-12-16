import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Image from "next/image"

export default function InboxPopover() {
  return (
    <Popover>
      <PopoverTrigger
        className="p-3 flex items-center justify-center rounded-full bg-[#2F80ED]"
      >
        <Image
          src={'/img/assets/inbox.svg'}
          alt="inbox"
          height={20}
          width={20} />
      </PopoverTrigger>
      <PopoverContent className="shadow-none border-none w-fit p-4" side="right">
        <div className="flex gap-x-5">
          <div className="p-5 flex items-center justify-center rounded-full bg-[#E0E0E0]">
            <Image
              src={'/img/assets/.svg'}
              alt="cloud-lightning"
              priority={true}
              height={40}
              width={40}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

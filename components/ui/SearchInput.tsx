import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function SearchInput() {
  return (
    <div className="relative flex items-center">
      <Image
        src={'/img/assets/search.svg'}
        alt="Search"
        height={20}
        width={20}
        className="absolute left-3"
      />
      <Input
        className="pl-10 w-full border-none bg-[#4f4f4f] text-gray-300"
        type="keyword"
        placeholder=""
      />
    </div>
  );
}
import Image from "next/image"

interface SingleMethodProps {
  title: string
  description: string
}

export default function SingleMethod({ title }: SingleMethodProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-[4px] bg-actif">
        <Image src="/images/icon/icon-04.svg" width={36} height={36} alt="title" />
      </div>
      <h2 className="flex-1 text-lg font-clashdisplay font-bold text-white leading-tight">{title}</h2>
    </div>
  )
}

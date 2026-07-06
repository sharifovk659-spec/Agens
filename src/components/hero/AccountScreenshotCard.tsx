import Image from "next/image";

type AccountScreenshotCardProps = {
  src: string;
  index: number;
};

export default function AccountScreenshotCard({
  src,
  index,
}: AccountScreenshotCardProps) {
  return (
    <div className="w-[172px] shrink-0 overflow-hidden rounded-2xl border border-gold/15 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.45)] sm:w-[186px]">
      <Image
        src={src}
        alt={`Client account ${index + 1}`}
        width={372}
        height={280}
        className="h-auto w-full object-cover object-top"
        loading="lazy"
        quality={95}
        unoptimized
      />
    </div>
  );
}

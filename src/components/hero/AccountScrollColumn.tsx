import AccountScreenshotCard from "@/components/hero/AccountScreenshotCard";

type AccountScrollColumnProps = {
  images: readonly string[];
  side: "left" | "right";
};

export default function AccountScrollColumn({
  images,
  side,
}: AccountScrollColumnProps) {
  // Triple the list so CSS -33.333% loop never shows an empty gap
  const items = [...images, ...images, ...images];

  return (
    <div
      className={`pointer-events-none absolute top-0 z-[8] hidden h-full w-[188px] overflow-hidden md:block lg:w-[200px] xl:w-[210px] ${
        side === "left" ? "left-0 md:left-1 xl:left-3" : "right-0 md:right-1 xl:right-3"
      }`}
      aria-hidden
    >
      <div
        className={`absolute top-0 z-10 h-full w-[2px] bg-gradient-to-b from-transparent via-gold/50 to-transparent ${
          side === "left" ? "right-0" : "left-0"
        }`}
      />

      <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-t from-background via-background/90 to-transparent" />

      <div
        className={`flex flex-col gap-3.5 py-4 ${
          side === "left" ? "instagram-scroll-column-up" : "instagram-scroll-column-down"
        }`}
      >
        {items.map((src, i) => (
          <AccountScreenshotCard key={`${src}-${i}`} src={src} index={i % images.length} />
        ))}
      </div>
    </div>
  );
}

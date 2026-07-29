import Image from "next/image";
import { DOLLAR_IMAGE, FLOATING_BILLS } from "@/lib/hero";

export default function MoneyLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden" aria-hidden>
      {/* Full-width base money */}
      <div className="absolute inset-x-0 bottom-0 h-[60%] min-h-[240px] w-full sm:h-[72%] sm:min-h-[320px] sm:h-[75%]">
        <Image
          src={DOLLAR_IMAGE}
          alt=""
          fill
          sizes="100vw"
          quality={85}
          className="h-full w-full object-cover object-bottom brightness-[0.82] saturate-[0.92] sm:brightness-[0.88] sm:saturate-[0.95]"
          priority
        />
        <div className="absolute inset-0 bg-background/14 sm:bg-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/78 via-background/32 to-transparent sm:from-background/72 sm:via-background/24" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/55 to-transparent sm:h-40 sm:from-background/42" />
      </div>

      <div className="hidden sm:contents">
        {FLOATING_BILLS.map((bill, i) => (
          <div
            key={i}
            className="dollar-drift absolute"
            style={{
              top: bill.top,
              bottom: bill.bottom,
              left: bill.left,
              right: bill.right,
              animationDelay: bill.delay,
            }}
          >
            <div
              className="relative overflow-hidden rounded-sm"
              style={{
                width: bill.width,
                height: bill.width * 0.42,
                opacity: bill.opacity,
                filter: `blur(${bill.blur}px)`,
                transform: `rotate(${bill.rotate}deg)`,
              }}
            >
              <Image
                src={DOLLAR_IMAGE}
                alt=""
                fill
                sizes={`${bill.width}px`}
                className="object-cover brightness-[0.92] saturate-[0.95]"
                style={{ objectPosition: bill.objectPosition }}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

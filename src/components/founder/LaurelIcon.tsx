type LaurelIconProps = {
  className?: string;
  side?: "left" | "right";
};

/** Side laurel branch — sample lime via currentColor */
export default function LaurelIcon({ className = "", side = "left" }: LaurelIconProps) {
  return (
    <svg
      viewBox="0 0 28 56"
      fill="currentColor"
      aria-hidden
      className={`${className} ${side === "right" ? "-scale-x-100" : ""}`}
    >
      <path d="M18 2c-1.2 4.5-4.8 8.2-9.5 10.2 3.8 1.2 6.8 4.2 8.2 7.8-4.5-1.5-8.5.2-11.2 3.5 3.5 1.8 6 5 7.2 8.5-4.2-1-7.8.8-10.2 3.8 3.2 2 5.5 5.2 6.5 8.8-3.5-.6-6.5 1.2-8.5 4 2.8 2.2 4.8 5.5 5.5 9.2 5.5-6.5 12.5-16 12-35.8z" />
      <path
        d="M20 6c-.8 3.5-3.2 6.2-6.5 7.8 2.8 1.2 5 3.5 6 6.5-3.2-1-6 .2-8 2.8 2.5 1.5 4.2 4 5 7-3-.8-5.5.5-7.2 2.8 2.2 1.5 3.8 4 4.5 6.8"
        opacity="0.55"
      />
      <path
        d="M12 4c1.5 8 2 18 1.2 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

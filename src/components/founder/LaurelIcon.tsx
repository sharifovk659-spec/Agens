type LaurelIconProps = {
  className?: string;
};

export default function LaurelIcon({ className = "" }: LaurelIconProps) {
  return (
    <svg
      viewBox="0 0 48 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M4 14c2-6 6-10 10-12M8 16c1.5-4 4-7 7-9M44 14c-2-6-6-10-10-12M40 16c-1.5-4-4-7-7-9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M14 20c2-1 4-1.5 6-1.5s4 .5 6 1.5M18 22h12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

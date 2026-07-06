type LaurelIconProps = {
  className?: string;
};

export default function LaurelIcon({ className = "" }: LaurelIconProps) {
  return (
    <svg viewBox="0 0 32 20" fill="none" aria-hidden className={className}>
      <path
        d="M3 12C5 7 9 4 14 3M6 14C7.5 10 10 8 13 7M29 12C27 7 23 4 18 3M26 14C24.5 10 22 8 19 7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

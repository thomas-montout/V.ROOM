interface Props {
  onClick: () => void;
}

export default function VBotFAB({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="fixed right-8 bottom-8 z-40 w-16 h-16 rounded-full bg-vroom-accent text-white border-0 cursor-pointer flex items-center justify-center shadow-[0_8px_24px_rgba(196,0,0,0.35),0_2px_4px_rgba(0,0,0,0.15)] hover:bg-vroom-accent-hover transition-colors"
      aria-label="Ouvrir V.BOT"
    >
      <span className="flex flex-col items-center leading-none font-serif font-bold">
        <span className="text-[9px] tracking-[0.2em] opacity-85">V.</span>
        <span className="text-[16px]">BOT</span>
      </span>
    </button>
  );
}

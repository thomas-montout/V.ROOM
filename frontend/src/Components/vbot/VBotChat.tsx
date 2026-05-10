import { useState, useRef, useEffect } from "react";
import type { Msg } from "./useVBot";

interface Props {
  messages: Msg[];
  onClose: () => void;
  onSend: (text: string) => void;
  isLoading?: boolean;
}

export default function VBotChat({ messages, onClose, onSend, isLoading }: Props) {
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    onSend(text);
  }

  return (
    <div className="fixed right-8 bottom-8 z-41 w-[420px] h-[580px] bg-white border border-vroom-line rounded-lg shadow-[0_16px_48px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.06)] flex flex-col overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-5 py-4 bg-[#0a0a0a] text-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-vroom-accent flex items-center justify-center font-serif font-bold text-[11px] tracking-[0.05em]">
            V.
          </div>
          <div>
            <div className="font-medium text-[14px]">V.BOT</div>
            <div className="text-[11px] text-[#9a9a9a] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3fcf75] inline-block" />
              Assistant en ligne
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="bg-transparent border-0 text-white text-[18px] cursor-pointer leading-none"
          aria-label="Fermer"
        >
          ✕
        </button>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-3.5 bg-vroom-bg">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] px-4 py-3 text-[14px] leading-relaxed rounded-[14px] ${
              m.role === "user"
                ? "self-end bg-[#0a0a0a] text-white rounded-tr-[4px]"
                : "self-start bg-white text-vroom-ink border border-vroom-line rounded-tl-[4px]"
            }`}
          >
            {m.text}
          </div>
        ))}
        {isLoading && (
          <div className="self-start bg-white border border-vroom-line rounded-[14px] rounded-tl-[4px] px-4 py-3 text-[14px] text-vroom-ink3">
            …
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex gap-2.5 items-center p-4 border-t border-vroom-line bg-white shrink-0"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Écrivez votre message…"
          className="flex-1 px-4 py-3 border border-vroom-line rounded-full text-[13px] outline-none font-sans"
        />
        <button
          type="submit"
          className="w-10 h-10 rounded-full bg-vroom-accent text-white border-0 cursor-pointer text-[16px] flex items-center justify-center hover:bg-vroom-accent-hover transition-colors"
        >
          ↑
        </button>
      </form>
    </div>
  );
}

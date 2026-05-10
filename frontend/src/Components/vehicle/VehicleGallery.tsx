import { useState } from "react";

interface Props {
  images: string[];
  alt: string;
  tag?: string;
}

export default function VehicleGallery({ images, alt, tag }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const mainSrc = images[activeIdx] ?? images[0];

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[16/10] bg-vroom-surface overflow-hidden">
        {mainSrc && (
          <img
            src={mainSrc}
            alt={alt}
            className="w-full h-full object-cover"
          />
        )}
        {tag && (
          <span className="absolute top-5 left-5 bg-vroom-accent text-white font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm">
            {tag}
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2.5">
          {images.slice(0, 4).map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`aspect-[16/10] overflow-hidden bg-vroom-surface border-0 p-0 cursor-pointer ${
                i === activeIdx
                  ? "outline outline-2 outline-vroom-accent"
                  : "outline outline-1 outline-vroom-line"
              }`}
            >
              <img
                src={src}
                alt={`${alt} ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

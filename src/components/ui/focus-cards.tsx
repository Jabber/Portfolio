"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div
        className={cn(
          "absolute inset-0 flex items-end transition-all duration-300",
          hovered === index 
            ? "opacity-100 bg-black/50 py-4 px-4" 
            : "bg-gradient-to-b from-transparent via-black/25 to-black/40 py-12 px-4"
        )}
      >
        <div 
          className={cn(
            "font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 transition-all duration-300",
            hovered === index 
              ? "text-base md:text-lg opacity-40" 
              : "text-xl md:text-2xl opacity-100"
          )}
        >
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  subtitle: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <div
          key={card.title}
          className="flex flex-col relative"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <Card
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
          <div
            className={cn(
              "absolute top-0 left-0 right-0 p-4 transition-opacity duration-100 rounded-t-lg",
              hovered === index ? "opacity-100" : "opacity-0"
            )}
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
            }}
          >
            <p className="text-sm text-white">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

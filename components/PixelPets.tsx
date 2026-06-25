"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

type PetType = {
  folder: string;
  size: number;
  walkFrames: number;
  idleFrames: number;
  yOffset: number;
  speed: number;
};

const PET_TYPES: PetType[] = [
  { folder: "1 Dog", size: 48, walkFrames: 6, idleFrames: 4, yOffset: 2, speed: 8 },
  // { folder: "2 Dog 2", size: 48, walkFrames: 6, idleFrames: 4, yOffset: 2, speed: 12 },
  // { folder: "3 Cat", size: 48, walkFrames: 6, idleFrames: 4, yOffset: 2, speed: 10 },
  { folder: "4 Cat 2", size: 48, walkFrames: 6, idleFrames: 4, yOffset: 2, speed: 6 },

];

function Pet({ petData, initialX }: { petData: PetType; initialX: number }) {
  const controls = useAnimation();
  const [state, setState] = useState<"idle" | "walk">("idle");
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    let isMounted = true;
    let currentX = initialX;

    const loop = async () => {
      await controls.set({ left: `${currentX}%` });

      while (isMounted) {
        const willWalk = Math.random() > 0.2;

        if (!willWalk) {
          setState("idle");
          const idleTime = Math.random() * 3000 + 1000;
          await new Promise((r) => setTimeout(r, idleTime));
        } else {
          setState("walk");
          // Target position between 2% and 90% to stay within container bounds
          const targetX = Math.random() * 88 + 2;
          const dist = Math.abs(targetX - currentX);

          setDirection(targetX > currentX ? 1 : -1);

          const duration = dist / petData.speed;

          if (isMounted) {
            await controls.start({
              left: `${targetX}%`,
              transition: { duration, ease: "linear" },
            });
            currentX = targetX;
          }
        }
      }
    };

    loop();
    return () => {
      isMounted = false;
    };
  }, [controls, initialX, petData.speed]);

  const animName =
    state === "walk"
      ? `sprite-walk-${petData.size}-${petData.walkFrames}f`
      : `sprite-idle-${petData.size}-${petData.idleFrames}f`;
  const animSteps = state === "walk" ? petData.walkFrames : petData.idleFrames;

  return (
    <motion.div
      animate={controls}
      className="absolute"
      style={{ bottom: `${petData.yOffset}px` }}
    >
      <div style={{ transform: `scaleX(${direction})` }}>
        <div
          style={{
            width: `${petData.size}px`,
            height: `${petData.size}px`,
            backgroundImage: `url('/assets/pixel_pets/${encodeURI(petData.folder)}/${state === "walk" ? "Walk" : "Idle"}.png')`,
            animation: `${animName} 0.6s steps(${animSteps}) infinite`,
            imageRendering: "pixelated",
          }}
        />
      </div>
    </motion.div>
  );
}

export function PixelPets() {
  const [pets, setPets] = useState<{ id: number; data: PetType; startX: number }[]>([]);

  useEffect(() => {
    const shuffled = [...PET_TYPES].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3).map((data, i) => ({
      id: i,
      data,
      startX: Math.random() * 88 + 2, // 2% to 90%
    }));
    setPets(selected);
  }, []);

  if (pets.length === 0) return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {pets.map((p) => (
        <Pet key={p.id} petData={p.data} initialX={p.startX} />
      ))}
    </div>
  );
}

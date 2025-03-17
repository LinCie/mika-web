"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import listeningBackground from "@/assets/svg/listening-background.svg";
import listeningMusic from "@/assets/svg/listening-music.svg";
import listeningCharacter from "@/assets/svg/listening-character.svg";

import { Button } from "@/components/ui/button";
import { heroData } from "@/data";

function HeroSection() {
  const { title, subtitle } = heroData;

  const MotionImage = motion.create(Image);

  return (
    <section
      id="hero-section"
      className="flex h-screen w-full flex-col items-center justify-center gap-8 px-6 md:flex-row md:gap-4 md:px-32"
    >
      <div className="flex max-w-6xl flex-col items-center justify-center md:items-start">
        <h1 className="text-primary mb-2 text-center text-4xl font-bold md:text-left md:text-6xl">
          {title}
        </h1>
        <p className="mb-4 text-center md:mb-5 md:text-left md:text-xl">
          {subtitle}
        </p>
        <Button
          effect="expandIcon"
          icon={ArrowRight}
          iconPlacement="right"
          className="w-fit"
          asChild
        >
          <Link href="/invite" target="_blank">
            Invite me!
          </Link>
        </Button>
      </div>
      <div className="relative flex w-full max-w-2xl items-center justify-center">
        <div className="relative flex items-center justify-center">
          <MotionImage
            src={listeningBackground}
            alt=""
            aria-hidden
            className="absolute"
            animate={{ scale: [1, 1.025, 1, 0.975, 1] }}
            transition={{
              ease: "linear",
              duration: 3.5,
              repeat: Infinity,
            }}
          />
          <MotionImage
            src={listeningMusic}
            alt=""
            aria-hidden
            className="absolute"
            animate={{ y: [0, 6, 0, -6, 0] }}
            transition={{
              ease: "linear",
              duration: 2.5,
              repeat: Infinity,
            }}
          />
          <MotionImage
            src={listeningCharacter}
            alt="Woman Listening to Music"
            className="relative"
            animate={{ y: [0, -6, 0, 6, 0] }}
            transition={{
              ease: "linear",
              duration: 2.5,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}

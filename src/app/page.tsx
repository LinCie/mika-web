"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import listeningBackground from "@/assets/svg/listening-background.svg";
import listeningMusic from "@/assets/svg/listening-music.svg";
import listeningCharacter from "@/assets/svg/listening-character.svg";

import { Section, SectionContent } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { heroData } from "@/data";

function HeroSection() {
  const { title, subtitle } = heroData;

  const MotionImage = motion.create(Image);

  return (
    <Section className="bg-black/85 backdrop-blur-xs">
      <SectionContent className="flex min-h-screen flex-col items-center justify-center gap-4 md:flex-row">
        <div className="flex flex-col items-center justify-center md:items-start">
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
        <div className="relative flex w-full items-center justify-center">
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
      </SectionContent>
    </Section>
  );
}

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}

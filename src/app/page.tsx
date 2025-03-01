import Image from "next/image";

import listening from "@/assets/svg/listening.svg";

import { heroData } from "@/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function HeroSection() {
  const { title, subtitle } = heroData;

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
      <div className="flex w-full max-w-2xl items-center justify-center">
        <Image src={listening} alt="Woman Listening to Music"></Image>
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

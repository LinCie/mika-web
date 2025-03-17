import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

function SectionContent({
  className,
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("mx-auto max-w-7xl px-6", className)} {...props}>
      {children}
    </div>
  );
}

function Section({ className, children, ...props }: ComponentProps<"section">) {
  return (
    <section className={cn(className)} {...props}>
      {children}
    </section>
  );
}

export { Section, SectionContent };

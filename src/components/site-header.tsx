import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const APP_NAME = "Veura";

function AppStoreBadge({ className }: { className?: string }) {
  return (
    <a
      href="#"
      aria-label="Download on the App Store"
      className={
        "inline-flex items-center justify-center rounded-xl shadow-[0_18px_50px_rgba(0,0,0,0.18)] ring-1 ring-black/10 transition-transform hover:-translate-y-0.5 active:translate-y-0 " +
        (className ?? "")
      }
    >
      <img
        src="/brand/app-store-badge.svg"
        alt="Download on the App Store"
        className="h-12 w-auto"
      />
    </a>
  );
}

export function SiteHeader({
  variant = "home",
}: {
  variant?: "home" | "page";
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href={variant === "home" ? "#" : "/"} className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="relative size-8 overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
            <Image
              src="/brand/app-icon.png"
              alt="Veura"
              fill
              className="object-cover"
              sizes="32px"
              priority
            />
          </div>
          <span>{APP_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {variant === "home" ? (
            <>
              <Button asChild variant="ghost">
                <Link href="/#features">Features</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/#how">How it works</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/#faq">FAQ</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link href="/">Home</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/privacy">Privacy</Link>
              </Button>
            </>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <AppStoreBadge />
          </div>
          <Button asChild className="sm:hidden">
            <a href={variant === "home" ? "#download" : "/#download"}>
              Get <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

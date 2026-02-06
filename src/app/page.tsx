import Image from "next/image";

import recordShot from "@/assets/screens/record.jpg";
import shareShot from "@/assets/screens/share-extension.jpg";
import transcriptionShot from "@/assets/screens/transcription-blurred.jpg";
import settingsShot from "@/assets/screens/settings.jpg";

import { ArrowRight, Lock, Mic, Share2, Sparkles, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const APP_NAME = "Veura";
const TAGLINE = "The fastest way to turn voice notes into text.";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Screenshots />
      <Testimonials />
      <LogosStrip />
      <Features />
      <HowItWorks />
      <Privacy />
      <Platforms />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="relative size-8 overflow-hidden rounded-xl border bg-muted">
            <Image
              src="/brand/app-icon.png"
              alt="Veura app icon"
              fill
              className="object-cover"
              sizes="32px"
              priority
            />
          </div>
          <span>{APP_NAME}</span>
          <Badge variant="secondary" className="ml-2 hidden sm:inline-flex">
            iOS
          </Badge>
        </a>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <a href="#features">Features</a>
          </Button>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <a href="#how">How it works</a>
          </Button>
          <Button asChild>
            <a href="#download">
              Get the app <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      {/* subtle dotted paper */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.25] [background-image:radial-gradient(rgba(55,48,163,0.22)_1px,transparent_1px)] [background-size:14px_14px]" />

      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <header className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <div className="relative size-16 overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
              <Image
                src="/brand/app-icon.png"
                alt="Veura"
                fill
                className="object-cover"
                sizes="64px"
                priority
              />
            </div>
            <div className="text-left">
              <div className="text-3xl font-semibold tracking-tight sm:text-4xl">{APP_NAME}</div>
              <div className="text-sm text-muted-foreground">Voice notes → text</div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <Badge className="gap-1 bg-primary text-primary-foreground hover:bg-primary/90">
              <Zap className="size-3.5" />
              Action Button ready
            </Badge>
            <Badge variant="secondary" className="gap-1 bg-secondary text-secondary-foreground">
              <Mic className="size-3.5" />
              On-device
            </Badge>
            <Badge variant="secondary" className="gap-1 bg-secondary text-secondary-foreground">
              <Share2 className="size-3.5" />
              WhatsApp import
            </Badge>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            {TAGLINE}
          </h1>

          <p className="mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            {APP_NAME} turns recordings and voice notes into plain text you can copy and send.
            No accounts. No clutter. Just text.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#download">
                Get Veura <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-secondary text-secondary-foreground hover:bg-white"
            >
              <a href="#how">See how it works</a>
            </Button>
          </div>
        </header>

        <div className="relative mt-12 grid items-center gap-10 md:mt-16 md:grid-cols-[1fr_420px_1fr]">
          {/* left polaroids */}
          <div className="relative hidden md:block">
            <Polaroid
              src="/screens/share-extension.jpg"
              label="Import from WhatsApp"
              className="absolute left-6 top-0 -rotate-6"
            />
            <Polaroid
              src="/screens/transcription-blurred.jpg"
              label="Plain text output"
              className="absolute left-20 top-56 rotate-6"
            />
          </div>

          {/* center phone */}
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="relative overflow-hidden rounded-[2.3rem] border-[10px] border-zinc-950 bg-zinc-950 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              <div className="relative aspect-[9/19.5] w-full">
                <Image
                  src="/screens/record.jpg"
                  alt="Veura recording screen"
                  fill
                  className="object-cover"
                  sizes="420px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* right polaroids */}
          <div className="relative hidden md:block">
            <Polaroid
              src="/screens/settings.jpg"
              label="On-device models"
              className="absolute right-10 top-8 rotate-6"
            />
          </div>

          {/* mobile: show 3 polaroids under phone */}
          <div className="mx-auto grid max-w-[520px] grid-cols-1 gap-4 md:hidden">
            <Polaroid src="/screens/share-extension.jpg" label="Import from WhatsApp" />
            <Polaroid src="/screens/transcription-blurred.jpg" label="Plain text output" />
            <Polaroid src="/screens/settings.jpg" label="On-device models" />
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Screenshots are real. Transcript content blurred for privacy.
        </p>
      </div>
    </section>
  );
}

function Polaroid({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={
        "w-[260px] rounded-[22px] bg-white/90 p-3 shadow-[0_20px_55px_rgba(0,0,0,0.18)] ring-1 ring-black/10 " +
        (className ?? "")
      }
    >
      <div className="relative overflow-hidden rounded-[16px] bg-zinc-100">
        <div className="relative aspect-[9/19.5] w-full">
          <Image
            src={src}
            alt={label}
            fill
            className="object-cover"
            sizes="260px"
            loading="lazy"
          />
        </div>
      </div>
      <div className="px-1 pt-3 text-center text-xs font-medium text-zinc-700">
        {label}
      </div>
    </div>
  );
}

function Screenshots() {
  const shots = [
    {
      src: recordShot,
      alt: "Veura recording screen",
      label: "Quick Dictation",
    },
    {
      src: shareShot,
      alt: "Veura share extension importing a voice note",
      label: "Import from WhatsApp",
    },
    {
      src: transcriptionShot,
      alt: "Veura transcription output screen",
      label: "Plain text output",
    },
    {
      src: settingsShot,
      alt: "Veura settings showing downloadable Whisper models",
      label: "On-device models",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 pb-6 md:pb-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {shots.map((shot, idx) => (
          <Card
            key={shot.label}
            className="overflow-hidden border-black/10 bg-white/70 shadow-[0_16px_45px_rgba(0,0,0,0.14)]"
          >
            <div className="border-b border-black/10 bg-white/50 px-3 py-2 text-xs font-medium text-muted-foreground">
              {shot.label}
            </div>
            <div className="relative aspect-[9/19.5] w-full">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 25vw, 50vw"
                priority={idx === 0}
              />
            </div>
          </Card>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Real screenshots. Transcript content blurred for privacy.
      </p>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote: "Finally I don’t have to listen to 3 minutes of voice note at 2× speed just to get ‘ok’.",
      name: "Recovered WhatsApp Survivor",
      image: "/testimonial-images-3d/t1.webp",
    },
    {
      quote: "I started replying to my friends again. Turns out I wasn’t busy — I just hate voice notes.",
      name: "Reformed Ghoster",
      image: "/testimonial-images-3d/t2.webp",
    },
    {
      quote: "Veura turned ‘uhh… so… basically…’ into actual sentences. Miracles are real.",
      name: "Professional Meeting Attendee",
      image: "/testimonial-images-3d/t3.webp",
    },
    {
      quote: "My group chat is now readable. I feel like I’ve unlocked DLC for friendship.",
      name: "Chat Archaeologist",
      image: "/testimonial-images-3d/t4.webp",
    },
    {
      quote: "I copy-pasted a voice note into a polite message and immediately looked like I have my life together.",
      name: "Accidental Adult",
      image: "/testimonial-images-3d/t5.webp",
    },
    {
      quote: "I used to dread ‘listen when you can’. Now I just read it when I can. Huge upgrade.",
      name: "Time Enjoyer",
      image: "/testimonial-images-3d/t6.webp",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight">
          Completely serious testimonials
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
          Real feelings. Slightly exaggerated for legal reasons.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {items.map((t, idx) => (
          <Card
            key={t.name}
            className={
              "border-black/10 bg-white/70 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.12)] " +
              (idx % 2 === 0 ? "md:-rotate-1" : "md:rotate-1")
            }
          >
            {/* order: image → name → description */}
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-square w-full">
                <Image
                  src={t.image}
                  alt={t.quote}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-4 text-sm font-semibold">{t.name}</div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">“{t.quote}”</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function LogosStrip() {
  return (
    <section className="border-y border-black/10 bg-white/30">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8">
        <p className="text-sm text-muted-foreground">
          Built for real life messaging: voice notes, quick dictation, and copy-paste workflows.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">WhatsApp</Badge>
          <Badge variant="secondary">iMessage</Badge>
          <Badge variant="secondary">Notes</Badge>
          <Badge variant="secondary">Mail</Badge>
          <Badge variant="secondary">Slack</Badge>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="flex flex-col gap-3">
        <h2 className="text-balance text-3xl font-semibold tracking-tight">The fastest path from voice → text</h2>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          Designed for one job: capture speech, transcribe locally, and give you clean plain text.
          No clutter.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        <FeatureCard
          icon={<Zap className="size-5" />}
          title="Action Button quick mode"
          description="Press your Action Button to open Veura, record instantly, and auto-copy when you stop."
        />
        <FeatureCard
          icon={<Share2 className="size-5" />}
          title="Share voice notes"
          description="Import a WhatsApp voice message and get plain text you can copy and send."
        />
        <FeatureCard
          icon={<Sparkles className="size-5" />}
          title="Better accuracy when you want it"
          description="Pick Tiny/Base/Small models depending on speed vs accuracy."
        />
        <FeatureCard
          icon={<Lock className="size-5" />}
          title="On-device transcription"
          description="Your audio stays on your phone. Great for privacy and speed."
        />
        <FeatureCard
          icon={<Mic className="size-5" />}
          title="Minimal recording UI"
          description="Clear states: recording → transcribing → result. With waveform + timer."
        />
        <FeatureCard
          icon={<ArrowRight className="size-5" />}
          title="Copy & share anywhere"
          description="Plain text output. Copy to clipboard or share with the system share sheet."
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="border-black/10 bg-white/70 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.12)]">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>
        <div className="text-base font-semibold">{title}</div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="bg-white/30">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight">How it works</h2>
            <p className="mt-3 max-w-prose text-muted-foreground">
              No hacks. No weird integrations. Just a clean flow designed around iOS.
            </p>

            <ol className="mt-8 grid gap-4">
              <Step
                n={1}
                title="Record"
                body="Press Action Button or tap the mic. Speak naturally."
              />
              <Step
                n={2}
                title="Stop"
                body="Tap stop. Veura transcribes locally on your device."
              />
              <Step
                n={3}
                title="Copy"
                body="Your plain text is copied to the clipboard instantly — paste anywhere."
              />
            </ol>
          </div>

          <Card className="p-6">
            <div className="text-sm font-semibold">Example</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Voice note → professional message in seconds.
            </p>

            <div className="mt-6 space-y-3 rounded-2xl border bg-background p-4">
              <div className="text-xs text-muted-foreground">VOICE NOTE</div>
              <p className="text-sm">“Hey, can you send me the final version today?”</p>
              <Separator />
              <div className="text-xs text-muted-foreground">TEXT</div>
              <p className="text-sm">
                Sure — I’ll send the final version today. If you want any changes after
                reviewing, just tell me and I’ll update it.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button className="flex-1">Copy</Button>
              <Button className="flex-1" variant="secondary">
                Share
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-foreground text-background">
        <span className="text-sm font-semibold">{n}</span>
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground">{body}</div>
      </div>
    </li>
  );
}

function Privacy() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Card className="p-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Lock className="size-4" />
            Privacy-first by design
          </div>
          <h2 className="text-balance text-2xl font-semibold tracking-tight">
            Your audio stays on your device.
          </h2>
          <p className="max-w-2xl text-pretty text-muted-foreground">
            Veura runs transcription locally. You decide what to copy, share, or delete.
          </p>
        </div>
      </Card>
    </section>
  );
}

function Platforms() {
  return (
    <section className="bg-white/30">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="p-6">
            <div className="text-base font-semibold">iPhone</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Action Button quick mode + dictation flow.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-base font-semibold">iPad</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Big screen transcript review + copy/share.
            </p>
          </Card>
          <Card className="p-6">
            <div className="text-base font-semibold">Offline</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Transcribe even without a connection.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="download" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Card className="relative overflow-hidden p-10">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50rem_50rem_at_20%_10%,hsl(var(--primary)/0.18),transparent)]" />
        <div className="relative">
          <h2 className="text-balance text-3xl font-semibold tracking-tight">
            Stop re-listening to voice notes.
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
            Get the text. Copy it. Send it. Move on.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#" aria-label="Download Veura">
                Download Veura <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#features">Explore features</a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            App Store link coming soon.
          </p>
        </div>
      </Card>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <span className="font-medium text-foreground">{APP_NAME}</span> — {TAGLINE}
        </div>
        <div className="flex gap-4">
          <a className="hover:text-foreground" href="#features">
            Features
          </a>
          <a className="hover:text-foreground" href="#how">
            How it works
          </a>
          <a className="hover:text-foreground" href="#download">
            Download
          </a>
        </div>
      </div>
    </footer>
  );
}

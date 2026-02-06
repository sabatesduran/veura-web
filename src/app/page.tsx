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
const TAGLINE = "Turn voice notes into clean text — instantly.";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Screenshots />
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
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="grid size-8 place-items-center rounded-xl bg-foreground text-background">
            <span className="text-sm">V</span>
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
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60rem_60rem_at_50%_-10%,hsl(var(--primary)/0.15),transparent)]" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="gap-1">
              <Zap className="size-3.5" />
              Action Button ready
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Mic className="size-3.5" />
              On-device transcription
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Share2 className="size-3.5" />
              WhatsApp voice notes
            </Badge>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {TAGLINE}
          </h1>

          <p className="mt-4 max-w-prose text-pretty text-lg text-muted-foreground">
            {APP_NAME} turns recordings and voice notes into plain text you can copy and send.
            Fast, minimal, and designed for the way people actually message.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href="#download">
                Download on iPhone/iPad <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#how">See the flow</a>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            No accounts. Plain text output. Copy → paste anywhere.
          </p>
        </div>

        <div className="relative">
          <Card className="relative overflow-hidden p-6">
            <div className="absolute inset-0 opacity-[0.35] [background:radial-gradient(40rem_40rem_at_20%_10%,hsl(var(--primary)/0.22),transparent)]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Quick Dictation</div>
                <Badge variant="secondary" className="gap-1">
                  <Sparkles className="size-3.5" />
                  Auto-copy
                </Badge>
              </div>

              <div className="mt-4 rounded-2xl border bg-muted/30 p-4">
                <div className="text-xs text-muted-foreground">TRANSCRIPT</div>
                <div className="mt-2 space-y-2 text-sm">
                  <p>
                    “Hey — quick update: I’ll send the invoice today. Next week we can
                    review the plan and pick the final direction.”
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <MiniAction label="Copy" />
                <MiniAction label="Share" />
                <MiniAction label="Reprocess" />
              </div>

              <Separator className="my-5" />

              <div className="grid gap-3">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <Mic className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Action Button</div>
                    <div className="text-sm text-muted-foreground">Press → record → stop → copied.</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                    <Share2 className="size-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Share from WhatsApp</div>
                    <div className="text-sm text-muted-foreground">Voice note → text → copy.</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="pointer-events-none absolute -right-8 -top-8 size-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 size-56 rounded-full bg-secondary/25 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

function MiniAction({ label }: { label: string }) {
  return (
    <div className="rounded-xl border bg-background/60 px-3 py-2 text-center text-xs font-medium text-muted-foreground">
      {label}
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
    <section className="mx-auto max-w-6xl px-4 pb-4 md:pb-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {shots.map((shot, idx) => (
          <Card key={shot.label} className="overflow-hidden">
            <div className="border-b bg-muted/20 px-3 py-2 text-xs font-medium text-muted-foreground">
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

function LogosStrip() {
  return (
    <section className="border-y bg-muted/20">
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
    <Card className="p-6">
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
    <section id="how" className="bg-muted/20">
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
    <section className="bg-muted/20">
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

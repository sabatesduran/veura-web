import Image from "next/image";

import { Iphone17Pro } from "@/components/eldoraui/iphone-17-pro";

import { ArrowRight, Check, Clock, Globe, Lock, Mic, Share2, Sparkles, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const APP_NAME = "Veura";
const H1 = "Stop replaying voice notes. Get the text.";
const SUBHEAD =
  "Transcribe WhatsApp voice notes and quick dictation on-device. Copy, edit, or share in seconds — no accounts.";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Features />
      <HowItWorks />
      <Privacy />
      <FAQ />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

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

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
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
          <Badge variant="secondary" className="ml-2 hidden sm:inline-flex">
            iOS
          </Badge>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          <Button asChild variant="ghost">
            <a href="#features">Features</a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#how">How it works</a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#faq">FAQ</a>
          </Button>
        </nav>

        {/* sticky CTA */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <AppStoreBadge />
          </div>
          <Button asChild className="sm:hidden">
            <a href="#download">
              Get <ArrowRight className="ml-2 size-4" />
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
      {/* subtle paper dots */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(55,48,163,0.22)_1px,transparent_1px)] [background-size:14px_14px]" />
      {/* soft hero glow */}
      <div className="pointer-events-none absolute inset-x-0 top-[-20%] mx-auto h-[520px] max-w-5xl rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(79,70,229,0.22),transparent_60%)] blur-2xl" />

      {/* doodle arrow (desktop) pointing from badges to WhatsApp import mock */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M320 155 C 420 160, 485 210, 575 222 C 645 232, 710 222, 760 205 C 820 182, 860 150, 900 125"
          stroke="rgba(17,24,39,0.35)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1 14"
        />
        <path
          d="M882 135 L904 124 L894 148"
          stroke="rgba(17,24,39,0.35)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="gap-1 bg-primary text-primary-foreground hover:bg-primary/90">
              <Zap className="size-3.5" />
              Action Button ready
            </Badge>
            <Badge variant="secondary" className="gap-1 bg-secondary text-secondary-foreground">
              <Share2 className="size-3.5" />
              WhatsApp import
            </Badge>
            <Badge variant="secondary" className="gap-1 bg-secondary text-secondary-foreground">
              <Lock className="size-3.5" />
              On-device
            </Badge>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            {H1}
          </h1>

          <p className="mt-4 max-w-prose text-pretty text-lg text-muted-foreground">
            {SUBHEAD}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <AppStoreBadge />
            <Button
              asChild
              variant="secondary"
              className="bg-secondary text-secondary-foreground hover:bg-white"
            >
              <a href="#how">See the 3-step flow</a>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Works on iPhone + iPad. Offline. Multiple languages.
          </p>
        </div>

        <div className="relative">
          {/* primary device */}
          <div className="mx-auto w-full max-w-[440px]">
            <Iphone17Pro
              src="/screens/record.jpg"
              className="h-[560px] w-full text-zinc-950 drop-shadow-[0_35px_90px_rgba(0,0,0,0.25)]"
            />
          </div>

          {/* secondary supporting visual (WhatsApp import) */}
          <div className="pointer-events-none absolute -left-10 top-6 hidden w-[300px] -rotate-6 md:block">
            <div className="mx-auto w-full">
              <Iphone17Pro
                src="/screens/share-extension.jpg"
                className="h-[440px] w-full text-zinc-950 drop-shadow-[0_26px_70px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>

          {/* doodle arrow from the WhatsApp badge to the screenshot */}
          <div className="hidden">
            <svg
              width="520"
              height="220"
              viewBox="0 0 520 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[-40px] top-[10px]"
            >
              <path
                d="M95 55 C 150 60, 175 78, 210 88 C 260 103, 320 90, 360 80 C 405 68, 448 55, 480 35"
                stroke="rgba(17,24,39,0.55)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1 10"
              />
              <path
                d="M468 40 L486 33 L478 50"
                stroke="rgba(17,24,39,0.55)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: <Share2 className="size-5" />,
      title: "WhatsApp voice notes → text",
      body: "Share a voice message into Veura and get text you can copy, edit, or send.",
    },
    {
      icon: <Zap className="size-5" />,
      title: "Action Button quick dictation",
      body: "Press, speak, stop — your text appears instantly.",
    },
    {
      icon: <Lock className="size-5" />,
      title: "On-device & offline",
      body: "Transcription runs locally. Your audio stays on your phone.",
    },
    {
      icon: <Globe className="size-5" />,
      title: "Multiple languages",
      body: "Switch language + model depending on speed vs accuracy.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionTitle
        title="Built for the way people actually message"
        body="Voice notes are convenient for the sender — annoying for everyone else. Veura flips that."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((f) => (
          <Card
            key={f.title}
            className="border-black/10 bg-white/70 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.12)]"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                {f.icon}
              </div>
              <div className="text-base font-semibold">{f.title}</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{f.body}</p>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-black/10 bg-white/50 p-6 shadow-[0_14px_40px_rgba(0,0,0,0.10)] md:flex-row md:items-center">
        <div>
          <div className="text-sm font-semibold">Ready to try it?</div>
          <p className="mt-1 text-sm text-muted-foreground">
            Works on iPhone + iPad. Offline. Copy/paste everywhere.
          </p>
        </div>
        <AppStoreBadge />
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: <Mic className="size-5" />,
      title: "Record or import",
      body: "Press your Action Button or share a WhatsApp voice note into Veura.",
    },
    {
      icon: <Sparkles className="size-5" />,
      title: "Automatic transcription",
      body: "Veura transcribes on-device using your chosen model and language.",
    },
    {
      icon: <ArrowRight className="size-5" />,
      title: "Copy, edit, share",
      body: "Paste into chat, Notes, email — or share from the system sheet.",
    },
  ];

  return (
    <section id="how" className="bg-white/30">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <SectionTitle
          title="How it works"
          body="A frictionless flow designed for iOS. No hacks. No weird integrations."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((s, idx) => (
            <Card
              key={s.title}
              className="border-black/10 bg-white/70 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                  {s.icon}
                </div>
                <div className="text-base font-semibold">{idx + 1}. {s.title}</div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <Card className="border-black/10 bg-white/70 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.12)]">
            <div className="text-sm font-semibold">Before → After</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Turn “listen when you can” into “read when you can”.
            </p>

            <div className="mt-6 space-y-3 rounded-2xl border border-black/10 bg-white p-4">
              <div className="text-xs text-muted-foreground">VOICE NOTE</div>
              <div className="h-10 rounded-lg bg-zinc-100" />
              <Separator />
              <div className="text-xs text-muted-foreground">TEXT</div>
              <p className="text-sm">
                Sure — I’ll take care of it today. If anything changes I’ll message you.
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <Button className="flex-1">Copy</Button>
              <Button className="flex-1" variant="secondary">
                Share
              </Button>
            </div>
          </Card>

          <div className="mx-auto w-full max-w-[420px]">
            <Iphone17Pro
              src="/screens/transcription-blurred.jpg"
              className="h-[520px] w-full text-zinc-950 drop-shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center">
          <AppStoreBadge />
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionTitle
        title="Privacy-first by design"
        body="Veura runs transcription locally. Your audio stays on your device."
      />

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        <TrustCard icon={<Lock className="size-5" />} title="On-device processing">
          No accounts. No uploads required.
        </TrustCard>
        <TrustCard icon={<Clock className="size-5" />} title="Fast">
          Optimized for quick dictation and messaging.
        </TrustCard>
        <TrustCard icon={<Check className="size-5" />} title="Plain text">
          Output is simple, portable, and shareable.
        </TrustCard>
      </div>

      <div className="mt-12 flex items-center justify-center">
        <AppStoreBadge />
      </div>
    </section>
  );
}

function TrustCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="border-black/10 bg-white/70 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.12)]">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>
        <div className="text-base font-semibold">{title}</div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{children}</p>
    </Card>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Does it work offline?",
      a: "Yes. Transcription runs on-device. You can use Veura without a connection.",
    },
    {
      q: "Is my audio uploaded anywhere?",
      a: "No — on-device transcription means your audio stays on your phone unless you share it.",
    },
    {
      q: "What languages are supported?",
      a: "Multiple languages via Whisper models. You can pick the default language in Settings.",
    },
    {
      q: "What’s the pricing?",
      a: "Free core transcription. Pro adds optional online polish (summaries/cleanup) later.",
    },
  ];

  return (
    <section id="faq" className="bg-white/30">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <SectionTitle
          title="FAQ"
          body="Quick answers to the questions that block downloads."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <Card
              key={f.q}
              className="border-black/10 bg-white/70 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.12)]"
            >
              <div className="font-semibold">{f.q}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <AppStoreBadge />
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="download" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Card className="relative overflow-hidden border-black/10 bg-white/70 p-10 shadow-[0_16px_45px_rgba(0,0,0,0.12)]">
        <div className="pointer-events-none absolute inset-0 [background:radial-gradient(50rem_50rem_at_20%_10%,rgba(79,70,229,0.15),transparent)]" />
        <div className="relative">
          <h2 className="text-balance text-3xl font-semibold tracking-tight">
            Turn voice notes into text. Instantly.
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
            Offline, on-device transcription for messaging. Copy → paste anywhere.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <AppStoreBadge />
            <div className="text-sm text-muted-foreground">
              iPhone + iPad • Offline • Privacy-first
            </div>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            App Store link placeholder for now.
          </p>
        </div>
      </Card>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <span className="font-medium text-foreground">{APP_NAME}</span> — Privacy-first, on-device transcription.
        </div>
        <div className="flex gap-4">
          <a className="hover:text-foreground" href="#features">
            Features
          </a>
          <a className="hover:text-foreground" href="#how">
            How it works
          </a>
          <a className="hover:text-foreground" href="#faq">
            FAQ
          </a>
          <a className="hover:text-foreground" href="#download">
            Download
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionTitle({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-balance text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="max-w-2xl text-pretty text-muted-foreground">{body}</p>
    </div>
  );
}

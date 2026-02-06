"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Lock, Mic, Share2, Sparkles, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function AnimatedIconWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="grid size-10 place-items-center"
    >
      {children}
    </motion.div>
  );
}

function WhatsAppFlowIcon() {
  return (
    <AnimatedIconWrap>
      <div className="relative h-6 w-16">
        <motion.div
          className="absolute left-0 top-0 grid size-6 place-items-center rounded-full bg-[#25D366]/15 text-[#128C7E]"
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Share2 className="size-4" />
        </motion.div>

        <motion.div
          className="absolute left-8 top-0 grid size-6 place-items-center rounded-full bg-primary/10"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.1, duration: 0.35, ease: "easeOut" }}
        >
          <motion.div
            className="h-2 w-4 rounded-full bg-primary/40"
            initial={{ scaleX: 0.6, opacity: 0.6 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.2, duration: 0.35, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div
          className="absolute left-[3.7rem] top-0 grid h-6 w-7 place-items-center rounded-md bg-white/70 ring-1 ring-black/10"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.2, duration: 0.35, ease: "easeOut" }}
        >
          <div className="grid gap-1">
            <motion.div
              className="h-0.5 w-5 rounded bg-primary/70"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.32, duration: 0.35, ease: "easeOut" }}
            />
            <motion.div
              className="h-0.5 w-4 rounded bg-primary/50"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.38, duration: 0.35, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </div>
    </AnimatedIconWrap>
  );
}

function ActionButtonFlowIcon() {
  return (
    <AnimatedIconWrap>
      <div className="relative h-6 w-16">
        <motion.div
          className="absolute left-0 top-0 grid size-6 place-items-center rounded-full bg-primary/10 text-primary"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Mic className="size-4" />
        </motion.div>

        <motion.div
          className="absolute left-8 top-[5px] h-4 w-7 rounded-md bg-white/70 ring-1 ring-black/10"
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.12, duration: 0.35, ease: "easeOut" }}
        >
          <motion.div
            className="absolute left-1 top-1 h-0.5 w-5 rounded bg-primary/60"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.25, duration: 0.35, ease: "easeOut" }}
          />
          <motion.div
            className="absolute left-1 top-[9px] h-0.5 w-4 rounded bg-primary/40"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ delay: 0.32, duration: 0.35, ease: "easeOut" }}
          />
        </motion.div>

        <motion.div
          className="absolute left-0 top-0 size-6 rounded-full ring-2 ring-primary/30"
          initial={{ scale: 1, opacity: 0 }}
          whileInView={{ scale: 1.7, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.14, duration: 0.35, ease: "easeOut" }}
        />
      </div>
    </AnimatedIconWrap>
  );
}

function LockingIcon() {
  return (
    <AnimatedIconWrap>
      <motion.div
        className="grid size-6 place-items-center rounded-full bg-primary/10 text-primary"
        initial={{ rotate: -8, opacity: 0, scale: 0.9 }}
        whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <motion.div
          initial={{ y: -2 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.15, duration: 0.25, ease: "easeOut" }}
        >
          <Lock className="size-4" />
        </motion.div>
      </motion.div>
    </AnimatedIconWrap>
  );
}

function LanguageCarouselIcon() {
  const flags = ["🇪🇸", "🇬🇧", "🇫🇷"];
  return (
    <AnimatedIconWrap>
      <div className="relative h-6 w-14 overflow-hidden rounded-full bg-white/70 ring-1 ring-black/10">
        <motion.div
          className="absolute inset-0 flex items-center"
          initial={{ x: 18, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="flex w-full items-center justify-around text-sm">
            {flags.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="absolute left-1 top-1 h-4 w-4 rounded-full bg-primary/15"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: 32, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.18, duration: 0.45, ease: "easeOut" }}
        />
      </div>
    </AnimatedIconWrap>
  );
}

export function FeaturesAnimated({
  appStoreHref = "#",
}: {
  appStoreHref?: string;
}) {
  const items = [
    {
      icon: <WhatsAppFlowIcon />,
      title: "WhatsApp voice notes → text",
      body: "Share a voice message into Veura and get text you can copy, edit, or send.",
    },
    {
      icon: <ActionButtonFlowIcon />,
      title: "Action Button quick dictation",
      body: "Press, speak, stop — your text appears instantly.",
    },
    {
      icon: <LockingIcon />,
      title: "On-device & offline",
      body: "Transcription runs locally. Your audio stays on your phone.",
    },
    {
      icon: <LanguageCarouselIcon />,
      title: "Multiple languages",
      body: "Switch language + model depending on speed vs accuracy.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="flex flex-col gap-3">
        <h2 className="text-balance text-3xl font-semibold tracking-tight">
          Built for the way people actually message
        </h2>
        <p className="max-w-2xl text-pretty text-muted-foreground">
          Voice notes are convenient for the sender — annoying for everyone else. Veura flips that.
        </p>
      </div>

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
        <a
          href={appStoreHref}
          aria-label="Download on the App Store"
          className="inline-flex items-center justify-center rounded-xl shadow-[0_18px_50px_rgba(0,0,0,0.18)] ring-1 ring-black/10 transition-transform hover:-translate-y-0.5"
        >
          <img
            src="/brand/app-store-badge.svg"
            alt="Download on the App Store"
            className="h-12 w-auto"
          />
        </a>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
          iPhone
        </Badge>
        <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
          iPad
        </Badge>
        <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
          Offline
        </Badge>
      </div>

      <div className="mt-8">
        <Button asChild variant="ghost" className="px-0 text-muted-foreground">
          <a href="#how">
            See how it works <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "Privacy Policy — Veura",
  description: "Veura privacy policy.",
};

const UPDATED_AT = "2026-02-07";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="border-black/10 bg-white/70 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.10)]">
      <h2 className="text-balance text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-3 text-sm text-muted-foreground">{children}</div>
    </Card>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <SiteHeader variant="page" />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(55,48,163,0.22)_1px,transparent_1px)] [background-size:14px_14px]" />
        <div className="pointer-events-none absolute inset-x-0 top-[-25%] mx-auto h-[420px] max-w-5xl rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(79,70,229,0.20),transparent_60%)] blur-2xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {UPDATED_AT}</p>
            <p className="mt-6 max-w-prose text-pretty text-muted-foreground">
              This Privacy Policy explains how Veura (“Veura”, “we”, “our”, “us”) handles information when you use our iOS
              app (including the Share Extension) and our website.
            </p>
          </div>

          <div className="mt-10 grid gap-4">
            <Section title="High-level summary">
              <ul className="list-disc pl-5">
                <li>
                  <span className="font-medium text-foreground">On-device transcription.</span> Audio is transcribed locally
                  on your device.
                </li>
                <li>
                  <span className="font-medium text-foreground">No accounts.</span> Veura does not require you to create an
                  account.
                </li>
                <li>
                  <span className="font-medium text-foreground">No selling of data.</span> We do not sell your personal
                  information.
                </li>
                <li>
                  <span className="font-medium text-foreground">You control sharing.</span> If you copy/share text, it goes
                  to the destination you select.
                </li>
              </ul>
            </Section>

            <Section title="Information we process">
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-foreground">Audio you record or import</div>
                  <p>
                    Veura lets you record audio in the app and import audio via the iOS share sheet (for example, voice
                    notes you share to Veura). This audio is processed on your device for transcription.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-foreground">Transcriptions and history</div>
                  <p>
                    Veura can keep a transcription history to help you access previous results. Your history is stored
                    locally on your device. We do not upload your audio or transcriptions to our servers.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-foreground">Downloaded speech-to-text models</div>
                  <p>
                    Veura downloads speech-to-text models to your device when you choose a model to install. Model downloads
                    are fetched from third-party hosting (for example, Hugging Face). This may expose your IP address and
                    standard request metadata to that provider.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-foreground">Share Extension</div>
                  <p>
                    When you share an audio file to Veura using iOS, the shared file is copied into Veura’s secure app
                    container (and/or App Group container) so the app can access it. This transfer is handled by iOS.
                  </p>
                </div>
                <div>
                  <div className="font-medium text-foreground">Data you share using iOS</div>
                  <p>
                    Veura includes actions like Copy/Share. If you share content to another app (e.g., WhatsApp, Notes,
                    Mail), that content is handled by the selected app/provider under their privacy policy.
                  </p>
                </div>
              </div>
            </Section>

            <Section title="What we do not do">
              <ul className="list-disc pl-5">
                <li>
                  <span className="font-medium text-foreground">No cloud AI processing (currently).</span> Veura does not
                  provide cloud-based “Pro” features at this time.
                </li>
                <li>
                  <span className="font-medium text-foreground">No third-party analytics SDKs in the app.</span> We aim to
                  avoid tracking frameworks.
                </li>
                <li>
                  <span className="font-medium text-foreground">No advertising identifiers.</span> We do not use your
                  device’s advertising identifier for tracking.
                </li>
              </ul>
            </Section>

            <Section title="Website data">
              <p>
                Our website is a standard marketing site. Like most websites, our hosting provider may process basic
                server logs (for example, IP address, user agent, and request timestamps) for security and performance.
              </p>
            </Section>

            <Section title="Data retention">
              <p>
                Because transcription runs on-device and we do not upload your content, we do not retain your audio or
                transcriptions on our servers. Content stored in the app’s history remains on your device until you delete
                the app or remove items (where supported).
              </p>
            </Section>

            <Section title="Security">
              <p>
                We implement reasonable technical and organizational measures designed to protect information. No method of
                transmission or storage is 100% secure.
              </p>
            </Section>

            <Section title="Children’s privacy">
              <p>
                Veura is not intended for children under 13, and we do not knowingly collect personal information from
                children.
              </p>
            </Section>

            <Section title="Your choices">
              <ul className="list-disc pl-5">
                <li>Do not share content if you do not want it sent to another app/provider.</li>
                <li>Delete the app to remove local history stored on-device.</li>
              </ul>
            </Section>

            <Section title="Changes to this policy">
              <p>
                We may update this policy from time to time. We will update the “Last updated” date at the top of this
                page.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                If you have questions about privacy, contact us at{" "}
                <a className="text-primary underline underline-offset-4" href="mailto:hello@veura.app">
                  hello@veura.app
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

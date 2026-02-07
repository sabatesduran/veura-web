export const metadata = {
  title: "Privacy Policy — Veura",
  description: "Veura privacy policy.",
};

const UPDATED_AT = "2026-02-07";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="text-balance text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted-foreground">Last updated: {UPDATED_AT}</p>

      <div className="prose prose-zinc mt-10 max-w-none prose-headings:tracking-tight prose-a:text-primary">
        <p>
          Veura (“we”, “our”, “us”) is built to turn voice notes into text while keeping your data private.
          This policy explains what we collect, what we don’t, and how your data is handled.
        </p>

        <h2>Summary</h2>
        <ul>
          <li>
            <strong>On-device transcription:</strong> Your audio is transcribed locally on your iPhone/iPad.
          </li>
          <li>
            <strong>No account required:</strong> You can use Veura without creating an account.
          </li>
          <li>
            <strong>You control sharing:</strong> If you copy/share text, it goes wherever you choose.
          </li>
        </ul>

        <h2>Information We Collect</h2>
        <h3>Content (audio and transcripts)</h3>
        <p>
          Veura transcribes audio on-device using Whisper models. We do <strong>not</strong> receive your recordings
          or transcripts by default.
        </p>
        <p>
          If you use optional Pro features that call an online API (for example: summarization or grammar fixes),
          the text you submit is sent to our server only to fulfill the request and return the result.
          We do not intentionally store this content.
        </p>

        <h3>Device and usage data</h3>
        <p>
          We do not run third-party analytics SDKs on the Veura marketing website. In the app, we aim to collect
          the minimum data necessary to operate the service.
        </p>

        <h2>Purchases and Subscriptions</h2>
        <p>
          Subscriptions are processed by Apple through the App Store. We do not receive your full payment details.
          Apple may provide us with limited information about subscription status (e.g., whether a subscription is active)
          to enable Pro features.
        </p>

        <h2>How We Use Information</h2>
        <ul>
          <li>To provide transcription and app functionality.</li>
          <li>To provide optional Pro features when requested.</li>
          <li>To prevent abuse of Pro features (rate limiting / entitlement checks).</li>
        </ul>

        <h2>Data Storage</h2>
        <p>
          Transcription history stored in the app remains on your device unless you export or share it.
          If you enable optional cloud-backed Pro features, our servers may temporarily process text to generate outputs.
        </p>

        <h2>Third Parties</h2>
        <p>
          When you share content using the iOS share sheet (e.g., to WhatsApp, Notes, Mail), that content is handled
          by the selected app/provider under their policies.
        </p>
        <p>
          If Pro features are enabled, we may use third-party AI providers to process the text you submit, strictly
          to return the requested output.
        </p>

        <h2>Security</h2>
        <p>
          We use reasonable administrative, technical, and organizational measures designed to protect information.
          No method of transmission or storage is 100% secure.
        </p>

        <h2>Children’s Privacy</h2>
        <p>Veura is not intended for children under 13, and we do not knowingly collect personal information from children.</p>

        <h2>Changes</h2>
        <p>
          We may update this policy from time to time. We will update the “Last updated” date above.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Contact us at <a href="mailto:hello@veura.app">hello@veura.app</a>.
        </p>
      </div>
    </main>
  );
}

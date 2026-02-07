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
          This Privacy Policy explains how Veura (“Veura”, “we”, “our”, “us”) handles information when you use our iOS
          app and our website.
        </p>

        <h2>Scope</h2>
        <p>
          This policy applies to:
          <br />
          <strong>•</strong> the Veura iOS app (including the Share Extension), and
          <br />
          <strong>•</strong> the website at <a href="https://veura.app">veura.app</a>.
        </p>

        <h2>High-level summary</h2>
        <ul>
          <li>
            <strong>On-device transcription.</strong> Audio is transcribed locally on your device.
          </li>
          <li>
            <strong>No accounts.</strong> Veura does not require you to create an account.
          </li>
          <li>
            <strong>No selling of data.</strong> We do not sell your personal information.
          </li>
          <li>
            <strong>You choose where content goes.</strong> If you copy/share text, it is sent to the destination you
            select.
          </li>
        </ul>

        <h2>Information we process</h2>

        <h3>Audio you record or import</h3>
        <p>
          Veura lets you record audio in the app and import audio via the iOS share sheet (for example, voice notes you
          share to Veura). This audio is processed on your device for transcription.
        </p>

        <h3>Transcriptions and history</h3>
        <p>
          Veura can keep a transcription history to help you access previous results. Your history is stored locally on
          your device. We do not upload your audio or transcriptions to our servers.
        </p>

        <h3>Downloaded speech-to-text models</h3>
        <p>
          Veura downloads speech-to-text models to your device when you choose a model to install. Model downloads are
          fetched from third-party hosting (for example, Hugging Face). This may expose your IP address and standard
          request metadata to that provider.
        </p>

        <h3>Share Extension and app-to-app data transfer</h3>
        <p>
          When you share an audio file to Veura using iOS, the shared file is copied into Veura’s secure app container
          (and/or App Group container) so the app can access it. This transfer is handled by iOS.
        </p>

        <h3>Data you share using iOS</h3>
        <p>
          Veura includes actions like Copy/Share. If you share content to another app (e.g., WhatsApp, Notes, Mail), that
          content is handled by the selected app/provider under their privacy policy.
        </p>

        <h2>What we do not do</h2>
        <ul>
          <li>
            <strong>No online AI processing (currently).</strong> Veura does not provide cloud-based “Pro” features at
            this time.
          </li>
          <li>
            <strong>No third-party analytics SDKs in the app.</strong> We aim to avoid tracking frameworks.
          </li>
          <li>
            <strong>No advertising identifiers.</strong> We do not use your device’s advertising identifier for tracking.
          </li>
        </ul>

        <h2>Website data</h2>
        <p>
          Our website is a standard marketing site. Like most websites, our hosting provider may process basic server
          logs (for example, IP address, user agent, and request timestamps) for security and performance.
        </p>

        <h2>Legal bases (EEA/UK)</h2>
        <p>
          Where applicable, we process information to:
          <br />
          <strong>•</strong> perform the service you request (e.g., transcribe audio on-device),
          <br />
          <strong>•</strong> comply with legal obligations, and
          <br />
          <strong>•</strong> pursue legitimate interests such as securing and operating our website.
        </p>

        <h2>Data retention</h2>
        <p>
          Because transcription runs on-device and we do not upload your content, we do not retain your audio or
          transcriptions on our servers. Content stored in the app’s history remains on your device until you delete the
          app or remove items (where supported).
        </p>

        <h2>Security</h2>
        <p>
          We implement reasonable technical and organizational measures designed to protect information. No method of
          transmission or storage is 100% secure.
        </p>

        <h2>Children’s privacy</h2>
        <p>Veura is not intended for children under 13, and we do not knowingly collect personal information from children.</p>

        <h2>Your choices</h2>
        <ul>
          <li>Do not share content if you do not want it sent to another app/provider.</li>
          <li>Remove downloaded models by deleting the app (or via future in-app management controls).</li>
          <li>Delete the app to remove local history stored on-device.</li>
        </ul>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time. We will update the “Last updated” date at the top of this page.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about privacy, contact us at <a href="mailto:hello@veura.app">hello@veura.app</a>.
        </p>
      </div>
    </main>
  );
}

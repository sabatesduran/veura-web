import Link from "next/link";

const APP_NAME = "Veura";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <span className="font-medium text-foreground">{APP_NAME}</span> — On-device transcription.
        </div>
        <div className="flex flex-wrap gap-4">
          <Link className="hover:text-foreground" href="/#features">
            Features
          </Link>
          <Link className="hover:text-foreground" href="/#how">
            How it works
          </Link>
          <Link className="hover:text-foreground" href="/#faq">
            FAQ
          </Link>
          <Link className="hover:text-foreground" href="/#download">
            Download
          </Link>
          <Link className="hover:text-foreground" href="/privacy">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}

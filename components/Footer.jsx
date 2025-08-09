import Link from "next/link"
import { Mail, Github, Linkedin, Youtube, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="mt-20">
      {/* CTA banner */}
      <section className="relative mx-auto max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-violet-600/10 via-fuchsia-600/10 to-emerald-600/10 p-6 sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.violet.500/35),transparent_60%)] blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.emerald.400/35),transparent_60%)] blur-2xl"
          />

          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold">Let’s build something great together</h3>
              <p className="text-sm text-muted-foreground">
                Open to full‑time roles, freelance projects, and collaborations.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="mailto:hello@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in touch
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/resume.pdf">Download CV</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* bottom bar */}
      <div className="mt-8 border-t">
        <div className="container mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Ritik Gupta. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link aria-label="Email" href="mailto:hello@example.com" className="hover:text-foreground">
              Email
            </Link>
            <Link aria-label="GitHub" href="https://github.com/" className="hover:text-foreground">
              GitHub
            </Link>
            <Link aria-label="LinkedIn" href="https://www.linkedin.com/" className="hover:text-foreground">
              LinkedIn
            </Link>
            <Link aria-label="YouTube" href="https://youtube.com/" className="hover:text-foreground">
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

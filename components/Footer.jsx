import Link from "next/link"
import { Mail, Github, Linkedin, Youtube, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-4">
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
          </div>
        </div>
      </div>
    </footer>
  )
}

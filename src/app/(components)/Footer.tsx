import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="mailto:kuriaj85@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email James Kuria">
            <Mail className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="James Kuria's LinkedIn Profile">
            <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="James Kuria's GitHub Profile">
            <Github className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} James Kuria. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

import { Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full py-6 px-4 border-t border-border/50 backdrop-blur-xl bg-card/30">
      <div className="container max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Developed with ❤️ by Parth Nath Chauhan
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://x.com/ParthNathc11125"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/parth26nath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
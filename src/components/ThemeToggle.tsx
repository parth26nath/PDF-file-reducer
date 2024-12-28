import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 rounded-full w-10 h-10 animate-bounce-slow"
    >
      {theme === 'dark' ? (
        <Moon className="h-5 w-5 rotate-90 transition-transform duration-500" />
      ) : (
        <Sun className="h-5 w-5 rotate-0 transition-transform duration-500" />
      )}
    </Button>
  );
}
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';

interface ProcessingStatusProps {
  progress: number;
  error?: string;
}

export function ProcessingStatus({ progress, error }: ProcessingStatusProps) {
  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>Processing PDF...</span>
      </div>
      <Progress value={progress} />
      <p className="text-sm text-muted-foreground">{progress}% complete</p>
    </div>
  );
}
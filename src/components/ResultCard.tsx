import { Download, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatFileSize } from '@/lib/utils';

interface ResultCardProps {
  originalSize: number;
  compressedSize: number;
  onDownload: () => void;
}

export function ResultCard({ originalSize, compressedSize, onDownload }: ResultCardProps) {
  const reduction = ((originalSize - compressedSize) / originalSize) * 100;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Original</p>
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>{formatFileSize(originalSize)}</span>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Compressed</p>
            <div className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>{formatFileSize(compressedSize)}</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg bg-primary/10 p-4 mb-6">
          <p className="text-center font-medium">
            Size reduced by {reduction.toFixed(1)}%
          </p>
        </div>

        <Button onClick={onDownload} className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Download Compressed PDF
        </Button>
      </CardContent>
    </Card>
  );
}
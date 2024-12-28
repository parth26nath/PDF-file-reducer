import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

interface CompressionOptionsProps {
  quality: number;
  onQualityChange: (value: number) => void;
}

export function CompressionOptions({ quality, onQualityChange }: CompressionOptionsProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Compression Quality</Label>
        <div className="flex items-center space-x-4">
          <Slider
            value={[quality]}
            onValueChange={(value) => onQualityChange(value[0])}
            min={30}
            max={100}
            step={1}
            className="flex-1"
          />
          <span className="w-12 text-right font-medium">{quality}%</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Lower quality = smaller file size, but potentially reduced image quality
        </p>
      </div>
    </div>
  );
}
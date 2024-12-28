import { useState } from 'react';

export function usePdfCompression() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(80);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<{
    originalSize: number;
    compressedSize: number;
    blob: Blob;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setError(null);
    setResult(null);
  };

  const handleCompress = async () => {
    if (!file) return;

    try {
      setProcessing(true);
      setProgress(0);
      setError(null);

      // Simulate compression progress
      const interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90));
      }, 500);

      // Simulate PDF compression (replace with actual compression logic)
      await new Promise(resolve => setTimeout(resolve, 2000));
      clearInterval(interval);
      setProgress(100);

      // Simulate compression result
      setResult({
        originalSize: file.size,
        compressedSize: Math.floor(file.size * 0.7), // Simulated 30% reduction
        blob: file // In reality, this would be the compressed file
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to compress PDF');
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!result) return;
    
    const url = URL.createObjectURL(result.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'compressed.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return {
    file,
    quality,
    processing,
    progress,
    result,
    error,
    handleFileSelect,
    handleCompress,
    handleDownload,
    setQuality
  };
}
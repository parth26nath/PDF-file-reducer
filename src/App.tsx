import { FileUp, Sparkles, Zap } from 'lucide-react';
import { FileUpload } from '@/components/FileUpload';
import { CompressionOptions } from '@/components/CompressionOptions';
import { ProcessingStatus } from '@/components/ProcessingStatus';
import { ResultCard } from '@/components/ResultCard';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Footer } from '@/components/Footer';
import { usePdfCompression } from '@/hooks/usePdfCompression';

export default function App() {
  const {
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
  } = usePdfCompression();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 transition-colors duration-500">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe')] opacity-[0.03] bg-cover bg-center mix-blend-overlay" />
      
      <div className="relative flex flex-col min-h-screen">
        <ThemeToggle />
        <main className="flex-1">
          <div className="container max-w-3xl mx-auto py-12 px-4">
            <div className="text-center mb-12 animate-fade-in">
              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-foreground blur-2xl opacity-30 group-hover:opacity-100 transition duration-1000" />
                <div className="relative inline-block p-6 rounded-full bg-primary/10 mb-4 group hover:scale-110 transition-transform duration-300">
                  <FileUp className="h-16 w-16 text-primary animate-float" />
                  <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-primary animate-pulse" />
                  <Zap className="absolute -bottom-1 -left-1 h-6 w-6 text-primary animate-glow" />
                </div>
              </div>
              
              <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-foreground to-primary animate-gradient">
                PDF Squeezer
              </h1>
              <p className="text-xl text-muted-foreground">
                Compress PDFs with a sprinkle of magic ✨
              </p>
            </div>

            <div className="space-y-8 animate-slide-up">
              <div className="backdrop-blur-xl bg-card/30 rounded-2xl p-8 shadow-2xl border border-border/50">
                <FileUpload onFileSelect={handleFileSelect} />

                {file && !processing && !result && (
                  <div className="space-y-6 animate-fade-in mt-8">
                    <CompressionOptions
                      quality={quality}
                      onQualityChange={setQuality}
                    />
                    <button
                      onClick={handleCompress}
                      className="w-full bg-primary/90 backdrop-blur-sm text-primary-foreground py-4 px-6 rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-primary/25 font-semibold group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Compress PDF
                        <Zap className="w-5 h-5 group-hover:animate-bounce" />
                      </span>
                    </button>
                  </div>
                )}

                {processing && <ProcessingStatus progress={progress} error={error} />}

                {result && (
                  <div className="animate-slide-up">
                    <ResultCard
                      originalSize={result.originalSize}
                      compressedSize={result.compressedSize}
                      onDownload={handleDownload}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
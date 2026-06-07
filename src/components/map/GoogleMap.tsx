'use client';
import { useEffect, useRef, useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

interface GoogleMapProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  className?: string;
}

export const GoogleMap = ({
  className = 'w-full h-80 rounded-lg',
}: GoogleMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const mapUrl =
    'https://www.google.com/maps/search/?api=1&query=岐阜県岐阜市加野2-25-8+美容室ウイングR';

  // APIキーなしの簡易埋め込みURL（住所ベース）
  const generateSimpleEmbedUrl = () => {
    const address = '岐阜県岐阜市加野2-25-8+美容室ウイングR';
    const encodedAddress = encodeURIComponent(address);

    // Google Maps 簡易埋め込み（APIキー不要）
    return `https://maps.google.com/maps?q=${encodedAddress}&t=m&z=16&output=embed&iwloc=near`;
  };

  useEffect(() => {
    const element = containerRef.current;
    if (!element || shouldLoad) return;

    if (!('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px 0px', threshold: 0.01 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [shouldLoad]);

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  const handleIframeError = () => {
    setHasError(true);
  };

  // エラー時のフォールバック表示
  if (hasError) {
    return (
      <div
        className={`${className} bg-surface2 flex flex-col items-center justify-center text-muted border border-border rounded-lg`}
      >
        <MapPin className="w-12 h-12 mb-4 text-muted" />
        <div className="text-center">
          <h3 className="font-semibold mb-2 text-text">店舗所在地</h3>
          <p className="text-sm mb-4">
            〒501-3107
            <br />
            岐阜県岐阜市加野2-25-8
          </p>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-accent text-white text-sm rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Googleマップで開く
          </a>
        </div>
      </div>
    );
  }

  if (!shouldLoad) {
    return (
      <div ref={containerRef} className="relative">
        <div
          className={`${className} bg-surface2 flex flex-col items-center justify-center text-muted border border-border rounded-lg px-4`}
        >
          <MapPin className="w-12 h-12 mb-4 text-accent" />
          <div className="text-center">
            <h3 className="font-semibold mb-2 text-text">店舗所在地</h3>
            <p className="text-sm mb-4">
              〒501-3107
              <br />
              岐阜県岐阜市加野2-25-8
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => setShouldLoad(true)}
                className="inline-flex items-center justify-center px-4 py-2 bg-accent text-white text-sm rounded-lg hover:bg-primary-700 transition-colors"
              >
                <MapPin className="w-4 h-4 mr-2" />
                地図を表示
              </button>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 border border-border bg-surface text-accent text-sm rounded-lg hover:bg-surface2 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Googleマップで開く
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <iframe
        src={generateSimpleEmbedUrl()}
        className={className}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="美容室ウイング R 地図"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
      />

      {/* ローディング表示 */}
      {!isLoaded && !hasError && (
        <div
          className={`${className} absolute inset-0 bg-surface2 flex items-center justify-center rounded-lg`}
        >
          <div className="text-center text-muted">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent mx-auto mb-2"></div>
            <p className="text-sm">マップを読み込み中...</p>
          </div>
        </div>
      )}
    </div>
  );
};

// 使用例コンポーネント
export const AccessMap = () => {
  return (
    <div className="space-y-4">
      <GoogleMap className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-sm border border-border" />

      {/* 外部リンクボタン */}
      <div className="text-center">
        <a
          href="https://www.google.com/maps/search/?api=1&query=岐阜県岐阜市加野2-25-8+美容室ウイングR"
          target="_blank"
          rel="noopener noreferrer"
        className="inline-flex items-center text-accent hover:text-primary-700 transition-colors font-medium text-sm"
      >
          <MapPin className="w-4 h-4 mr-2" />
          大きな地図で確認
        </a>
      </div>
    </div>
  );
};

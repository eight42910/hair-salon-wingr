'use client';
import { useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

interface GoogleMapProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  className?: string;
}

// 美容室ウイングRの座標（岐阜市加野2-25-8の概算）
const DEFAULT_CENTER = {
  lat: 35.3982,
  lng: 136.7686,
};

const DEFAULT_ZOOM = 16;

export const GoogleMap = ({
  center = DEFAULT_CENTER,
  zoom = DEFAULT_ZOOM,
  className = 'w-full h-80 rounded-lg',
}: GoogleMapProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Google Maps Embed APIのURL生成
  const generateEmbedUrl = () => {
    const baseUrl = 'https://www.google.com/maps/embed/v1/place';
    const params = new URLSearchParams({
      key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
      q: '美容室ウイングR,岐阜県岐阜市加野2-25-8',
      zoom: zoom.toString(),
      maptype: 'roadmap',
      language: 'ja',
      region: 'JP',
    });

    return `${baseUrl}?${params.toString()}`;
  };

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  const handleIframeError = () => {
    setHasError(true);
  };

  // フォールバック表示（APIキーなし or エラー時）
  if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || hasError) {
    return (
      <div
        className={`${className} bg-gray-100 flex flex-col items-center justify-center text-gray-600 border border-gray-200`}
      >
        <MapPin className="w-12 h-12 mb-4 text-gray-400" />
        <div className="text-center">
          <h3 className="font-semibold mb-2">店舗所在地</h3>
          <p className="text-sm mb-4">岐阜県岐阜市加野2-25-8</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Googleマップで開く
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <iframe
        src={generateEmbedUrl()}
        className={className}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="美容室ウイング R 地図"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
      />
      {!isLoaded && (
        <div
          className={`${className} absolute inset-0 bg-gray-100 flex items-center justify-center`}
        >
          <div className="text-center text-gray-600">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
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
      <GoogleMap className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg" />
    </div>
  );
};

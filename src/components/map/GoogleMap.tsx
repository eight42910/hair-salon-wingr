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

export const GoogleMap = ({
  className = 'w-full h-80 rounded-lg',
}: GoogleMapProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // APIキーなしの簡易埋め込みURL（住所ベース）
  const generateSimpleEmbedUrl = () => {
    const address = '岐阜県岐阜市加野2-25-8+美容室ウイングR';
    const encodedAddress = encodeURIComponent(address);

    // Google Maps 簡易埋め込み（APIキー不要）
    return `https://maps.google.com/maps?q=${encodedAddress}&t=m&z=16&output=embed&iwloc=near`;
  };

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
        className={`${className} bg-gray-100 flex flex-col items-center justify-center text-gray-600 border border-gray-200 rounded-lg`}
      >
        <MapPin className="w-12 h-12 mb-4 text-gray-400" />
        <div className="text-center">
          <h3 className="font-semibold mb-2">店舗所在地</h3>
          <p className="text-sm mb-4">
            〒501-3107
            <br />
            岐阜県岐阜市下の2丁目25-8
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=岐阜県岐阜市加野2-25-8+美容室ウイングR"
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
          className={`${className} absolute inset-0 bg-gray-100 flex items-center justify-center rounded-lg`}
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

      {/* 外部リンクボタン */}
      <div className="text-center">
        <a
          href="https://www.google.com/maps/search/?api=1&query=岐阜県岐阜市加野2-25-8+美容室ウイングR"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-700 hover:text-primary-900 transition-colors font-medium text-sm"
        >
          <MapPin className="w-4 h-4 mr-2" />
          大きな地図で確認
        </a>
      </div>
    </div>
  );
};

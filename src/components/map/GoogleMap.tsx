'use client';
import { useEffect, useRef, useState } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

interface GoogleMapProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  apiKey?: string;
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
  apiKey,
  className = 'w-full h-80 rounded-lg',
}: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Google Maps APIキーが設定されていない場合はフォールバック表示
    if (!apiKey) {
      return;
    }

    const loadGoogleMaps = async () => {
      try {
        // Google Maps APIのスクリプトを動的に読み込み
        if (!window.google) {
          const script = document.createElement('script');
          script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
          script.async = true;
          script.defer = true;

          script.onload = () => {
            initializeMap();
          };

          script.onerror = () => {
            setHasError(true);
          };

          document.head.appendChild(script);
        } else {
          initializeMap();
        }
      } catch (error) {
        console.error('Google Maps loading error:', error);
        setHasError(true);
      }
    };

    const initializeMap = () => {
      if (!mapRef.current) return;

      try {
        const map = new window.google.maps.Map(mapRef.current, {
          center,
          zoom,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
          styles: [
            // カスタムマップスタイル（オプション）
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }],
            },
          ],
        });

        // マーカーを追加
        const marker = new window.google.maps.Marker({
          position: center,
          map,
          title: '美容室ウイング R',
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="%23dc2626"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
            scaledSize: new window.google.maps.Size(40, 40),
            anchor: new window.google.maps.Point(20, 40),
          },
        });

        // 情報ウィンドウを追加
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; font-family: 'Noto Sans JP', sans-serif;">
              <h3 style="margin: 0 0 8px 0; color: #8b5e3c; font-weight: bold;">美容室ウイング R</h3>
              <p style="margin: 0 0 4px 0; font-size: 14px;">岐阜県岐阜市加野2-25-8</p>
              <p style="margin: 0 0 4px 0; font-size: 14px;">📞 058-241-3375</p>
              <p style="margin: 0; font-size: 14px;">営業時間: 9:00 - 18:00</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        setIsLoaded(true);
      } catch (error) {
        console.error('Map initialization error:', error);
        setHasError(true);
      }
    };

    loadGoogleMaps();
  }, [apiKey, center, zoom]);

  // フォールバック表示（APIキーなし or エラー時）
  if (!apiKey || hasError) {
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
      <div ref={mapRef} className={className} />
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
  // 実際のAPIキーは環境変数から取得
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className="space-y-4">
      <GoogleMap
        apiKey={apiKey}
        className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
      />

      {/* 追加情報 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="flex items-center text-gray-600">
          <span className="mr-2">🚗</span>
          <span>駐車場5台完備</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="mr-2">🚌</span>
          <span>芋島バス停徒歩3分</span>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="mr-2">📍</span>
          <span>岐阜駅から車で10分</span>
        </div>
      </div>
    </div>
  );
};

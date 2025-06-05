'use client';
import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
  className?: string;
  center?: { lat: number; lng: number };
  zoom?: number;
  markerTitle?: string;
  markerInfo?: string;
}

export const GoogleMap = ({
  className = 'w-full h-64',
  center = { lat: 35.465046540857564, lng: 136.8236593872221 }, // 岐阜市芋島二丁目の正確な座標
  zoom = 15,
  markerTitle = '美容室ウイング R',
  markerInfo = '美容室ウイング R<br/>〒501-3107 岐阜県岐阜市加野2-25-8<br/>TEL: 058-241-3375',
}: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const initMap = async () => {
      try {
        // Google Maps API Key（実際の使用時は環境変数から取得）
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

        if (!apiKey) {
          console.warn('Google Maps API key not found. Using placeholder map.');
          setHasError(true);
          return;
        }

        const loader = new Loader({
          apiKey: apiKey,
          version: 'weekly',
          libraries: ['places'],
        });

        const { Map } = await loader.importLibrary('maps');
        const { AdvancedMarkerElement } = await loader.importLibrary('marker');

        if (!mapRef.current) return;

        // マップを初期化
        const map = new Map(mapRef.current, {
          center: center,
          zoom: zoom,
          mapId: 'WING_R_MAP', // Map ID（実際の使用時は適切なMap IDを設定）
          disableDefaultUI: false,
          gestureHandling: 'cooperative',
        });

        // マーカーを追加
        const marker = new AdvancedMarkerElement({
          map: map,
          position: center,
          title: markerTitle,
        });

        // 情報ウィンドウを追加
        const { InfoWindow } = await loader.importLibrary('maps');
        const infoWindow = new InfoWindow({
          content: `<div style="padding: 8px; max-width: 250px;">${markerInfo}</div>`,
        });

        // マーカークリックで情報ウィンドウを表示
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        setIsLoaded(true);
      } catch (error) {
        console.error('Error loading Google Maps:', error);
        setHasError(true);
      }
    };

    initMap();
  }, [center.lat, center.lng, zoom, markerTitle, markerInfo]);

  if (hasError) {
    return (
      <div
        className={`${className} bg-gray-100 rounded-lg flex flex-col items-center justify-center text-gray-500`}
      >
        <div className="text-center p-6">
          <div className="text-4xl mb-4">🗺️</div>
          <h3 className="font-semibold mb-2">地図を表示できません</h3>
          <p className="text-sm mb-4">
            Google Maps APIキーが設定されていないか、
            <br />
            ネットワークエラーが発生しました。
          </p>
          <div className="bg-white rounded-lg p-4 border">
            <p className="font-semibold text-gray-800 mb-2">店舗住所</p>
            <p className="text-sm text-gray-600">
              〒501-3107
              <br />
              岐阜県岐阜市加野2-25-8
            </p>
            <a
              href="https://maps.app.goo.gl/He3QCmchfVynJpq26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
            >
              Google Mapsで開く
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">地図を読み込み中...</p>
          </div>
        </div>
      )}
      <div
        ref={mapRef}
        className={`w-full h-full rounded-lg ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

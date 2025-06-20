/**
 * スムーズスクロール機能を提供するユーティリティ関数
 */

/**
 * 指定されたセクションIDにスムーズスクロールする
 * @param sectionId - スクロール先のセクションID
 * @param offset - ヘッダーの高さなどを考慮したオフセット値（デフォルト: 80px）
 */
export const scrollToSection = (
  sectionId: string,
  offset: number = 80
): void => {
  // ホームページ以外にいる場合は、まずホームページに遷移
  if (window.location.pathname !== '/') {
    window.location.href = `/#${sectionId}`;
    return;
  }

  const element = document.getElementById(sectionId);
  if (!element) {
    console.warn(`Element with id "${sectionId}" not found`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

/**
 * ページトップにスムーズスクロールする
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 * 指定された要素にスムーズスクロールする
 * @param element - スクロール先の要素
 * @param offset - オフセット値（デフォルト: 80px）
 */
export const scrollToElement = (
  element: HTMLElement,
  offset: number = 80
): void => {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

/**
 * URLハッシュに基づいてスクロールする（ページ読み込み時用）
 * @param offset - オフセット値（デフォルト: 80px）
 */
export const scrollToHash = (offset: number = 80): void => {
  const hash = window.location.hash;
  if (!hash) return;

  const sectionId = hash.substring(1); // '#' を除去

  // 少し遅延を入れてDOM要素が確実に存在するようにする
  setTimeout(() => {
    scrollToSection(sectionId, offset);
  }, 100);
};

/**
 * 現在のスクロール位置を取得
 */
export const getCurrentScrollPosition = (): number => {
  return window.pageYOffset || document.documentElement.scrollTop;
};

/**
 * 指定された要素が画面内に表示されているかチェック
 * @param element - チェック対象の要素
 * @param threshold - 表示判定の閾値（0-1、デフォルト: 0.1）
 */
export const isElementInViewport = (
  element: HTMLElement,
  threshold: number = 0.1
): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView =
    rect.top <= windowHeight * (1 - threshold) &&
    rect.top + rect.height >= windowHeight * threshold;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

  return vertInView && horInView;
};

// アニメーション設定
export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

// カスタムイージング
export const customEase = [0.25, 0.46, 0.45, 0.94];

// Feature セクション用アニメーション設定
export const featureAnimations = {
  // コンテナアニメーション
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  },

  // 各項目のアニメーション
  item: {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: customEase,
      },
    },
  },

  // 画像アニメーション
  image: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: customEase,
      },
    },
  },

  // テキストアニメーション
  text: {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: customEase,
      },
    },
  },

  // 装飾要素アニメーション
  decoration: {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        delay: 0.6,
        ease: [0.68, -0.55, 0.265, 1.55], // バウンス効果
      },
    },
  },

  // 継続アニメーション
  floating: {
    y: [0, -5, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },

  spinning: {
    rotate: [0, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },

  pulsing: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },

  // 背景装飾アニメーション
  backgroundDecor: {
    clockwise: {
      scale: [1, 1.1, 1],
      rotate: [0, 90, 180, 270, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
    counterClockwise: {
      scale: [1, 1.2, 1],
      rotate: [360, 270, 180, 90, 0],
      transition: {
        duration: 25,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },

  // ライン伸長アニメーション
  lineGrow: {
    initial: { height: 0 },
    animate: { height: '100%' },
    transition: { duration: 1, delay: 1 },
  },

  // ホバーアニメーション
  hover: {
    scale: 1.02,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3 },
  },
};

// アニメーション遅延設定
export const featureDelays = {
  title: 0.6,
  subtitle: 0.7,
  mainTitle: 0.8,
  description: 0.9,
  line: 1,
  content: 1.1,
};

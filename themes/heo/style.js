/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      body {
        background-color: #f7f9fe;
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      /* ===== Fix: #banners 标题与图标重叠 ===== */

/* 容器建立定位上下文 */
#banners { position: relative; overflow: hidden; }

/* 1) 标题永远在最上层 */
#banners #banner-title {
  position: absolute;
  z-index: 30 !important;         /* 高于其他一切 */
  max-width: 72ch;                /* 行宽限制，避免撞右侧图标区 */
}

/* 2) 图标墙放到下层，并整体右移出“文字安全区” */
#banners .tags-group-all,
#banners .tags-group-wrapper,
#banners .tags-group-icon-pair,
#banners .tags-group-icon {
  z-index: 5 !important;          /* 在标题下 */
  pointer-events: none;           /* 防止遮挡交互（可选） */
}

/* 图标墙起始位置从左侧让出空间；clamp 兼容响应式 */
#banners .tags-group-wrapper {
  left: clamp(180px, 26vw, 360px) !important; /* 关键：右移 */
  top: 4rem !important;                       /* 等价于 top-16 */
}

/* 3) 左侧渐变安全区，弱化背景图标，保证可读性 */
#banners::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 20;                   /* 在图标之上，在标题之下 */
  pointer-events: none;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0.95) 0%,
    rgba(255,255,255,0.75) 36%,
    rgba(255,255,255,0.00) 68%
  );
}
.dark #banners::before {
  background: linear-gradient(
    90deg,
    rgba(0,0,0,0.78) 0%,
    rgba(0,0,0,0.50) 40%,
    rgba(0,0,0,0.00) 72%
  );
}

/* 4) 保险：标题可选择加轻微底色与毛玻璃（想更干净可注释掉） */
#banners #banner-title .dark\\:text-white,
#banners #banner-title .text-4xl {
  position: relative;
  z-index: 31;
  display: inline;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  background: rgba(255,255,255,0.85);
  border-radius: 8px;
  padding: .12em .38em;
  backdrop-filter: blur(6px);
}
.dark #banners #banner-title .dark\\:text-white,
.dark #banners #banner-title .text-4xl {
  background: rgba(0,0,0,0.55);
}

/* 5) 大屏可再把图标墙略往右推，避免极端背景压线 */
@media (min-width: 1280px) {
  #banners .tags-group-wrapper {
    left: clamp(220px, 28vw, 420px) !important;
  }
}

    `}</style>
  )
}

export { Style }


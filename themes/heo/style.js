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
      /* ===== Fix: Banner 图标与标题重合 ===== */

/* 1) 右移封面图，让左侧给文字留安全区 */
#theme-heo .heo-banner .heo-hero-cover img,
#theme-heo .heo-hero .heo-hero-cover img,
#theme-heo .heo-banner .heo-hero-cover,
#theme-heo .heo-hero .heo-hero-cover {
  object-fit: cover !important;
  object-position: 70% center !important; /* 可在 60%~85% 间微调 */
  background-position: 70% center !important; /* 若是 background-image 也能生效 */
}

/* 2) 左侧渐变遮罩：弱化背景图标，保证标题清晰可读 */
#theme-heo .heo-banner,
#theme-heo .heo-hero {
  position: relative;
  overflow: hidden;
}

#theme-heo .heo-banner::before,
#theme-heo .heo-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0.92) 0%,
    rgba(255,255,255,0.70) 36%,
    rgba(255,255,255,0.00) 68%
  );
}
.dark #theme-heo .heo-banner::before,
.dark #theme-heo .heo-hero::before {
  background: linear-gradient(
    90deg,
    rgba(0,0,0,0.78) 0%,
    rgba(0,0,0,0.50) 40%,
    rgba(0,0,0,0.00) 72%
  );
}

/* 3) 确保标题位于遮罩之上（不被背景覆盖） */
#theme-heo .heo-banner .heo-hero-text,
#theme-heo .heo-hero .heo-hero-text,
#theme-heo .heo-banner .banner-title,
#theme-heo .heo-hero .banner-title {
  position: relative;
  z-index: 2;
}

/* 4) 给标题区域设置安全边距与最大宽度（避免长文案覆盖到图标区） */
#theme-heo .heo-banner .heo-hero-text,
#theme-heo .heo-hero .heo-hero-text {
  padding-left: clamp(16px, 4vw, 64px);
  padding-right: clamp(12px, 3vw, 48px);
  max-width: 720px; /* 或 60–70ch，按视觉调整 */
}

/* 5) 行宽控制：两行标题不会过长；副标题更易读 */
#theme-heo .heo-banner h1,
#theme-heo .heo-hero h1 { max-width: 14ch; }
#theme-heo .heo-banner h2,
#theme-heo .heo-hero h2 { max-width: 26ch; }

/* （可选）如果仍觉得靠得近，可再把封面整体再右移一点： */
/* #theme-heo .heo-banner .heo-hero-cover img { object-position: 80% center !important; } */
    `}</style>
  )
}

export { Style }


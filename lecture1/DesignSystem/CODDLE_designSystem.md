# CODDLE 디자인 시스템

> 레퍼런스 분석 기준: CODDLE 랜딩 페이지 (coddle.io)
> 참고 레퍼런스: LG CNS 공식 사이트
> 작성일: 2026-06-24

---

## 1. Color System

### Primary Colors
```css
--color-primary-50:  #EAF3FF;   /* 배경 틴트 */
--color-primary-100: #C8E1FF;   /* 호버 배경 */
--color-primary-200: #94C8FF;   /* 비활성 강조 */
--color-primary-300: #5AABFF;   /* 보조 강조 */
--color-primary-400: #2B8EFF;   /* 주 버튼 호버 */
--color-primary-500: #1A7AEF;   /* Primary Main (CTA 버튼) */
--color-primary-600: #0F61CC;   /* 주 버튼 Active */
--color-primary-700: #0A49A3;   /* 다크 강조 */
--color-primary-800: #06337A;   /* 네이비 강조 */
--color-primary-900: #031E52;   /* Deep Navy (Footer 배경) */
```

### Gradient
```css
--gradient-hero-bg:    linear-gradient(160deg, #EAF4FF 0%, #D6EAFF 40%, #EAF0FF 100%);
--gradient-section-bg: linear-gradient(180deg, #F5F9FF 0%, #EBF3FF 100%);
--gradient-primary:    linear-gradient(135deg, #4A9EFF 0%, #1A5FCC 100%);
--gradient-accent:     linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%);
--gradient-cta-footer: linear-gradient(135deg, #1A3FA8 0%, #0D1B6E 100%);
--gradient-3d-object:  linear-gradient(135deg, #93C5FD 0%, #818CF8 50%, #C4B5FD 100%);
```

### Neutral Colors
```css
--color-neutral-0:   #FFFFFF;
--color-neutral-50:  #F8FAFC;   /* 섹션 배경 */
--color-neutral-100: #F1F5F9;   /* 카드 배경 */
--color-neutral-200: #E2E8F0;   /* 구분선 */
--color-neutral-300: #CBD5E1;   /* 비활성 아이콘 */
--color-neutral-400: #94A3B8;   /* Placeholder */
--color-neutral-500: #64748B;   /* 서브 텍스트 */
--color-neutral-600: #475569;   /* 보조 텍스트 */
--color-neutral-700: #334155;   /* 본문 텍스트 */
--color-neutral-800: #1E293B;   /* 강조 텍스트 */
--color-neutral-900: #0F172A;   /* 제목 텍스트 */
```

### Semantic Colors
```css
--color-success: #22C55E;
--color-warning: #F59E0B;
--color-error:   #EF4444;
--color-info:    #3B82F6;
```

### Background Colors
```css
--color-bg-default:  #F5F9FF;   /* 전체 페이지 기본 배경 */
--color-bg-section:  #EBF3FF;   /* 섹션 교차 배경 */
--color-bg-card:     #FFFFFF;   /* 카드 기본 배경 */
--color-bg-dark:     #0D1B52;   /* 다크 섹션 (Footer, CTA) */
--color-bg-feature:  #DBEAFE;   /* 피처 하이라이트 배경 */
```

---

## 2. Typography System

### Font Family
```css
--font-family-primary: 'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
--font-family-display: 'Pretendard', sans-serif;   /* 숫자·영문 헤드라인 */
--font-family-mono:    'JetBrains Mono', 'Fira Code', monospace;
```

### Font Size Scale
```css
/* Display — 통계 숫자, 대형 헤드라인 */
--font-size-display-2xl: 5rem;     /* 80px  — 통계 카운터 숫자 */
--font-size-display-xl:  4rem;     /* 64px  — Hero 메인 타이틀 */
--font-size-display-lg:  3rem;     /* 48px  — 섹션 대표 제목 */

/* Heading */
--font-size-h1: 2.5rem;    /* 40px  — 주요 섹션 제목 */
--font-size-h2: 2rem;      /* 32px  — 서브 섹션 제목 */
--font-size-h3: 1.5rem;    /* 24px  — 카드 제목 */
--font-size-h4: 1.25rem;   /* 20px  — 강조 소제목 */
--font-size-h5: 1.125rem;  /* 18px  — 리스트 제목 */
--font-size-h6: 1rem;      /* 16px  — 소형 제목 */

/* Body */
--font-size-body-lg: 1.125rem;  /* 18px — 리드 텍스트 */
--font-size-body-md: 1rem;      /* 16px — 기본 본문 */
--font-size-body-sm: 0.875rem;  /* 14px — 보조 본문 */
--font-size-body-xs: 0.75rem;   /* 12px — 캡션, 라벨 */
```

### Font Weight
```css
--font-weight-regular:   400;
--font-weight-medium:    500;
--font-weight-semibold:  600;
--font-weight-bold:      700;
--font-weight-extrabold: 800;
--font-weight-black:     900;   /* 통계 숫자 */
```

### Line Height
```css
--line-height-tight:   1.2;   /* 대형 디스플레이 텍스트 */
--line-height-snug:    1.35;  /* 제목류 */
--line-height-normal:  1.5;   /* 기본 본문 */
--line-height-relaxed: 1.65;  /* 장문 본문 */
```

### Letter Spacing
```css
--letter-spacing-tight:  -0.03em;  /* 대형 제목 */
--letter-spacing-normal:  0em;
--letter-spacing-wide:    0.04em;  /* 태그, 배지 */
--letter-spacing-wider:   0.08em;  /* 영문 대문자 레이블 */
```

---

## 3. Spacing System (8pt Grid)

```css
--space-1:  0.25rem;   /*  4px */
--space-2:  0.5rem;    /*  8px */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-5:  1.25rem;   /* 20px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
```

### Section Spacing
```css
--section-padding-y-xs: var(--space-16);   /* 64px  — 모바일 */
--section-padding-y-md: var(--space-20);   /* 80px  — 태블릿 */
--section-padding-y-lg: var(--space-32);   /* 128px — 데스크톱 */

--section-gap-inner: var(--space-12);      /* 48px  — 섹션 내부 요소 간격 */
```

### Component Spacing
```css
--comp-padding-sm: var(--space-3) var(--space-6);    /* 12px 24px — 소형 버튼 */
--comp-padding-md: var(--space-4) var(--space-8);    /* 16px 32px — 기본 버튼 */
--comp-padding-lg: var(--space-5) var(--space-10);   /* 20px 40px — 대형 버튼 */
--comp-padding-card: var(--space-8);                 /* 32px       — 카드 내부 */
```

---

## 4. Border & Radius

```css
--radius-sm:   0.375rem;  /*  6px — 태그, 뱃지 */
--radius-md:   0.75rem;   /* 12px — 버튼 */
--radius-lg:   1rem;      /* 16px — 카드 */
--radius-xl:   1.5rem;    /* 24px — 대형 카드, 이미지 컨테이너 */
--radius-2xl:  2rem;      /* 32px — Hero 강조 블록 */
--radius-full: 9999px;    /* 완전한 원형 — 칩, 아바타 */

--border-width-default: 1px;
--border-width-thick:   2px;
--border-color-default: var(--color-neutral-200);
--border-color-focus:   var(--color-primary-500);
```

---

## 5. Shadow System

```css
--shadow-sm:   0 1px 3px rgba(15, 23, 42, 0.08);
--shadow-md:   0 4px 12px rgba(15, 23, 42, 0.10);
--shadow-lg:   0 8px 24px rgba(15, 23, 42, 0.12);
--shadow-xl:   0 16px 48px rgba(15, 23, 42, 0.14);
--shadow-2xl:  0 24px 64px rgba(15, 23, 42, 0.16);

/* Primary 계열 글로우 — CTA 버튼, 강조 카드 */
--shadow-primary-sm: 0 4px 16px rgba(26, 122, 239, 0.25);
--shadow-primary-lg: 0 8px 32px rgba(26, 122, 239, 0.35);

/* Glass 효과 — Hero 플로팅 오브젝트 */
--shadow-glass: 0 8px 32px rgba(31, 38, 135, 0.15);
```

---

## 6. Layout System

### Breakpoints
```css
--bp-xs:  0px;
--bp-sm:  600px;
--bp-md:  900px;
--bp-lg:  1200px;
--bp-xl:  1536px;
```

### Container Width
```css
--container-sm:  600px;
--container-md:  900px;
--container-lg:  1200px;
--container-xl:  1400px;   /* CODDLE 최대 컨텐츠 너비 */
```

### Grid
```css
--grid-columns-mobile:  1;     /* xs: 1열 */
--grid-columns-tablet:  2;     /* md: 2열 */
--grid-columns-desktop: 4;     /* lg: 4열 (통계 섹션) */
--grid-gap-sm:  var(--space-4);   /* 16px */
--grid-gap-md:  var(--space-6);   /* 24px */
--grid-gap-lg:  var(--space-8);   /* 32px */
```

---

## 7. Component Tokens

### Button
```css
/* Primary Button */
--btn-primary-bg:          var(--color-primary-500);
--btn-primary-bg-hover:    var(--color-primary-600);
--btn-primary-bg-active:   var(--color-primary-700);
--btn-primary-text:        #FFFFFF;
--btn-primary-shadow:      var(--shadow-primary-sm);

/* Secondary Button (Outline) */
--btn-secondary-bg:        transparent;
--btn-secondary-border:    var(--color-primary-500);
--btn-secondary-text:      var(--color-primary-500);
--btn-secondary-bg-hover:  var(--color-primary-50);

/* CTA Button (Dark/Navy) — Hero 섹션 */
--btn-cta-bg:              var(--color-primary-900);
--btn-cta-text:            #FFFFFF;
--btn-cta-bg-hover:        var(--color-primary-800);

/* Button Radius */
--btn-radius: var(--radius-full);   /* 완전 라운드 */

/* Button Sizes */
--btn-height-sm: 2.25rem;    /* 36px */
--btn-height-md: 2.75rem;    /* 44px */
--btn-height-lg: 3.25rem;    /* 52px */
```

### Card
```css
--card-bg:            #FFFFFF;
--card-bg-feature:    var(--color-primary-50);   /* 피처 카드 (연파란 배경) */
--card-bg-dark:       var(--color-primary-800);  /* 다크 카드 */
--card-border:        var(--color-neutral-200);
--card-radius:        var(--radius-xl);
--card-padding:       var(--comp-padding-card);
--card-shadow:        var(--shadow-md);
--card-shadow-hover:  var(--shadow-xl);
```

### Navigation
```css
--nav-height:       4.5rem;    /* 72px */
--nav-bg:           rgba(255, 255, 255, 0.85);
--nav-bg-blur:      blur(12px);
--nav-border-b:     1px solid var(--color-neutral-100);
--nav-link-color:   var(--color-neutral-700);
--nav-link-hover:   var(--color-primary-500);
```

### Tag / Badge
```css
--tag-bg:          var(--color-primary-50);
--tag-text:        var(--color-primary-600);
--tag-border:      var(--color-primary-200);
--tag-radius:      var(--radius-full);
--tag-padding:     var(--space-1) var(--space-3);   /* 4px 12px */
--tag-font-size:   var(--font-size-body-xs);
--tag-font-weight: var(--font-weight-semibold);
```

### Statistics Counter
```css
--stat-number-size:    var(--font-size-display-2xl);   /* 80px */
--stat-number-weight:  var(--font-weight-black);       /* 900 */
--stat-number-color:   var(--color-primary-900);
--stat-label-size:     var(--font-size-body-sm);       /* 14px */
--stat-label-color:    var(--color-neutral-500);
```

---

## 8. Effects & Animation

### Glassmorphism (Hero 플로팅 오브젝트)
```css
--glass-bg:         rgba(255, 255, 255, 0.25);
--glass-blur:       blur(16px);
--glass-border:     1px solid rgba(255, 255, 255, 0.4);
--glass-shadow:     var(--shadow-glass);
```

### Transition
```css
--transition-fast:    150ms ease;
--transition-normal:  250ms ease;
--transition-slow:    400ms ease;
--transition-spring:  300ms cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## 9. MUI Theme 변환 예시

```javascript
// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light:   '#5AABFF',
      main:    '#1A7AEF',
      dark:    '#0A49A3',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F9FF',
      paper:   '#FFFFFF',
    },
    text: {
      primary:   '#0F172A',
      secondary: '#64748B',
    },
  },
  typography: {
    fontFamily: "'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
    h1: { fontSize: '2.5rem',  fontWeight: 700, lineHeight: 1.2,  letterSpacing: '-0.03em' },
    h2: { fontSize: '2rem',    fontWeight: 700, lineHeight: 1.35, letterSpacing: '-0.02em' },
    h3: { fontSize: '1.5rem',  fontWeight: 600, lineHeight: 1.35 },
    h4: { fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.4  },
    body1: { fontSize: '1rem',      lineHeight: 1.6 },
    body2: { fontSize: '0.875rem',  lineHeight: 1.6 },
    caption: { fontSize: '0.75rem', lineHeight: 1.5 },
  },
  shape: {
    borderRadius: 12,   /* --radius-lg 기준 */
  },
  spacing: 8,           /* 8pt 그리드 */
  shadows: [
    'none',
    '0 1px 3px rgba(15,23,42,0.08)',     /* 1 — sm */
    '0 4px 12px rgba(15,23,42,0.10)',    /* 2 — md */
    '0 8px 24px rgba(15,23,42,0.12)',    /* 3 — lg */
    '0 16px 48px rgba(15,23,42,0.14)',   /* 4 — xl */
    '0 24px 64px rgba(15,23,42,0.16)',   /* 5 — 2xl */
    /* ... MUI는 25개 shadow 슬롯 필요 — 나머지는 기본값 유지 */
  ],
});

export default theme;
```

---

## 10. LG CNS 참고 포인트

| 항목 | CODDLE | LG CNS | 적용 방향 |
|------|--------|--------|-----------|
| Hero 스타일 | 연파랑 그라디언트 + 3D | 민트~퍼플 그라디언트 + 3D 타이포 | CODDLE의 소프트한 파랑 계열 유지 |
| 네비게이션 | 반투명 글래스 | 투명 + 스크롤 시 배경 | 글래스모피즘 네비 채택 |
| 다크 섹션 | 딥 네이비 CTA Footer | 블랙+퍼플 그라디언트 | 딥 네이비 기반 유지 |
| 카드 UI | 연파랑 피처 카드 | 다크 블루 서비스 카드 | 라이트/다크 카드 혼용 구성 |
| CTA 버튼 | 라운드 풀 + 딥 네이비 | 아웃라인 스타일 | 메인: 필드, 보조: 아웃라인 병행 |
| 통계 섹션 | 4열 대형 숫자 | 없음 | CODDLE 패턴 그대로 적용 |

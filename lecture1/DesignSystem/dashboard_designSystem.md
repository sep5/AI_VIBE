# Health Dashboard 디자인 시스템

> 레퍼런스 분석 기준: Health Dashboard UI (dashboard.jpg)
> 참고 레퍼런스: 의료/헬스케어 관리 대시보드
> 작성일: 2026-06-24

---

## 1. Typography System

### Font Family
```css
--font-family-primary: 'Inter', 'Pretendard', 'Apple SD Gothic Neo', sans-serif;
--font-family-display: 'Inter', sans-serif;   /* 수치·수량 헤드라인 */
--font-family-mono:    'JetBrains Mono', 'Fira Code', monospace;
```

### Font Size Scale
```css
/* Display — 수치 데이터, 대형 지표 */
--font-size-display-xl:  2.5rem;    /* 40px — 대형 지표 숫자 (12354 Kcal) */
--font-size-display-lg:  1.75rem;   /* 28px — 지표 수치 (80 bpm, 60-70 mg/dL) */

/* Heading */
--font-size-h1: 1.5rem;     /* 24px — 섹션 제목 (Indicators, Activity) */
--font-size-h2: 1.25rem;    /* 20px — 카드 제목 (Understanding Human Behavior) */
--font-size-h3: 1.125rem;   /* 18px — 서브 항목 제목 (Antibiotics, Dentist) */
--font-size-h4: 1rem;       /* 16px — 강조 소제목 */

/* Body */
--font-size-body-lg: 1rem;      /* 16px — 기본 본문 */
--font-size-body-md: 0.875rem;  /* 14px — 보조 설명 (1 tablet twice a day) */
--font-size-body-sm: 0.75rem;   /* 12px — 캡션, 날짜, 레이블 */
```

### Font Weight
```css
--font-weight-regular:  400;
--font-weight-medium:   500;
--font-weight-semibold: 600;
--font-weight-bold:     700;
--font-weight-black:    900;   /* 대형 지표 숫자 */
```

### Line Height
```css
--line-height-tight:   1.2;   /* 대형 수치 텍스트 */
--line-height-snug:    1.35;  /* 섹션 제목 */
--line-height-normal:  1.5;   /* 기본 본문 */
--line-height-relaxed: 1.65;  /* 아티클 설명 */
```

### Letter Spacing
```css
--letter-spacing-tight:  -0.02em;  /* 대형 수치 제목 */
--letter-spacing-normal:  0em;
--letter-spacing-wide:    0.04em;  /* 태그, 레이블 */
--letter-spacing-wider:   0.06em;  /* 캘린더 요일 헤더 */
```

---

## 2. Spacing System (8pt Grid)

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
```

### Section Spacing
```css
--section-padding-y-xs: var(--space-4);   /* 16px — 모바일 */
--section-padding-y-md: var(--space-6);   /* 24px — 태블릿 */
--section-padding-y-lg: var(--space-8);   /* 32px — 데스크톱 */

--section-gap-inner: var(--space-6);      /* 24px — 섹션 내부 요소 간격 */
```

### Component Spacing
```css
--comp-padding-sm:      var(--space-2) var(--space-4);   /*  8px 16px — 소형 칩/태그 */
--comp-padding-md:      var(--space-3) var(--space-5);   /* 12px 20px — 기본 버튼 */
--comp-padding-lg:      var(--space-4) var(--space-6);   /* 16px 24px — 대형 버튼 */
--comp-padding-card:    var(--space-6);                  /* 24px       — 카드 내부 */
--comp-padding-sidebar: var(--space-4) var(--space-3);  /* 16px 12px  — 사이드바 아이템 */
```

---

## 3. Border & Radius

```css
--radius-sm:   0.375rem;  /*  6px — 닷 인디케이터, 뱃지 */
--radius-md:   0.625rem;  /* 10px — 지표 아이콘 배경 */
--radius-lg:   0.75rem;   /* 12px — 아이템 카드 (Treatment, Doctor) */
--radius-xl:   1rem;      /* 16px — 기본 카드 (Indicators, Activity) */
--radius-2xl:  1.5rem;    /* 24px — 대시보드 메인 컨테이너 */
--radius-full: 9999px;    /* 완전한 원형 — 칩, 아바타, 로고 */

--border-width-default: 1px;
--border-width-thick:   2px;
```

---

## 4. Layout System

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
--container-xl:  1400px;   /* 대시보드 최대 너비 */
```

### Dashboard 3단 레이아웃
```css
--dashboard-sidebar-width: 80px;    /* 좌측 아이콘 사이드바 */
--dashboard-main-width:    1fr;     /* 메인 콘텐츠 영역 */
--dashboard-aside-width:   280px;   /* 우측 캘린더/의사 패널 */
```

### Grid
```css
--grid-columns-mobile:  1;
--grid-columns-tablet:  2;
--grid-columns-desktop: 3;   /* Indicators 카드 3열 */
--grid-gap-sm:  var(--space-3);   /* 12px */
--grid-gap-md:  var(--space-4);   /* 16px */
--grid-gap-lg:  var(--space-6);   /* 24px */
```

---

## 5. Component Size Tokens

### Button / Chip
```css
--btn-radius:     var(--radius-full);
--btn-height-sm:  2rem;     /* 32px — 필터 칩 */
--btn-height-md:  2.5rem;   /* 40px — 기본 버튼 */
```

### Sidebar Navigation
```css
--nav-sidebar-width:       80px;
--nav-active-indicator-w:  4px;   /* 활성 인디케이터 바 두께 */
```

### Top Navigation Bar
```css
--topbar-height:    72px;
--topbar-search-r:  var(--radius-full);
```

### Indicator Card (지표 카드)
```css
--indicator-icon-size:     40px;
--indicator-value-size:    var(--font-size-display-lg);
--indicator-value-weight:  var(--font-weight-bold);
--indicator-label-size:    var(--font-size-body-sm);
```

### Treatment List Item
```css
--treatment-item-r:   var(--radius-lg);
--treatment-icon-size: 40px;
```

### Doctor Avatar
```css
--avatar-size-sm:   32px;   /* 의사 목록 섹션 원형 아바타 */
--avatar-size-md:   40px;   /* 기본 아바타 */
--avatar-size-lg:   48px;   /* 상단 프로필 아바타 */
--avatar-radius:    var(--radius-full);
```

### Calendar
```css
--calendar-header-size:   var(--font-size-h1);
--calendar-header-weight: var(--font-weight-bold);
--calendar-day-size:      var(--font-size-body-md);
--calendar-day-cell-w:    36px;
--calendar-day-cell-h:    36px;
--calendar-day-today-r:   var(--radius-full);
--calendar-dot-size:      6px;
--calendar-dot-r:         var(--radius-full);
```

### Tag / Badge
```css
--tag-radius:      var(--radius-full);
--tag-padding:     var(--space-1) var(--space-3);   /* 4px 12px */
--tag-font-size:   var(--font-size-body-sm);
--tag-font-weight: var(--font-weight-semibold);

--badge-size:      8px;
--badge-radius:    var(--radius-full);
```

---

## 6. MUI Theme 변환 예시

```javascript
// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', 'Pretendard', 'Apple SD Gothic Neo', sans-serif",
    h1: { fontSize: '1.5rem',   fontWeight: 700, lineHeight: 1.2,  letterSpacing: '-0.02em' },
    h2: { fontSize: '1.25rem',  fontWeight: 700, lineHeight: 1.35 },
    h3: { fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.35 },
    h4: { fontSize: '1rem',     fontWeight: 600, lineHeight: 1.4  },
    body1: { fontSize: '0.875rem', lineHeight: 1.6 },
    body2: { fontSize: '0.75rem',  lineHeight: 1.5 },
    caption: { fontSize: '0.75rem', lineHeight: 1.5 },
  },
  shape: {
    borderRadius: 12,   /* --radius-lg 기준 */
  },
  spacing: 8,           /* 8pt 그리드 */
});

export default theme;
```

---

## 7. 레퍼런스 분석 요약

| 항목 | Dashboard | 적용 포인트 |
|------|-----------|------------|
| 레이아웃 | 좌측 80px 아이콘 사이드바 + 메인 + 우측 280px 패널 3단 | 대시보드 레이아웃 구성 참고 |
| 카드 Radius | `16px` (xl) 기본, `24px` (2xl) 메인 컨테이너 | 부드럽고 현대적인 카드 느낌 |
| 그리드 | 3열 (Indicators), 2열 (Articles) | 데이터 밀도 높은 레이아웃 |
| 타이포 | Inter — Display 2.5rem ~ Caption 0.75rem | 수치 데이터 가독성 최적화 |
| 아바타 | 32px / 40px / 48px 3단계 | 컨텍스트에 따른 사이즈 분리 |
| 캘린더 셀 | 36×36px 고정 크기 + full radius | 날짜 선택 터치 영역 확보 |
| 간격 기준 | 8pt 그리드, 카드 내부 24px | 일관된 리듬감 있는 레이아웃 |

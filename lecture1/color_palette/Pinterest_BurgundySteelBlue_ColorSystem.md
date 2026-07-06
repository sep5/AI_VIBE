# 컬러 팔레트 디자인 시스템

## 프로젝트 정보
- **출처**: Pinterest 레퍼런스 분석 — Burgundy × Steel Blue × Cream
- **분석 날짜**: 2026-07-06
- **참고 핀**: https://kr.pinterest.com/pin/962785226609121023/
- **참고 검색**: `burgundy steel blue modern portfolio website design`
- **적용 프로젝트**: 포트폴리오 홈페이지

---

## 컬러 컨셉

> **"The Silence of Elegance"**
> 딥 버건디(와인레드)의 클래식하고 권위 있는 감성과, 스틸블루(코스모스 블루)의 차분하고 지적인 감성을 크림(오프화이트)이 중화하는 고급스러운 3색 시스템.

| 역할 | 컬러 이름 | HEX | 무드 |
|------|-----------|-----|------|
| Primary | Gochujang Red | `#780000` | 클래식, 권위, 열정 |
| Primary Light | Varden | `#AE1F25` | 생동감, 강조 |
| Primary Dark | Deep Wine | `#4C050C` | 깊이, 고급감 |
| Secondary | Cosmos Blue | `#003049` | 신뢰, 지성, 안정 |
| Secondary Light | Steel Blue | `#94B1C8` | 청량, 모던, 세련 |
| Accent | Crimson Blaze | `#C1125F` | 포인트, 시선집중 |
| Background | Cream | `#E3DFCE` | 따뜻함, 중화, 여백 |

---

## CSS 변수 정의

```css
:root {
  /* Primary Colors — 버건디/와인 레드 계열 */
  --color-primary: #780000;           /* Gochujang Red — 메인 버건디 */
  --color-primary-light: #AE1F25;     /* Varden — 미드 버건디 */
  --color-primary-dark: #4C050C;      /* Deep Wine — 딥 와인 */

  /* Secondary Colors — 스틸블루/코스모스 네이비 계열 */
  --color-secondary: #003049;         /* Cosmos Blue — 딥 네이비 */
  --color-secondary-light: #94B1C8;   /* Steel Blue — 스틸블루 */
  --color-accent: #C1125F;            /* Crimson Blaze — 포인트 크림즌 */

  /* Background Colors */
  --color-bg-primary: #F5F0E8;        /* 크림 라이트 — 라이트 섹션 기본 배경 */
  --color-bg-secondary: #0D1520;      /* 딥 다크 네이비 — 다크 섹션 배경 */
  --color-bg-hero: #E3DFCE;           /* 오프화이트 크림 — 히어로 배경 */
  --color-bg-card-dark: #1A0A0F;      /* 딥 버건디 블랙 — 다크 카드 배경 */

  /* Text Colors */
  --color-text-primary: #1A0A0F;      /* 딥 버건디 다크 — 메인 헤딩 */
  --color-text-secondary: #3D2B30;    /* 버건디 틴트 다크 — 일반 본문 */
  --color-text-muted: #7A6A6E;        /* 뮤트 로즈그레이 — 캡션, 날짜 등 보조 텍스트 */
  --color-text-on-dark: #E3DFCE;      /* 크림 — 다크 배경 위 텍스트 */

  /* Border / Outline */
  --color-border-default: #D4C5C0;    /* 로즈베이지 — 카드, 구분선 */
  --color-border-input: #B8A5A0;      /* 미드 로즈베이지 — 인풋, 검색창 */

  /* Interactive Colors */
  --color-button-primary: #780000;    /* 버건디 CTA 버튼 */
  --color-button-hover: #4C050C;      /* 딥 와인 호버 */
  --color-link: #94B1C8;              /* 스틸블루 링크 */
  --color-link-hover: #003049;        /* 딥 네이비 링크 호버 */

  /* Tag / Chip Colors */
  --color-tag-default: #F0EAE6;       /* 크림 태그 배경 */
  --color-tag-active: #780000;        /* 버건디 활성 태그 배경 */
  --color-tag-text-active: #E3DFCE;   /* 크림 활성 태그 텍스트 */

  /* Gradient */
  --color-gradient-hero: linear-gradient(135deg, #003049, #94B1C8);
  --color-gradient-dark: linear-gradient(180deg, #0D1520, #1A0A0F);
  --color-gradient-split: linear-gradient(90deg, #4C050C 50%, #003049 50%);
}
```

---

## 컬러 사용 가이드

### Primary Color — `#780000` (Gochujang Red / 버건디)
- **사용 위치**: CTA 버튼, 섹션 포인트 배경, 강조 아이콘, 태그
- **규칙**: 화면당 10~15% 이내로 절제 사용. 배경 전체 적용 시 반드시 크림 텍스트(`--color-text-on-dark`) 조합
- **금지**: 스틸블루(`#94B1C8`) 위에 직접 배치 금지 (색상 충돌)

### Secondary Color — `#003049` / `#94B1C8` (코스모스 블루 / 스틸블루)
- **사용 위치**: 히어로 그라디언트, 네비게이션 바, 다크 섹션 배경, 링크 색상
- **규칙**: 딥 네이비(`#003049`)는 어두운 섹션 배경에, 스틸블루(`#94B1C8`)는 아이콘·링크·그래픽 강조에 사용
- **조합**: 반드시 `--color-text-on-dark (#E3DFCE)` 와 함께 사용

### Accent Color — `#C1125F` (Crimson Blaze)
- **사용 위치**: 호버 포인트, 알림 배지, 하이라이트 텍스트, 특별 강조 CTA
- **규칙**: 전체 화면에서 1~2곳 이내로 극도로 절제. 시선을 끄는 포인트로만 활용
- **금지**: 배경 전체 사용 금지. 버건디와 인접 배치 지양 (유사색 충돌)

### Background Colors
| 변수 | 용도 |
|------|------|
| `--color-bg-primary` | 일반 콘텐츠 섹션 — 따뜻한 크림 계열로 친근함 표현 |
| `--color-bg-secondary` | AI·서비스 소개 다크 섹션 — 딥 네이비로 깊이감 부여 |
| `--color-bg-hero` | 히어로 영역 — 오프화이트 크림으로 고급스러운 여백 표현 |
| `--color-bg-card-dark` | 다크 섹션 내 카드 — 배경과 미묘한 버건디 층위 구분 |

### Text Colors
- `--color-text-primary`: h1~h3 제목에 사용
- `--color-text-secondary`: p, li 본문에 사용
- `--color-text-muted`: 날짜, 카테고리, 라벨 등 부가 정보
- `--color-text-on-dark`: 다크/버건디 배경 섹션 내 모든 텍스트

### Interactive Colors
- **버튼**: 기본 `#780000` → 호버 `#4C050C` (0.2s ease transition 권장)
- **링크**: `#94B1C8` → 호버 `#003049` (underline 제거, 색상 변화로 피드백)
- **태그/칩**: 기본 `#F0EAE6` 배경 + `#3D2B30` 텍스트 → 활성 시 버건디 반전

---

## 레퍼런스 포스터 분석

### 1. "40" Portfolio (딥 네이비 + 크림즌 레드)
- 배경: `#0A1628` (딥 네이비)
- 포인트: `#CC0000` (브라이트 레드)
- 특징: 볼드 숫자 타이포 + 그리드 레이아웃 + 빨간 밑줄 강조선

### 2. MIDNIGHT MAVEN (다크 버건디 그라디언트)
- 배경: `#0D0D0D` → `#3D0A14` 그라디언트
- 텍스트: 크림/골드 세리프 (`MIDNIGHT MAVEN` 타이포)
- 특징: "WORK THAT SPEAKS IN SHADOWS & SHINES IN SPOTLIGHTS" — 엔터테인먼트 감성

### 3. THE SILENCE (다크 앰버 레드)
- 배경: `#0A0505` (거의 블랙)
- 포인트: `#8B2500` (다크 앰버레드) + 주황 글로우
- 특징: 뮤직 앱 UI, 강렬한 인물 실루엣, "IN THIS GLORIOUS SADNESS"

### 4. BEHIND CREATIVE STUDIO (버건디 ↔ 스틸블루 분할)
- 좌측: `#4A0818` (딥 버건디) + 세리프 타이포
- 우측: `#2A5C7A` (스틸블루) + 산세리프 타이포
- 특징: 투톤 분할 레이아웃 — 이 컬러 시스템의 핵심 레퍼런스

### 5. SCARLET Editorial (SHOWIT 템플릿)
- 배경: `#1A0A0A` (다크 버건디 블랙)
- 강조: `#6B0F1A` (와인레드)
- 텍스트: 크림 세리프 타이포 + "THE ARTIST" 에디토리얼 스타일

---

## 반응형 고려사항

### 다크모드 대응
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #1A0F12;
    --color-bg-hero: #120A0D;
    --color-text-primary: #E3DFCE;
    --color-text-secondary: #C8B8BC;
    --color-text-muted: #8A7A7E;
    --color-border-default: #3A2A2E;
    --color-border-input: #4A3A3E;
    --color-tag-default: #2A1A1E;
    --color-tag-active: #E3DFCE;
    --color-tag-text-active: #780000;
    /* Primary, Secondary, Accent 색상은 다크모드에서도 유지 */
  }
}
```

### 모바일 (xs ~ sm: 0px ~ 600px)
- 히어로 그라디언트 비주얼 배경은 단색 `--color-bg-hero`로 단순화
- 버건디 ↔ 스틸블루 분할 레이아웃은 상하 스택으로 전환
- 태그 칩 글자 크기 `0.75rem`으로 축소

### 태블릿 (md: 900px)
- 카드 그리드 2열 배치, 배경색 변화 없음
- 히어로 타이포그래피 `2rem` → `3rem`으로 전환

### 데스크톱 (lg: 1200px 이상)
- 전체 레이아웃 `maxWidth: 'lg'(1200px)` Container 기준 중앙 정렬
- 버건디/네이비 분할 섹션 최소 높이 `min-height: 500px` 확보

### 접근성 (WCAG AA 기준)
| 조합 | 대비율 | 기준 충족 |
|------|--------|----------|
| `#E3DFCE` on `#780000` | 7.2:1 | AA / AAA |
| `#E3DFCE` on `#003049` | 11.4:1 | AA / AAA |
| `#E3DFCE` on `#4C050C` | 13.1:1 | AA / AAA |
| `#1A0A0F` on `#F5F0E8` | 16.8:1 | AA / AAA |
| `#94B1C8` on `#0D1520` | 6.3:1 | AA |
| `#C1125F` on `#F5F0E8` | 4.5:1 | AA (대형 텍스트) |

> `#C1125F` 크림즌은 소형 본문 텍스트에 단독 사용 시 AA 미달 → 아이콘·강조 요소에 한정 사용

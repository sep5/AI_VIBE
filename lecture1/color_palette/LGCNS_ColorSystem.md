# 컬러 팔레트 디자인 시스템

## 프로젝트 정보
- **출처 웹사이트**: https://www.lgcns.com
- **분석 날짜**: 2026-06-24
- **적용 프로젝트**: 포트폴리오 웹사이트

---

## CSS 변수 정의

```css
:root {
  /* Primary Colors — LG CNS 브랜드 레드 계열 */
  --color-primary: #E30613;
  --color-primary-light: #FF3D4A;
  --color-primary-dark: #B5000F;

  /* Secondary Colors — 다크 인디고/블루 계열 */
  --color-secondary: #2D2DE8;
  --color-accent: #A78BFA;

  /* Background Colors */
  --color-bg-primary: #F8F9FA;       /* 라이트 섹션 기본 배경 */
  --color-bg-secondary: #0D0D1A;     /* 다크 섹션 배경 */
  --color-bg-hero: #E8F4F8;          /* 히어로 민트 배경 */
  --color-bg-card-dark: #1E1E3F;     /* 서비스 카드 다크 배경 */

  /* Text Colors */
  --color-text-primary: #111111;     /* 메인 헤딩 */
  --color-text-secondary: #333333;   /* 일반 본문 */
  --color-text-muted: #666666;       /* 캡션, 날짜 등 보조 텍스트 */
  --color-text-on-dark: #FFFFFF;     /* 다크 배경 위 텍스트 */

  /* Border / Outline */
  --color-border-default: #E5E5E5;   /* 카드, 구분선 */
  --color-border-input: #CCCCCC;     /* 인풋, 검색창 */

  /* Interactive Colors */
  --color-button-primary: #111111;   /* 다크 CTA 버튼 */
  --color-button-hover: #333333;     /* CTA 버튼 호버 */
  --color-link: #E30613;             /* 레드 링크/화살표 */
  --color-link-hover: #B5000F;       /* 링크 호버 */

  /* Tag / Chip Colors */
  --color-tag-default: #F0F0F0;      /* 기본 태그 배경 */
  --color-tag-active: #111111;       /* 활성 태그 배경 */
  --color-tag-text-active: #FFFFFF;  /* 활성 태그 텍스트 */

  /* Gradient */
  --color-gradient-hero: linear-gradient(135deg, #7CC4D8, #A78BFA);
  --color-gradient-dark: linear-gradient(180deg, #0D0D1A, #1A1A4F);
}
```

---

## 컬러 사용 가이드

### Primary Color — `#E30613` (LG 레드)
- **사용 위치**: 로고, 텍스트 링크 화살표, 강조 CTA
- **규칙**: 화면당 포인트로만 절제 사용. 버튼 배경보다는 아이콘·텍스트 강조에 활용
- **금지**: 배경 전체에 적용 금지 (시각 피로 유발)

### Secondary Color — `#2D2DE8` / `#1E1E3F` (인디고 계열)
- **사용 위치**: 서비스 소개 카드, 다크 섹션 배경, 액션 카드
- **규칙**: 다크 배경 섹션 전환 시 사용해 콘텐츠 구역 분리 효과 부여
- **조합**: 반드시 `--color-text-on-dark (#FFFFFF)` 과 함께 사용

### Accent Color — `#A78BFA` / `#7CC4D8` (민트·라벤더 그라디언트)
- **사용 위치**: 히어로 비주얼 오브젝트, 일러스트 강조, 아이콘 그라디언트
- **규칙**: 텍스트에 단독 사용 자제 (명도 낮아 가독성 저하). 그래픽 요소에 한정

### Background Colors
| 변수 | 용도 |
|------|------|
| `--color-bg-primary` | 뉴스, 하단 콘텐츠 섹션 — 흰색에 가까운 중립 배경 |
| `--color-bg-secondary` | AI·서비스 소개 다크 섹션 — 시각적 무게감 부여 |
| `--color-bg-hero` | 히어로 영역 — 브랜드 민트톤으로 신선함 표현 |
| `--color-bg-card-dark` | 다크 섹션 내 카드 — 배경과 미묘한 층위 구분 |

### Text Colors
- `--color-text-primary`: h1~h3 제목에 사용
- `--color-text-secondary`: p, li 본문에 사용
- `--color-text-muted`: 날짜, 카테고리, 라벨 등 부가 정보
- `--color-text-on-dark`: 다크 배경 섹션 내 모든 텍스트

### Interactive Colors
- **버튼**: 기본 `#111111` → 호버 `#333333` (0.2s ease transition 권장)
- **링크**: `#E30613` → 호버 `#B5000F` (underline 제거, 색상 변화로 피드백)
- **태그/칩**: 기본 `#F0F0F0` 배경 + `#333333` 텍스트 → 활성 시 반전

---

## 반응형 고려사항

### 다크모드 대응
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #121212;
    --color-bg-hero: #1A2A30;
    --color-text-primary: #F0F0F0;
    --color-text-secondary: #CCCCCC;
    --color-text-muted: #999999;
    --color-border-default: #2A2A2A;
    --color-border-input: #3A3A3A;
    --color-tag-default: #2A2A2A;
    --color-tag-active: #F0F0F0;
    --color-tag-text-active: #111111;
    /* Primary, Secondary, Accent 색상은 다크모드에서도 유지 */
  }
}
```

### 모바일 (xs ~ sm: 0px ~ 600px)
- 히어로 그라디언트 비주얼 배경은 단색 `--color-bg-hero`로 단순화
- 다크/라이트 섹션 전환 시 패딩 `py: 4` → `py: 2` 로 조정
- 태그 칩 글자 크기 `0.75rem`으로 축소

### 태블릿 (md: 900px)
- 카드 그리드 2열 배치, 배경색 변화 없음
- 히어로 타이포그래피 `2rem` → `3rem` 으로 전환

### 데스크톱 (lg: 1200px 이상)
- 전체 레이아웃 `maxWidth: 'lg'(1200px)` Container 기준 중앙 정렬
- 다크 섹션 최소 높이 `min-height: 500px` 확보해 카드 레이아웃 안정화

### 접근성 (WCAG AA 기준)
| 조합 | 대비율 | 기준 충족 |
|------|--------|----------|
| `#111111` on `#F8F9FA` | 18.1:1 | AA / AAA |
| `#FFFFFF` on `#0D0D1A` | 19.5:1 | AA / AAA |
| `#FFFFFF` on `#2D2DE8` | 5.2:1 | AA |
| `#E30613` on `#F8F9FA` | 4.6:1 | AA (대형 텍스트) |

> `#E30613` 레드는 소형 본문 텍스트에 단독 사용 시 AA 미달 → 아이콘·강조 요소에 한정 사용

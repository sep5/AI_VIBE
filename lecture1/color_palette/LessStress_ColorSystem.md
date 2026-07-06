# 컬러 팔레트 디자인 시스템

## 프로젝트 정보
- **출처**: poster1.jpg — "LESS STRESS. More creativity." 포스터 디자인
- **분석 날짜**: 2026-07-01
- **적용 프로젝트**: 포트폴리오 웹사이트

---

## CSS 변수 정의

```css
:root {
  /* Primary Colors — 딥 크림슨 레드 계열 */
  --color-primary: #B8122A;
  --color-primary-light: #D4304A;
  --color-primary-dark: #8C0A1E;

  /* Secondary Colors — 내추럴 그린 & 베이지 */
  --color-secondary: #4A7A30;
  --color-accent: #C9BA8A;

  /* Background Colors */
  --color-bg-primary: #FAE8EC;      /* 블러시 핑크 — 전체 페이지 배경 */
  --color-bg-secondary: #3D6B28;    /* 다크 그린 — 자연 강조 섹션 배경 */
  --color-bg-card-green: #7FB048;   /* 라이트 그린 — 포인트 카드 배경 */
  --color-bg-card-beige: #E8DFC8;   /* 소프트 베이지 — 중립 카드 배경 */

  /* Text Colors */
  --color-text-primary: #B8122A;    /* 메인 헤딩 — 크림슨 레드 타이포 */
  --color-text-secondary: #FFFFFF;  /* 다크 배경 위 텍스트 */
  --color-text-muted: #8C7A6E;      /* 캡션, 보조 설명 — 블러시 위 브라운 */

  /* Border / Outline */
  --color-border-red: #B8122A;      /* 레드 강조 테두리 */
  --color-border-green: #5A8A35;    /* 그린 계열 구분선 */
  --color-border-default: #E8D8DC;  /* 기본 구분선 — 핑크 배경 톤 맞춤 */

  /* Interactive Colors */
  --color-button-primary: #B8122A;
  --color-button-hover: #8C0A1E;
  --color-link: #B8122A;
  --color-link-hover: #4A7A30;
}
```

---

## 컬러 사용 가이드

### Primary Color — `#B8122A` (딥 크림슨 레드)
- **사용 위치**: 메인 헤드라인 타이포그래피, CTA 버튼, 링크, 포인트 강조 요소
- **규칙**: 배경의 블러시 핑크(`#FAE8EC`)와 대비를 이루는 핵심 컬러 — 헤딩과 버튼에 집중 사용
- **금지**: 본문 소형 텍스트 단독 사용 금지 (WCAG AA 미달 위험)

### Secondary Color — `#4A7A30` (포레스트 그린)
- **사용 위치**: 자연·힐링 테마 섹션 배경, 이미지 오버레이, 아이콘
- **규칙**: 레드(`#B8122A`)와 보색 관계 — 함께 사용 시 생동감 있는 대비 형성
- **조합**: 그린 배경 위에는 반드시 `--color-text-secondary(#FFFFFF)` 사용

### Accent Color — `#C9BA8A` (웜 베이지/탄)
- **사용 위치**: 카드 배경, 중립 구역 배경, 아이콘 컨테이너
- **규칙**: 레드·그린의 강한 대비를 완충하는 중립 역할 — 과도한 채도를 낮춰줌
- **느낌**: 자연스럽고 따뜻한 아날로그 감성 형성

### Background Colors
| 변수 | 용도 |
|------|------|
| `--color-bg-primary` | 전체 페이지 기본 배경 — 블러시 핑크 여백 |
| `--color-bg-secondary` | 자연/힐링 강조 섹션 — 다크 그린 몰입감 |
| `--color-bg-card-green` | 생동감 있는 포인트 카드 배경 |
| `--color-bg-card-beige` | 중립·정보 중심 카드 배경 |

### Text Colors
- `--color-text-primary` (`#B8122A`): h1~h2 대형 헤딩 전용 — 레드 타이포그래피 강조
- `--color-text-secondary` (`#FFFFFF`): 다크 그린 배경 위 텍스트
- `--color-text-muted` (`#8C7A6E`): 부제목, 날짜, 캡션 — 블러시 배경과 자연스럽게 조화

### Border & Outline
- **레드 테두리** (`#B8122A`): 강조 섹션 구분, CTA 영역 아웃라인
- **그린 테두리** (`#5A8A35`): 자연 테마 카드 외곽선
- **기본 구분선** (`#E8D8DC`): 카드 사이 여백 구분, 핑크 배경 톤에 맞춘 HR 요소

### Interactive Colors
- **버튼 기본**: `#B8122A` 배경 + `#FFFFFF` 텍스트
- **버튼 호버**: `#8C0A1E` 다크 레드 전환 (0.2s ease transition 권장)
- **링크**: `#B8122A` → 호버 시 `#4A7A30` (레드→그린 보색 전환으로 생동감 부여)

---

## 반응형 고려사항

### 다크모드 대응
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #2A1A1E;      /* 블러시 핑크 → 다크 와인으로 전환 */
    --color-bg-secondary: #1A2E14;    /* 다크 그린 더 깊게 */
    --color-bg-card-green: #2E4A1E;   /* 채도 낮춘 다크 그린 */
    --color-bg-card-beige: #3A2E22;   /* 채도 낮춘 다크 베이지 */
    --color-text-primary: #F5C0C8;    /* 크림슨 → 소프트 로즈로 전환 */
    --color-text-muted: #A89890;
    --color-border-default: #3A2428;
    /* Primary(크림슨), Secondary(그린), Accent(베이지)는 채도 조정하여 유지 */
  }
}
```

### 모바일 (xs ~ sm: 0px ~ 600px)
- 대형 레드 헤드라인 `fontSize: { xs: '2.5rem', md: '4rem' }` 축소 적용
- 자연 이미지 배경은 모바일에서 `object-position: center top` 으로 핵심 피사체 유지
- 코너 텍스트 레이블(YOU ARE DOING WELL 등)은 모바일에서 `display: none` 처리
- 버튼 `width: 100%`, `padding: 14px` 터치 친화적 크기 확보

### 태블릿 (md: 900px)
- 헤드라인 `fontSize: { xs: '2.5rem', md: '3.5rem' }` 단계적 확대
- 이미지와 텍스트 2열 레이아웃 (`Grid size={{ xs: 12, md: 6 }}`)
- 코너 텍스트 레이블 복원, `position: absolute` 배치

### 데스크톱 (lg: 1200px 이상)
- 풀스크린 포스터 레이아웃 완전 적용
- `Container maxWidth="lg"` 기준 중앙 정렬
- 헤드라인 `fontSize: '5rem'` 이상, `letterSpacing: '-0.03em'` 적용
- 카드 hover 시 `transform: translateY(-4px)` + 그린 글로우 shadow 권장

### 접근성 (WCAG AA 기준)
| 조합 | 대비율 | 기준 |
|------|--------|------|
| `#B8122A` on `#FAE8EC` | 6.1:1 | AA 충족 (대형 텍스트 AAA) |
| `#FFFFFF` on `#4A7A30` | 5.8:1 | AA 충족 |
| `#FFFFFF` on `#B8122A` | 5.2:1 | AA 충족 |
| `#8C7A6E` on `#FAE8EC` | 3.8:1 | AA 충족 (대형 텍스트 한정) |
| `#B8122A` on `#C9BA8A` | 3.5:1 | AA 미달 — 아이콘 전용 사용 |

> `#B8122A` 레드 on 베이지 배경 조합은 소형 텍스트 사용 금지 — 장식·아이콘 요소에만 허용

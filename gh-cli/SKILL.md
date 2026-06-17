---
name: gh-cli
description: Execute GitHub CLI (gh) commands to manage repositories, pull requests, issues, releases, workflows, and more. Use this skill whenever the user wants to interact with GitHub — list/create/merge PRs, open issues, clone repos, check CI status, trigger workflows, manage releases, or run any `gh` command. Trigger on phrases like "PR 목록 보여줘", "이슈 만들어줘", "gh로 ...", "GitHub에서 ...", "저장소 클론", "워크플로우 실행", "릴리즈 생성", "gh auth", or any request involving GitHub operations.
---

# gh CLI Skill

이 스킬은 GitHub CLI(`gh`)를 사용해 GitHub의 다양한 작업을 수행합니다.

## 시작 전 체크리스트

1. `gh auth status`로 인증 상태 확인
2. 인증 안 됐다면 사용자에게 `gh auth login` 안내 (대화형이라 직접 실행 불가)
3. 저장소 컨텍스트가 필요한 명령은 현재 디렉토리 또는 `--repo owner/name` 플래그 사용

## 명령 실행 원칙

- **실행 전 설명**: 어떤 명령을 왜 실행하는지 한 줄로 설명
- **파괴적 작업 확인**: 삭제, 병합, force-push 등은 실행 전 사용자 확인
- **에러 처리**: 실패 시 에러 메시지를 해석해서 원인과 해결책 제시
- **출력 해석**: raw 출력 그대로 붙여넣지 말고, 요점을 정리해서 전달

## 주요 명령 레퍼런스

### 인증
```bash
gh auth status              # 로그인 상태 확인
gh auth login               # 로그인 (대화형 — 사용자가 직접 실행)
gh auth token               # 현재 토큰 출력
```

### Pull Request
```bash
gh pr list                          # 열린 PR 목록
gh pr list --state all              # 전체 상태 PR 목록
gh pr view <number>                 # PR 상세 보기
gh pr create --title "..." --body "..."  # PR 생성
gh pr checkout <number>             # PR 브랜치 체크아웃
gh pr merge <number> --squash       # PR 병합 (squash)
gh pr merge <number> --merge        # PR 병합 (merge commit)
gh pr review <number> --approve     # PR 승인
gh pr review <number> --request-changes --body "..."  # 변경 요청
gh pr close <number>                # PR 닫기
gh pr diff <number>                 # PR diff 보기
gh pr checks <number>               # CI 체크 상태
```

### Issue
```bash
gh issue list                       # 열린 이슈 목록
gh issue list --state closed        # 닫힌 이슈 목록
gh issue list --label "bug"         # 라벨로 필터
gh issue view <number>              # 이슈 상세 보기
gh issue create --title "..." --body "..."  # 이슈 생성
gh issue create --title "..." --label "bug" --assignee "@me"
gh issue close <number>             # 이슈 닫기
gh issue comment <number> --body "..."  # 댓글 추가
```

### Repository
```bash
gh repo view                        # 현재 저장소 정보
gh repo view owner/repo             # 특정 저장소 정보
gh repo clone owner/repo            # 저장소 클론
gh repo create <name> --public      # 공개 저장소 생성
gh repo create <name> --private     # 비공개 저장소 생성
gh repo fork owner/repo             # 저장소 포크
gh repo list                        # 내 저장소 목록
gh repo list --org <org>            # 조직 저장소 목록
gh repo delete owner/repo           # 저장소 삭제 (확인 필요!)
```

### Releases
```bash
gh release list                     # 릴리즈 목록
gh release view <tag>               # 릴리즈 상세
gh release create <tag> --title "..." --notes "..."  # 릴리즈 생성
gh release create <tag> --generate-notes            # 자동 릴리즈 노트
gh release upload <tag> <file>      # 릴리즈 에셋 업로드
gh release delete <tag>             # 릴리즈 삭제 (확인 필요!)
```

### Workflows & Actions
```bash
gh workflow list                    # 워크플로우 목록
gh workflow run <name>              # 워크플로우 수동 실행
gh workflow run <name> --ref <branch>
gh run list                         # 최근 실행 목록
gh run view <run-id>                # 실행 상세
gh run watch <run-id>               # 실행 실시간 모니터링
gh run download <run-id>            # 아티팩트 다운로드
```

### API (고급)
```bash
gh api repos/{owner}/{repo}/issues  # REST API 직접 호출
gh api graphql -f query='...'       # GraphQL 쿼리
gh api --paginate ...               # 페이지네이션 자동 처리
```

### 기타 유용한 명령
```bash
gh search repos <keyword>           # 저장소 검색
gh search issues <keyword>          # 이슈 검색
gh gist list                        # Gist 목록
gh gist create <file>               # Gist 생성
gh secret list                      # 시크릿 목록 (이름만)
gh secret set <name>                # 시크릿 설정
```

## 공통 플래그

| 플래그 | 설명 |
|--------|------|
| `--repo owner/name` | 특정 저장소 지정 |
| `--json <fields>` | JSON 형식 출력 |
| `--jq <expr>` | jq로 출력 필터링 |
| `--web` | 브라우저로 열기 |
| `--limit N` | 결과 수 제한 |

## 안전 가이드라인

다음 작업은 실행 전 반드시 사용자에게 확인:
- `gh repo delete` — 저장소 삭제
- `gh release delete` — 릴리즈 삭제
- `gh pr merge` — PR 병합 (돌이킬 수 없음)
- `gh secret set` — 시크릿 값 변경

## 예시 시나리오

**현재 저장소의 PR 목록 확인 및 병합:**
```bash
gh pr list
gh pr view 42
gh pr checks 42
gh pr merge 42 --squash --delete-branch
```

**버그 이슈 생성:**
```bash
gh issue create \
  --title "로그인 버튼이 모바일에서 동작 안 함" \
  --body "## 현상\n...\n## 재현 방법\n..." \
  --label "bug" \
  --assignee "@me"
```

**새 릴리즈 생성:**
```bash
gh release create v1.2.0 \
  --title "v1.2.0 - 성능 개선" \
  --generate-notes \
  --latest
```

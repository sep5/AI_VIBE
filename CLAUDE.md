# AI_VIBE 프로젝트

## 리포지터리
- GitHub: https://github.com/sep5/AI_VIBE
- 브랜치: main

## 작업 완료 후 업로드 규칙

**모든 작업이 끝날 때마다** `/gh-cli` 스킬을 활용해 변경 사항을 GitHub 리포지터리에 업로드한다.

### 업로드 절차

1. 변경된 파일을 스테이징한다.
2. 작업 내용을 요약한 커밋 메시지로 커밋한다.
3. `main` 브랜치에 푸시한다.

### 커밋 메시지 규칙

- 한국어로 작성한다.
- 형식: `[작업유형] 간단한 설명`
- 작업유형 예시: `[추가]`, `[수정]`, `[삭제]`, `[리팩토링]`, `[문서]`

### 업로드 명령 예시

```bash
git add <변경된 파일들>
git commit -m "[추가] 새 기능 구현"
git push origin main
```

> git 저장소가 초기화되지 않은 경우:
> ```bash
> git init
> git remote add origin https://github.com/sep5/AI_VIBE.git
> git branch -M main
> git push -u origin main
> ```

## 프로젝트 설명

AI 관련 학습 및 실습 자료를 관리하는 프로젝트입니다.

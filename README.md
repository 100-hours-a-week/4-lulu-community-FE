# Lulu Community — Front-end

## Front-end 소개

- 회원가입/로그인부터 게시글·댓글·좋아요까지 갖춘 `커뮤니티 서비스`의 프론트엔드 프로젝트입니다.
- 별도 프레임워크 없이 `Vanilla JavaScript(ESM)`와 `Node.js(Express)`로 정적 페이지를 서빙하도록 직접 구현했습니다.
- 회원가입/로그인, 게시글/댓글 CRUD, 좋아요, 무한 스크롤, 프로필/게시글 이미지 업로드, 회원정보 수정/탈퇴까지 백엔드 연동을 직접 구현했습니다.
- JWT Access Token은 `localStorage`, Refresh Token은 서버가 내려주는 `HttpOnly` 쿠키로 관리하며, Access Token 만료(401) 시 자동으로 재발급받아 요청을 재시도하는 로직을 구현했습니다.

### 사용 기술 및 tools

- Vanilla JavaScript (ES Modules)
- Node.js, Express (정적 파일 서빙)
- Fetch API 기반 REST 통신, FormData 기반 파일 업로드
- Docker, Kubernetes (Helm Chart 배포), ArgoCD (GitOps)
- AWS CloudFront (CDN), AWS S3 (정적 이미지 서빙)

### Back-end

- <a href="https://github.com/nominsol/Community">Back-end Github</a>


## 화면 및 기능

| 화면 | 파일 | 기능 |
|:---|:---|:---|
| 로그인 | login.html / login.js | 이메일/비밀번호 로그인, 인증 성공 시 메인으로 리다이렉트 |
| 회원가입 | signup.html / signup.js | 이메일/닉네임 중복 확인, 비밀번호 유효성 검사, 프로필 이미지 업로드 |
| 메인(게시글 목록) | index.html / index.js | 게시글 목록 무한 스크롤 조회, 제목/내용 검색, 정렬(최신순/인기순) |
| 게시글 상세 | board.html / board.js | 게시글 조회, 좋아요/좋아요 취소, 댓글 목록/작성/수정/삭제, 작성자 본인 확인 시 수정·삭제 버튼 노출 |
| 게시글 작성/수정 | board-write.html / board-write.js | 제목/내용/이미지 첨부, 작성·수정 모드 겸용 |
| 회원정보 수정 | modifyInfo.html / modifyInfo.js | 닉네임 변경, 프로필 이미지 변경/삭제, 회원 탈퇴 |
| 비밀번호 변경 | modifyPassword.html / modifyPassword.js | 현재 비밀번호 확인 후 변경 |

### 인증 처리 흐름

1. 로그인 성공 시 Access Token은 `localStorage`, Refresh Token은 서버가 내려주는 `HttpOnly` 쿠키로 저장됩니다.
2. 모든 API 요청은 `getAuthHeader()`로 `Authorization: Bearer <accessToken>` 헤더를 자동으로 붙입니다.
3. `request.js`의 공통 fetch 래퍼가 401 응답을 받으면 `/token/refresh`를 호출해 Access Token을 재발급받고, 원래 요청을 한 번 더 재시도합니다.
4. 비로그인 상태로 인증이 필요한 페이지에 접근하면 로그인 페이지로 리다이렉트됩니다.

## 배포/인프라

- 프론트엔드도 백엔드와 동일하게 Docker 이미지로 빌드되어 Amazon ECR에 저장되고, Helm Chart로 Kubernetes에 배포됩니다.
- GitHub Actions → ECR 푸시 → GitOps 저장소 이미지 태그 갱신 → ArgoCD 자동 동기화로 이어지는 GitOps 파이프라인을 백엔드와 함께 공유합니다.

### 서비스 시연 영상

- (제출 시 README에 링크 업데이트 예정)

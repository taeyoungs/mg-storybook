# MG Storybook for FrontEnd Developer and Designer

## Setup

- CRA
- Storybook
- Yarn (3.0.2)
- TypeScript (4.4.3)

## Storybook

```shell
yarn storybook
```

## Page

[Link](https://61b83657fbcf11003a57fbc8-owepzunuth.chromatic.com/?path=/story/description-typography--page) (using Chromatic)

## Git Commit Convention

### Type

| #   | Type    | Description                                            |
| --- | ------- | ------------------------------------------------------ |
| 1   | init    | 프로젝트 초기화                                        |
| 2   | add     | 기능 추가                                              |
| 3   | fix     | 버그 수정                                              |
| 4   | mod     | 기능 수정                                              |
| 5   | docs    | 문서 관련 추가 및 수정                                 |
| 6   | test    | 테스트 추가, 테스트 리팩토링 (프로덕션 코드 변경 제외) |
| #   | -       | -                                                      |
| 7   | mv      | 리소스 이동                                            |
| 8   | rm      | 리소스 제거                                            |
| #   | -       | -                                                      |
| 9   | rename  | 리소스 재명명                                          |
| 10  | design  | CSS 등 사용자 UI 디자인 변경                           |
| 11  | style   | 코드 포맷 변경, 코드 스타일 가이드 적용                |
| 12  | refact  | 프로덕션 코드 리팩토링                                 |
| 13  | comment | 필요한 주석 추가 및 수정                               |
| #   | -       | -                                                      |
| 14  | merge   | 코드 병합                                              |
| 15  | chore   | 기타 (빌드 Task, 의존성, 설정파일 등)                  |
| 16  | revert  | 코드 되돌리기                                          |

### Message

```shell
========= Example ==========
add: 회원 삭제 기능 구현
> 빈칸
message
> 빈칸
footer (선택사항 - 모든 Commit에 존재할 필요는 없음)
Resolves : #123
See Also : #456, #789
============================

========= Issue Closed Keywords =========
close, closes, closed : 일반 개발 이슈

fix, fixes, fixed : 버그 픽스나 핫 픽스 이슈

resolve, resolves, resolved : 문의나 요청 사항에 대응한 이슈
=========================================
```

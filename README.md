- mobx
- template string
- vite
- emotion
- tailwindCSS

타입스크립트 템플릿 리터럴로 템플릿 엔진을 대체하고 클라이언트에서 mobx를 사용해 DOM selecting을 최소화 하고 리액트처럼 써보려고 시도,
번들링은 vite. 스타일링은 tailwind도 시도. 스트링 리터럴을 사용해서 spa환경이 아님에도 emotion 사용이 가능했다.
이런 용도로는 vue를 cdn으로 가져다 쓰거나 alpine.js가 존재하지만 더 발전시켜서 사이드 프로젝트로 라이브러리를 만들어보면 재미있을 것 같다.
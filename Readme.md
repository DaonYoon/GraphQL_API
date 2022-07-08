2022-07-07
.

GraphQL

// 보통 QET은 Query안에
// POST는 Mutation 안에

- 아폴로 서버를 실행하기 위해서는 반드시 최소 1개의 Query가 필요합니다.
- type Query는 가장 기본적인 타입입니다.
- Query에 넣는 필드들은 request할 수 있는 것들이 됩니다.
- !를 쓰지 않으면 해당 필드는 nullable field가 됩니다. (null값을 가질 수 있는 필드)
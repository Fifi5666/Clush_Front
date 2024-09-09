# Clush_Test

1️⃣ 앱 설명

    - 할 일 추가: +++ 버튼을 이용하여 할 일을 추가할 수 있습니다.
    앤트 디자인 팝업 모달로 입력창이 활성화됩니다.

    - 할 일 수정: 각 항목을 클릭하여 모달 창을 띄우고, 수정할 수 있습니다.

    - 할 일 삭제: --- 버튼을 클릭하여 할 일을 삭제할 수 있습니다.

    - 전체 삭제: 하단의 버튼을 클릭하여 모든 할 일을 삭제합니다.

    - 전체 완료: 하단의 버튼을 클릭하여 모든 할 일을 체크(완료)하거나 해제합니다.


2️⃣ 앱 실행 방법

    1. 해당 프로젝트 코드를 GitHub에서 clone 합니다.

    2. todo-app 폴더를 통합 터미널에서 열고 의존성을 설치합니다.

        npm install

    3. 앱을 실행합니다.

        npm start


3️⃣ 컴포넌트

    - TodoInput: 새로운 할 일을 입력받는 컴포넌트. 할 일을 추가할 수 있는 직관적인 UI 제공.
    addTodo 함수를 호출하여 입력한 데이터를 처리합니다.

    - TodoItem: 각 할 일 항목을 렌더링. 항목을 수정하거나 삭제하고,
    체크박스로 완료 상태를 표시합니다.

    - TodoList: 할 일 목록 렌더링. TodoItem 컴포넌트를 리스트 형태로 렌더링.

    - TodoFooter: 하단에서 전체 삭제 및 전체 완료 버튼으로 편의성을 높임.

    - TodoContainer: 모든 컴포넌트를 포함하여 관리하는 주요 컴포넌트.
    한곳에서 흐름을 파악하고 관리하기 용이합니다.


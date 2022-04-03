// import '../styles/index';
import { autorun, makeAutoObservable } from 'mobx';
// import { textStyle } from '../styles/index';

/**
 * 규칙을 정하면 되겠네. 스테이트에는 명목상의 render가 붙고 복잡한 UI같은 경우에는 따로 구조가 필요하겠지
 * 템플릿은 따로 만든다던가 하는 식으로. 그게 컴포넌트가 되려나. 적어도 구조는 갖추겠다 어설퍼도
 *
 * reactive-template
 * vanilla-flux
 * streaming, server-component, liveView
 * redux, mobx, zustand
 */

// createState, render 같이 사용범위를 좁혀서 간편하게 제공하게 만들면 좀 낫지 않을까 그리고 액션 붙이는 방식

export class Todo {
	todos = [];

	constructor() {
		makeAutoObservable(this);
	}

	add(newTodo) {
		this.todos.push(newTodo);
	}

	render($el, func) {
		autorun(() => {
			$el.innerHTML = func({ todos: this.todos });
		});
	}
}

export class Store {
	todo = new Todo();

	useState(func) {
		autorun(() => {
			func({ todos: this.todo.todos });
		});
	}
}

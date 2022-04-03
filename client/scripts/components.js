import { makeAutoObservable } from 'mobx';

class LocalState {
	active = false;

	constructor() {
		makeAutoObservable(this);
	}

	toggle() {
		this.active = !this.active;
	}
}

const state = new LocalState();

const $toggle = document.getElementById('toggle');

$toggle.addEventListener('click', (e) => {
	state.toggle();
});

export const TodoItem = (todo) => `
	<div class="flex">
		<div
			class="flex justify-center items-center ${state.active ? 'text-blue-700' : 'text-black'}"
		>
			<div class="mr-1">${todo.title}</div>
		</div>
	</div>
`;

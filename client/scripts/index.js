import { TodoItem } from './components';
import { Store } from './store';

const $todo = document.getElementById('todo');
const $submit = document.getElementById('submit');
const $input = document.getElementById('input');

const store = new Store();

$submit.addEventListener('click', (e) => {
	e.preventDefault();
	store.todo.add({ title: $input.value });
	$input.value = '';
});

store.useState(({ todos }) => {
	$todo.innerHTML = `${todos.map((todo) => TodoItem(todo)).join('')}`;
});

import { useState } from "react"

function ToDoList() {
	const [todos, setTodos] = useState([])
	const [todo, setTodo] = useState("")

	function handlePush() {
		if (todo !== "") {
			setTodos(todos.concat([todo]))
			setTodo("")
		}
	}
	return (
		<div>
			<h1>ToDoリスト</h1>
			<input value={todo} onChange={(e) => setTodo(e.target.value)} />
			<button onClick={handlePush}>登録</button>
			<h2>タスク一覧</h2>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</div>
	)
}

export default ToDoList

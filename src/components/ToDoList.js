import { useState } from "react"
import "./ToDoList.css"

function ToDoList() {
	const [completedTodos, setCompletedTodos] = useState([])
	const [todos, setTodos] = useState([])
	const [todo, setTodo] = useState("")

	function handlePush() {
		if (todo !== "") {
			setTodos(todos.concat([todo]))
			setTodo("")
		}
	}
	function handleComplete(index) {
		setCompletedTodos(completedTodos.concat(todos[index]))
		setTodos(todos.slice(0, index).concat(todos.slice(index + 1)))
	}
	return (
		<div className="todoList">
			<h1 className="title">ToDoリスト</h1>
			<input value={todo} onChange={(e) => setTodo(e.target.value)} />
			<button onClick={handlePush} className="button">
				登録
			</button>
			<h2>タスク一覧</h2>
			<h3>完</h3>
			<ul className="ul">
				{completedTodos.map((todo, index) => (
					<li key={index} className="li">
						{todo}
					</li>
				))}
			</ul>
			<h3>未完</h3>
			<ul className="ul">
				{todos.map((todo, index) => (
					<li key={index} className="li">
						{todo}
						<button onClick={() => handleComplete(index)} className="button">
							完了する
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ToDoList

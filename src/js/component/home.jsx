import React, { useEffect, useState } from "react";

//Component Home
const Home = () => {
	const [list, setList] = useState([
		{ label: "Go to sleep", done: false },
		{ label: "Make the dinner", done: true },
	]);
	const [newtask, setNewTask] = useState({ label: "", done: false });

	// Estado para obtener la lista luego del primer renderizado
	useEffect(() => {
		setList;
	}, []);

	return (
		<div>
			<h1 className="Title">todos</h1>
			<div className="lista">
				<div className="listatop">
					<input
						type={"text"}
						id="InputTask"
						className="InputTask"
						placeholder="What needs to be done?"
						value={newtask.label}
						onChange={(e) => {
							setNewTask({
								label: e.target.value,
								done: false,
							});
						}}
						onKeyDown={async (e) => {
							if (e.key === "Enter") {
								const NewList = [...list, newtask];
								setList(NewList);
								setNewTask({
									label: "",
									done: false,
								});
							}
						}}></input>
				</div>
				<ul className="list-group">
					{list.map((task, index) => {
						return (
							<li
								className="list-group-item list-element"
								key={index}>
								{task.label}
								<span
									className="close"
									onClick={(e) => {
										setList(
											list.filter((task1, i) => {
												if (index == i) {
													return false;
												} else {
													return true;
												}
											})
										);
									}}>
									x
								</span>
							</li>
						);
					})}
				</ul>

				<div className="counter">
					{list.length == 0
						? "No tasks, add a task"
						: list.length + " item(s) left"}
				</div>
			</div>
			<div className="bottom-page-1"></div>
			<div className="bottom-page-2"></div>
		</div>
	);
};

export default Home;

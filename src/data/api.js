import {fromJS} from "immutable";
import axios from "./axios";
import {addTask, taskCompleted, todoCompleted, removeTask} from "./actions";

export const postTask = () => (dispatch, getState) => {
	let task = getState().get("value");

	axios.post("/tasks", {
		task, 
		completed: false, 
	}).then(response => {
		dispatch(addTask(fromJS(response.data)))
		// dispatch(addTask());
	});
};

export const patchCompleted = (id) => (dispatch, getState) => {
	let apiID = getState().getIn(["tasks", id, "id"]);
	let isComplete = getState().getIn(["tasks", id, "completed"]);
	isComplete ? 
	axios.patch("/tasks/" + apiID + "/todo").then(response => {
		dispatch(todoCompleted(id));
	})
	:
	axios.patch("/tasks/" + apiID + "/complete").then(response => {
		dispatch(taskCompleted(id));
	});

};

export const deleteTask = (id) => (dispatch, getState) => {
	let apiID = getState().getIn(["tasks", id, "id"]);
	axios.delete("/tasks/" + apiID).then(response => {
		dispatch(removeTask(id));
	});
};
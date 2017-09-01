import initial from "./initial";
import { UPDATE_VALUE, UPDATE_FILTER, UPDATE_TEXT, ADD_TASK, TASK_COMPLETED, TODO_COMPLETED, REMOVE_TASK } from "./actions";
import { Map } from "immutable";


const changeValue = (state, { value }) => state.set("value", value);
const changeFilter = (state, { value }) => state.set("filter", value);
const changeText = (state, { value, id }) => state.setIn(["tasks", id, "text"], value);
const addTask = (state, { task }) => state.update("tasks", tasks => tasks.push(task));

const taskCompleted = (state, { id }) => state.setIn(["tasks", id, "completed"], true);
const todoCompleted = (state, { id }) => state.setIn(["tasks", id, "completed"], false);
const removeTask = (state, { id }) => state.deleteIn(["tasks", id ]);
export default (state = initial, action) => {
	switch(action.type) {
		case UPDATE_VALUE: return changeValue(state, action); //
		case UPDATE_FILTER: return changeFilter(state, action);
		case UPDATE_TEXT: return changeText(state, action);
		case ADD_TASK: return addTask(state, action);  
		case TASK_COMPLETED: return taskCompleted(state, action);
		case TODO_COMPLETED: return todoCompleted(state, action);
		case REMOVE_TASK: return removeTask(state, action);
		default: return state; // value returned otherwise - initial state
	}
};
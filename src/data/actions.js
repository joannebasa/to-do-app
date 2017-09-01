export const UPDATE_VALUE = Symbol("UPDATE_VALUE");

export const updateValue = value => ({
	type: UPDATE_VALUE,
	value,
});

export const UPDATE_FILTER = Symbol("UPDATE_FILTER");

export const updateFilter = value => ({
	type: UPDATE_FILTER, 
	value, 
});

export const UPDATE_TEXT = Symbol("UPDATE_TEXT");

export const updateText = (value, id) =>({
	type: UPDATE_TEXT,
	value,
	id,
});

export const ADD_TASK = Symbol("ADD_TASK");

// export const addTask = () => ({
// 	type: ADD_TASK,
// }); 
	
export const addTask = (task) => ({
	type: ADD_TASK,
	task,
}); 

export const TASK_COMPLETED = Symbol("TASK_COMPLETED");

export const taskCompleted = id => ({
	type: TASK_COMPLETED,
	id,
});

export const TODO_COMPLETED = Symbol("TODO_COMPLETED");
	
export const todoCompleted = id => ({
	type: TODO_COMPLETED,
	id, 
});

export const REMOVE_TASK = Symbol("REMOVE_TASK");

export const removeTask = id => ({
	type: REMOVE_TASK,
	id,
});
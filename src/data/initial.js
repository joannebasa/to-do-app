import React from "react";
import { Map, List } from "immutable";

export default Map({
	tasks: List([
	
	]),
	value: "", // current input 
	filter: 0, // filter | 0 = all 1 = completed 2 = todo 
});
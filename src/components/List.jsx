import React from "react";
import Item from "../containers/Item";

export default ({ tasks }) => (
	<div>
		<ul>
			{ tasks.map((task, i) => <Item key={ i } id={ i }/>) }
		</ul>
	</div>

);
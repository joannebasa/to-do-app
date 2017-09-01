import React from "react";

export default ({ allClicked, todoClicked, completedClicked }) => (
	<div className="filters">
		<p>Filter: </p>
		<p onClick={ allClicked }>all </p>
		<p onClick={ todoClicked }>todo </p>
		<p onClick={ completedClicked }>completed </p>

	</div>
);

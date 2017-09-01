import React from "react";

export default ({ onChange, value, id, boxClick, onClickDelete }) => (
	<div className="item">
		<input type="checkbox" onClick={ boxClick }/>
		<input type="text" onChange={onChange} value={ value } />
		<button className="btn btn-danger" onClick={onClickDelete}>Delete</button>
	</div>
);
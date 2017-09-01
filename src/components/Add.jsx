import React from "react";

export default ({ onChange, onSubmit, value }) => (
	<div>
		<form onSubmit={ onSubmit } >
			<input type="text" value={ value } onChange={ onChange } />
			<input type="submit" className="btn btn-primary" />
		</form>
	</div>
);
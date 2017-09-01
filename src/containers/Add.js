import { connect } from "react-redux";
import { updateValue } from "../data/actions";
import Add from "../components/Add";
import { postTask } from "../data/api";

const mapStateToProps = (state) => ({
	value: state.get("value"),

});

const mapDispatchToProps = dispatch => ({
	onChange: (e) => dispatch(updateValue(e.target.value)),
	onSubmit: (e) => {
		e.preventDefault();
		dispatch(postTask());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);
import {connect} from "react-redux";
import Item from "../components/Item";
import { updateText } from "../data/actions";
import { patchCompleted, deleteTask } from "../data/api";

const mapStateToProps = (state, { id }) => ({
	value: state.getIn(["tasks", id, "task"]),
});

const mapDispatchToProps = (dispatch, { id }) => ({
	onChange: (e) => dispatch(updateText(e.target.value, id)),
	boxClick: () => dispatch(patchCompleted(id)),
	onClickDelete: () => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item); 
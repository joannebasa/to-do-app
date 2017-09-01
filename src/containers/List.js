import {connect} from "react-redux";
import List from "../components/List";

const mapStateToProps = (state) => ({
	tasks: state.get("tasks"),

});

export default connect(mapStateToProps)(List);
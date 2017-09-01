import { connect } from "react-redux";
import Filters from "../components/Filters";
import { updateFilter } from "../data/actions";

const mapDispatchToProps = dispatch => ({
	allClicked: () => dispatch(updateFilter(0)),
	todoClicked: () => dispatch(updateFilter(2)),
	completedClicked: () => dispatch(updateFilter(1)),
});

export default connect (null, mapDispatchToProps)(Filters);  
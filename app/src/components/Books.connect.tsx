import {bindActionCreators, Dispatch} from "redux";
import { connect } from "react-redux";

import {RootStateType} from "../shared/store";

import Books from "./Books";
import {GET_ALL_BOOKS} from "../shared/store/constants";

const mapStateToProps = (state: RootStateType) => ({
    isLoggedIn: state.account.isLoggedIn,
    userName: state.account.username,
    userImageUrl: state.account.userImage
});

const getAllBooksNearbyAction = ()=> ({type: GET_ALL_BOOKS});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    getAllBooksNearbyAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Books);

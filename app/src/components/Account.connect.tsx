import {bindActionCreators, Dispatch} from "redux";
import { connect } from "react-redux";

import {RootStateType} from "../shared/store";

import Account from "./Account";
import {ERROR, USER_ACCOUNT_SET, USER_ACCOUNT_REGISTER} from "../shared/store/constants";

const mapStateToProps = (state: RootStateType) => ({
    isLoggedIn: state.account.isLoggedIn,
    userName: state.account.username,
    userImageUrl: state.account.userImage
});

const getUserInformationAction = ()=> ({type: USER_ACCOUNT_SET});
const registUser = () => ({ type: USER_ACCOUNT_REGISTER });
const errorAction = () => ({ type: ERROR });

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    getUserInformationAction,
    registUser,
    errorAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Account);

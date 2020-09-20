import {bindActionCreators, Dispatch} from "redux";
import { connect } from "react-redux";

import {RootStateType} from "../shared/store";

import Account from "./Account";
import {ERROR, USER_ACCOUNT_GET, USER_ACCOUNT_REGISTER} from "../shared/store/constants";

interface OwnProps {
}

const mapStateToProps = (state: RootStateType) => ({
    isLoggedIn: state.account.isLoggedIn,
    userName: state.account.username,
    userImageUrl: state.account.userImage
});

const getUserInformationAction = ()=> ({type: USER_ACCOUNT_GET});
const registUser = () => ({ type: USER_ACCOUNT_REGISTER });
const errorAction = () => ({ type: ERROR });

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    getUserInformationAction,
    registUser,
    errorAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Account);

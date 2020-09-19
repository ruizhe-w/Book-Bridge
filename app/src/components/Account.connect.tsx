import {bindActionCreators, Dispatch} from "redux";
import { connect } from "react-redux";

import {actions, ActionsType, RootStateType} from "../shared/store";

import Account from "./Account";
import {getUserInformationAction, registUser} from "../shared/store/actions";

const accountStateToProps = (state: RootStateType) => ({
    isLoggedIn: state.account.isLoggedIn,
    userName: state.account.username,
    userImageUrl: state.account.userImage
});

export default connect(accountStateToProps, {
    getUserInformationAction,
    registUser
})(Account);

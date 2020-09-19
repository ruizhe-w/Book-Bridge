import {bindActionCreators, Dispatch} from "redux";
import { connect } from "react-redux";

import {actions, ActionsType, RootStateType} from "../shared/store";

import Account from "./Account";

interface OwnProps {
}

const accountStateToProps = (state: RootStateType) => ({

});

const accountDispatchToProps = (dispatch: Dispatch<ActionsType>, props: OwnProps) => bindActionCreators({
    loggedInStatus: () => actions.logInFacebookAction(),
}, dispatch);

export default connect(accountStateToProps, accountDispatchToProps)(Account);

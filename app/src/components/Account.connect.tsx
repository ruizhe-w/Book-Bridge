import { Dispatch } from "redux";
import { connect } from "react-redux";

import { ActionsType, RootStateType } from "../shared/store";

import Account from "./Account";

interface OwnProps {
}

const mapStateToProps = (state: RootStateType) => ({

});

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>, props: OwnProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Account);

import { Dispatch } from "redux";
import { connect } from "react-redux";

import {RootStateType } from "../shared/store";

import App from "./App";

interface OwnProps {}

const mapStateToProps = (state: RootStateType) => ({
    loading: !state.account.ready,
});

const mapDispatchToProps = (
    dispatch: any,
    props: OwnProps
) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);

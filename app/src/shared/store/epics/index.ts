import { combineEpics } from "redux-observable";
import testEpic from "./TestEpic";

const epics = combineEpics(
    ...testEpic
);

export default epics;
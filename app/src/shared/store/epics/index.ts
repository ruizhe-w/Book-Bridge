import { combineEpics } from "redux-observable";
import testEpic from "./TestEpic";
import accountEpic from "./AccountEpic";

const epics = combineEpics(
    ...testEpic,
    ...accountEpic
);

export default epics;
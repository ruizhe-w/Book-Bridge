import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { exhaustMap, filter, map, catchError } from "rxjs/operators";
import { ActionType, isActionOf } from "typesafe-actions";

import * as actions from "../actions";

type Action = ActionType<typeof actions>;

import { RootState } from "../reducers";
import {getLoggedInUserInformation} from "../../services/Account";

const getUserInformationEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        filter(isActionOf(actions.getUserInformationAction)),
        exhaustMap(action =>
        from(getLoggedInUserInformation(action.payload.userId)).pipe(
            map(actions.getUserInformationAction)
        ))
    );

export default [
    getUserInformationEpic,
];

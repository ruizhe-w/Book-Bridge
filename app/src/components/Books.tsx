import * as React from "react";
import {actions} from "../shared/store";
import {getLoggedInUserInformation} from "../shared/services/Account";
import {setUserInformationAction} from "../shared/store/actions";

export interface BooksProps {
    userId: string,
    geoX: number,
    geoY: number
}

export default class Books extends React.Component<BooksProps, {}> {
    state = {geoX: 0, geoY: 0};

    constructor(props: BooksProps) {
        super(props);
        this.state = {geoX: 0, geoY: 0};
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

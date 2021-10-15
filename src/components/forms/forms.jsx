import React, {Component} from "react";
import Search from "../search";
import Radio from "../radio";

export default class Forms extends Component {
    state = {
        test: null,
        focus: true
    }

    render() {
        const {toPutNameToSearch, toPutTypeToSearch, toSearch} = this.props
        return(
            <>
                <Search
                    toPutNameToSearch={toPutNameToSearch}
                    toSearch={toSearch}
                />
                <Radio
                    toPutTypeToSearch={toPutTypeToSearch}
                />
            </>
        )
    }
}
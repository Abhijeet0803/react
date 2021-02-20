import React from "react";
import {data} from '../../data';
import { StyledInput } from "../Home/Styles";


function Search(props) {
    return (
        <StyledInput type="text" value={props.value} onChange={props.onChange} />
    );
}

export default Search;
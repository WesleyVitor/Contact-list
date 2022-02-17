import React from "react";

import { SectionList, SearchStyle } from "./styles";

const ListContact: React.FC = () => {
    return (
        <SectionList>
            <SearchStyle>
                <label>Search for a contact</label>
                <input type="text" placeholder="Search for Name" />
            </SearchStyle>

            <ul>
                <li>Nicholas</li>
                <li>Nicholas</li>
                <li>Nicholas</li>
                <li>Nicholas</li>
                <li>Nicholas</li>
                <li>Nicholas</li>
                <li>Nicholas</li>
                <li>Nicholas</li>
                <li>Nicholas</li>
                <li>Nicholas</li>
                <li>Nicholas</li>
            </ul>
        </SectionList>
    );
};

export default ListContact;

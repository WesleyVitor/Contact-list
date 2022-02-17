import React from "react";

import { SectionList } from "./styles";

const ListContact: React.FC = () => {
    return (
        <SectionList>
            <label>Search for a contact</label>
            <input type="text" />

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

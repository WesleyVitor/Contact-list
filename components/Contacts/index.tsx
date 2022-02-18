import React from "react";
import type { Contact } from "../ListContact/";
interface Props {
    currentContacts: Contact[];
}

const Contacts: React.FC<Props> = ({ currentContacts }) => {
    return (
        <ul>
            {currentContacts &&
                currentContacts.map((contact) => {
                    return <li>{contact.name}</li>;
                })}
        </ul>
    );
};

export default Contacts;

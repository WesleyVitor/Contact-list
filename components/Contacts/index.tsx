import React from "react";

interface Props {
    currentContacts: any[];
}
const Contacts: React.FC<Props> = ({ currentContacts }) => {
    return (
        <ul>
            {currentContacts &&
                currentContacts.map((contact) => {
                    return <li>{contact}</li>;
                })}
        </ul>
    );
};

export default Contacts;

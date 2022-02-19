import React from "react";
import type { Contact } from "../ListContact/";

import { ListItems, Item } from "./styles";
interface Props {
    currentContacts: Contact[];
}

const Contacts: React.FC<Props> = ({ currentContacts }) => {
    return (
        <ListItems>
            {currentContacts &&
                currentContacts.map((contact) => {
                    return (
                        <Item>
                            <div>
                                <div>{contact.name}</div>
                                {contact.job}
                            </div>
                            <p>...</p>
                        </Item>
                    );
                })}
        </ListItems>
    );
};

export default Contacts;

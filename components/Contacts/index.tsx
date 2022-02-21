import React from "react";
import { ContactProps } from "../../pages/index";

import { ListItems, Item } from "./styles";
interface Props {
    currentContacts: ContactProps[];
}

const Contacts: React.FC<Props> = ({ currentContacts }) => {
    return (
        <ListItems>
            {currentContacts &&
                currentContacts.map((contact) => {
                    return (
                        <Item>
                            <div>
                                <div>{contact.username}</div>
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

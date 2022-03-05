import Link from "next/link";
import React from "react";
import { ContactProps } from "../../pages/index";

import { ListItems, Item } from "./styles";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
interface Props {
    currentContacts: ContactProps[];
}

const Contacts: React.FC<Props> = ({ currentContacts }) => {
    return (
        <ListItems>
            {currentContacts &&
                currentContacts.map((contact) => {
                    return (
                        <Item key={contact.id}>
                            <div>
                                <div>{contact.username}</div>
                                {contact.job}
                            </div>
                            <Link
                                href={{
                                    pathname: "/",
                                    query: { id: `${contact.id}` },
                                }}
                            >
                                <MoreHorizIcon style={{ cursor: "pointer" }} />
                            </Link>
                        </Item>
                    );
                })}
        </ListItems>
    );
};

export default Contacts;

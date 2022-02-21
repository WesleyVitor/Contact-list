import React, { useEffect, useState } from "react";

import { SectionList, SearchStyle, Paginate } from "./styles";
import Contacts from "../Contacts";

import { ContactProps } from "../../pages/index";

interface Props {
    contactsPerPage: number;
    contacts: ContactProps[];
}

const ListContacts: React.FC<Props> = ({ contactsPerPage, contacts }) => {
    const [currentContacts, setCurrentContacts] = useState<ContactProps[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [contactOffset, setContactOffset] = useState(0);

    useEffect(() => {
        const endOffset = contactOffset + contactsPerPage;
        setCurrentContacts(contacts.slice(contactOffset, endOffset));
        setPageCount(Math.ceil(contacts.length / contactsPerPage));
    }, [contactOffset, contactsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * contactsPerPage) % contacts.length;
        setContactOffset(newOffset);
    };
    return (
        <SectionList>
            <SearchStyle>
                <label>Search for a contact</label>
                <input type="text" placeholder="Search for Name" />
            </SearchStyle>
            <Contacts currentContacts={currentContacts} />
            <div>
                <Paginate
                    breakLabel="..."
                    nextLabel="Prox >"
                    previousLabel="Ant  <"
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    onPageChange={handlePageClick}
                />
            </div>
        </SectionList>
    );
};

export default ListContacts;

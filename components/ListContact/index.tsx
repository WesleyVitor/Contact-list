import React, { useEffect, useState } from "react";

import { SectionList, SearchStyle, Paginate } from "./styles";
import Contacts from "../Contacts";

import ReactPaginate from "react-paginate";
interface Props {
    contactsPerPage: number;
    contacts: Contact[];
}

export type Contact = {
    name: string;
};

const ListContact: React.FC<Props> = ({ contactsPerPage, contacts }) => {
    const [currentContacts, setCurrentContacts] = useState<Contact[]>([]);
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

export default ListContact;

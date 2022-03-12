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
    const [searched, setSearched] = useState("");
    const allContacts = contacts;

    useEffect(() => {
        if (!!searched) {
            contacts = contacts.filter((value) =>
                value.username.includes(searched)
            );
        } else {
            contacts = allContacts;
        }
        const endOffset = contactOffset + contactsPerPage;
        setCurrentContacts(contacts.slice(contactOffset, endOffset));
        setPageCount(Math.ceil(contacts.length / contactsPerPage));
    }, [contactOffset, contactsPerPage, searched]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * contactsPerPage) % contacts.length;
        setContactOffset(newOffset);
    };
    return (
        <SectionList>
            <SearchStyle>
                <label>Pesquisar por um contato</label>
                <input
                    type="text"
                    placeholder="Pesquisar por Nome"
                    onChange={(e) => setSearched(e.target.value)}
                />
            </SearchStyle>
            <Contacts currentContacts={currentContacts} />
            <div>
                <Paginate
                    breakLabel="..."
                    nextLabel="Próximo >"
                    previousLabel="Anterior  <"
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    renderOnZeroPageCount={() => <p>Não Existe contatos</p>}
                    onPageChange={handlePageClick}
                />
            </div>
        </SectionList>
    );
};

export default ListContacts;

import React from "react";

import ListContact from "../components/ListContacts";
import Container from "../components/Container";
import ContactUnique from "../components/ContactUnique";

const contacts = [
    { name: "jose", job: "Programmer" },
    { name: "maria", job: "Design" },
];
const index: React.FC = () => {
    return (
        <Container>
            <ListContact contactsPerPage={8} contacts={contacts} />
            <div>
                <button>OK</button>
                <ContactUnique />
            </div>
        </Container>
    );
};

export default index;

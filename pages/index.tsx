import React from "react";

import ListContact from "../components/ListContact";
import Container from "../components/Container";

const contacts = [{ name: "jose" }, { name: "maria" }];
const index: React.FC = () => {
    return (
        <Container>
            <ListContact contactsPerPage={8} contacts={contacts} />
        </Container>
    );
};

export default index;

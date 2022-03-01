import React from "react";

import Container from "../../components/Container";
import Form from "../../components/Form";

import { Text } from "../../components/Text";
const add: React.FC = () => {
    return (
        <Container>
            <Text>
                <p>Adicionar Contato</p>
            </Text>
            <Form />
        </Container>
    );
};

export default add;

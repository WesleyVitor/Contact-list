import React from "react";
import { Button } from "../../styles/components/Button";
import { Input, Label, ContainerInput, ContainerForm } from "./styles";

const Form: React.FC = () => {
    return (
        <ContainerForm>
            <div>
                <ContainerInput>
                    <Label>Username</Label>
                    <Input type="text" required />
                </ContainerInput>
                <ContainerInput>
                    <Label>Email</Label>
                    <Input type="text" required />
                </ContainerInput>
                <ContainerInput>
                    <Label>Ocupação</Label>
                    <Input type="text" required />
                </ContainerInput>
                <ContainerInput>
                    <Label>Meeting</Label>
                    <Input type="text" required />
                </ContainerInput>
                <ContainerInput>
                    <Label>Pinterest</Label>
                    <Input type="text" required />
                </ContainerInput>
                <Button type="submit">Cadastrar</Button>
            </div>
            <div>
                <ContainerInput>
                    <Label>Instagram</Label>
                    <Input type="text" required />
                </ContainerInput>
                <ContainerInput>
                    <Label>Twitter</Label>
                    <Input type="text" required />
                </ContainerInput>
                <ContainerInput>
                    <Label>Linkedin</Label>
                    <Input type="text" required />
                </ContainerInput>
            </div>
        </ContainerForm>
    );
};

export default Form;

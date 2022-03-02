import React from "react";
import { Button } from "../../styles/components/Button";
import { Input, Label, ContainerInput, ContainerForm } from "./styles";
import { useForm } from "react-hook-form";
import { ContactProps } from "../../pages/index";

const Form: React.FC = () => {
    const { register, handleSubmit } = useForm<ContactProps>();

    const FSubmit = (data: ContactProps) =>
        console.log(`Dados:${data.username}`);
    return (
        <ContainerForm onSubmit={handleSubmit(FSubmit)}>
            <div>
                <ContainerInput>
                    <Label>Username</Label>
                    <Input {...register("username")} />
                </ContainerInput>
                <ContainerInput>
                    <Label>Email</Label>
                    <Input {...register("email1")} />
                </ContainerInput>
                <ContainerInput>
                    <Label>Ocupação</Label>
                    <Input {...register("job")} />
                </ContainerInput>
                <ContainerInput>
                    <Label>Meeting</Label>
                    <Input {...register("meeting")} />
                </ContainerInput>
                <ContainerInput>
                    <Label>Pinterest</Label>
                    <Input {...register("Pinterest")} />
                </ContainerInput>
                <Button type="submit">Cadastrar</Button>
            </div>
            <div>
                <ContainerInput>
                    <Label>Instagram</Label>
                    <Input {...register("instagram")} />
                </ContainerInput>
                <ContainerInput>
                    <Label>Twitter</Label>
                    <Input {...register("twitter")} />
                </ContainerInput>
                <ContainerInput>
                    <Label>Linkedin</Label>
                    <Input {...register("Linkedin")} />
                </ContainerInput>
            </div>
        </ContainerForm>
    );
};

export default Form;

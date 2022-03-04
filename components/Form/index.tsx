import React from "react";
import { Button } from "../../styles/components/Button";
import { Input, Label, ContainerInput, ContainerForm } from "./styles";
import { useForm } from "react-hook-form";
import { ContactProps } from "../../pages/index";
import axios from "axios";
import { useRouter } from "next/router";
const Form: React.FC = () => {
    const { register, handleSubmit } = useForm<ContactProps>();
    const router = useRouter();
    const FSubmit = (data: ContactProps) => {
        axios
            .post("http://localhost:3000/api/contacts/add", data)
            .then(() => router.push("/"));
    };

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
                    <Label>Bio</Label>
                    <Input {...register("bio")} />
                </ContainerInput>
                <ContainerInput>
                    <Label>Ocupação</Label>
                    <Input {...register("job")} />
                </ContainerInput>
                <ContainerInput>
                    <Label>Celular</Label>
                    <Input {...register("phone1")} />
                </ContainerInput>

                <Button type="submit">Cadastrar</Button>
            </div>
            <div>
                <ContainerInput>
                    <Label>Meeting</Label>
                    <Input {...register("meeting")} />
                </ContainerInput>
                <ContainerInput>
                    <Label>Pinterest</Label>
                    <Input {...register("Pinterest")} />
                </ContainerInput>
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

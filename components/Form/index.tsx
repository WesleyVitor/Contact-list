import React from "react";
import { Button } from "../../styles/components/Button";
import { Input, Label, ContainerInput, ContainerForm } from "./styles";
import { useForm } from "react-hook-form";
import { ContactProps } from "../../pages/index";
import { base } from "../../lib/axios";
import { useRouter } from "next/router";
const Form: React.FC = () => {
    const { register, handleSubmit } = useForm<ContactProps>();
    const router = useRouter();
    const FSubmit = (data: ContactProps) => {
        base.post("/api/contacts/add", data).then(() => router.push("/"));
    };

    const handleClick = () => {
        router.push("/");
    };

    return (
        <ContainerForm onSubmit={handleSubmit(FSubmit)}>
            <div>
                <ContainerInput>
                    <Label>Username</Label>
                    <Input required {...register("username")} />
                </ContainerInput>
                <ContainerInput>
                    <Label>Email</Label>
                    <Input required {...register("email1")} />
                </ContainerInput>
                <ContainerInput>
                    <Label>Bio</Label>
                    <Input required {...register("bio")} />
                </ContainerInput>
                <ContainerInput>
                    <Label>Ocupação</Label>
                    <Input required {...register("job")} />
                </ContainerInput>
                <ContainerInput>
                    <Label>Celular</Label>
                    <Input {...register("phone1")} />
                </ContainerInput>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <Button type="submit">Cadastrar</Button>
                    <Button onClick={() => handleClick()}>Cancelar</Button>
                </div>
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

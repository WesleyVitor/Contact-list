import React from "react";
import { Button } from "../../styles/components/Button";
import { Input, Label, ContainerInput, ContainerForm } from "./styles";
import { useForm } from "react-hook-form";
import { ContactProps } from "../../pages/index";
import { base } from "../../lib/axios";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../lib/yup.schema";
const Form: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactProps>({
        resolver: yupResolver(schema),
    });
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
                    <Input {...register("username")} />
                    <p>{errors.username?.message}</p>
                </ContainerInput>
                <ContainerInput>
                    <Label>Email</Label>
                    <Input {...register("email1")} />
                    <p>{errors.email1?.message}</p>
                </ContainerInput>
                <ContainerInput>
                    <Label>Bio</Label>
                    <Input {...register("bio")} />
                    <p>{errors.bio?.message}</p>
                </ContainerInput>
                <ContainerInput>
                    <Label>Ocupação</Label>
                    <Input {...register("job")} />
                    <p>{errors.job?.message}</p>
                </ContainerInput>
                <ContainerInput>
                    <Label>Celular</Label>
                    <Input {...register("phone1")} />
                    <p>{errors.phone1?.message}</p>
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

import React from "react";

import ListContact from "../components/ListContacts";
import Container from "../components/Container";
import ContactUnique from "../components/ContactUnique";

import { GetStaticProps } from "next";

import prisma from "../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
    await prisma.contact.create({
        data: {
            username: "Bruno",
            bio: "Sou um profissional muito bom para tomar café",
            job: "Developer",
            email1: "Bruno@gmail.com",
            phone1: "99878765",
        },
    });

    const contacts = await prisma.contact.findMany({
        where: {
            isValid: true,
        },
    });

    return {
        props: {
            contacts,
        },
    };
};

export type ContactProps = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    job: string;
    bio: string;
    email1: string;
    email2: string;
    meeting: string;
    phone1: string;
    phone2: string;
    instagram: string;
    twitter: string;
    Linkedin: string;
    Pinterest: string;
    facebook: string;
    isValid: boolean;
};

interface Props {
    contacts: ContactProps[];
}

const index: React.FC<Props> = ({ contacts }) => {
    return (
        <Container>
            <ListContact contactsPerPage={8} contacts={contacts} />
            <ContactUnique />
        </Container>
    );
};

export default index;

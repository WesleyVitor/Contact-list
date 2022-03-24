import React from "react";

import ListContact from "../components/ListContacts";
import Container from "../components/Container";
import ContactUnique from "../components/ContactUnique";

import { GetStaticProps } from "next";

import prisma from "../lib/prisma";

import { Button } from "../styles/components/Button";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
    
    const contacts = await prisma.contact.findMany({
        where: {
            isValid: true,
        },
    });
    return {
        props: {
            contacts,
        },
    }
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
            <ListContact contactsPerPage={3} contacts={contacts} />

            <section>
                <Button>
                    <Link href="/contact/add">
                        <img
                            src="/assets/Icon.svg"
                            alt="Imagem do butão"
                            title="Adicionar novo contato"
                        />
                    </Link>
                </Button>
                <ContactUnique />
            </section>
        </Container>
    );
};

export default index;

import React from "react";
import { Header, Info, Caption, MainAside } from "./styles";
import Link from "next/link";

import { useRouter } from "next/router";
import useSWR from "swr";
import { ContactProps } from "../../pages";

import { FacebookOutlined } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const ContactUnique: React.FC = () => {
    const router = useRouter();
    const { id } = router.query.id != undefined ? router.query : { id: "1" };

    const { data, error } = useSWR<ContactProps>(
        `/api/contacts/${id}`,
        async (url) => {
            const res = await fetch(url);
            const json = await res.json();
            return json;
        }
    );
    if (error) return <h2>Adicione um Contato...</h2>;
    if (!data) return <h2>Carregando...</h2>;
    return (
        <MainAside>
            <Header>
                <p className="name">{data.username}</p>
                <p className="job">{data.job}</p>
            </Header>
            <div className="line">
                <Caption>BIO</Caption>
                <Info>{data.bio}</Info>
            </div>
            <div className="line">
                <Caption>Email</Caption>
                <Info>{data.email1}</Info>
            </div>
            <div className="line">
                <Caption>Meeting</Caption>
                <Info> {data.meeting}</Info>
            </div>
            <div className="line">
                <Caption>Phone</Caption>
                <Info>
                    <div>{data.phone1} </div>
                    {data.phone2}
                </Info>
            </div>
            <div className="line">
                <Caption>Social</Caption>
                <Info>
                    <Link href={data.facebook != null ? data.facebook : "#"}>
                        <FacebookOutlined />
                    </Link>
                    <Link href={data.instagram != null ? data.instagram : "#"}>
                        <InstagramIcon />
                    </Link>
                    <Link href={data.twitter != null ? data.twitter : "#"}>
                        <TwitterIcon />
                    </Link>
                    <Link href={data.Linkedin != null ? data.Linkedin : "#"}>
                        <LinkedInIcon />
                    </Link>
                </Info>
            </div>
        </MainAside>
    );
};

export default ContactUnique;

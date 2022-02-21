import React from "react";
import { Header, Info, Caption, MainAside } from "./styles";
import Link from "next/link";
const ContactUnique: React.FC = () => {
    return (
        <MainAside>
            <Header>
                <p className="name">Maria</p>
                <p className="job">Developer</p>
            </Header>
            <div className="line">
                <Caption>BIO</Caption>
                <Info>
                    When I first got into the advertising, I was looking for the
                    magical combination that would put website into the top
                    search engine rankings
                </Info>
            </div>
            <div className="line">
                <Caption>Email</Caption>
                <Info>johanna.stevens@whiteui.store</Info>
            </div>
            <div className="line">
                <Caption>Meeting</Caption>
                <Info> http://go.betacall.com/meet/j.stevens</Info>
            </div>
            <div className="line">
                <Caption>Phone</Caption>
                <Info>
                    <div>621-770-7689 </div>
                    621-770-7689
                </Info>
            </div>
            <div className="line">
                <Caption>Social</Caption>
                <Info>
                    <Link href="#">
                        <a>Facebook</a>
                    </Link>
                    <Link href="#">
                        <a>Instragram</a>
                    </Link>
                    <Link href="#">
                        <a>Twitter</a>
                    </Link>
                    <Link href="#">
                        <a>Linkedin</a>
                    </Link>
                </Info>
            </div>
        </MainAside>
    );
};

export default ContactUnique;

import React from "react";
import { Header, Info, LineInfo, MainAside, Table } from "./styles";

const ContactUnique: React.FC = () => {
    return (
        <MainAside>
            <Header>
                <p>Maria</p>
                <p>Developer</p>
            </Header>
            <Table>
                <LineInfo>
                    <Info>BIO</Info>
                    <Info>
                        When I first got into the advertising, I was looking for
                        the magical combination that would put website into the
                        top search engine rankings
                    </Info>
                </LineInfo>
            </Table>
        </MainAside>
    );
};

export default ContactUnique;

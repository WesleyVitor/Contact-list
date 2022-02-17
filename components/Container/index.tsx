import React from "react";
import { ContainerStyle, AsideStyle, Main } from "./styles";

interface Props {
    children: React.FC;
}

const Container: React.FC = ({ children }: Props) => {
    return (
        <ContainerStyle>
            <AsideStyle />
            <Main>{children}</Main>
        </ContainerStyle>
    );
};

export default Container;

import React from "react";
import { ContainerStyle } from "./styles";

interface Props {
    children: React.FC;
}

const Container: React.FC = ({ children }: Props) => {
    return (
        <ContainerStyle>
            <aside
                style={{
                    height: "100vh",
                    width: "455px",
                    background: "#6B59CC",
                }}
            ></aside>
            {children}
        </ContainerStyle>
    );
};

export default Container;

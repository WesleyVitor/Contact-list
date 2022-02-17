import React from "react";

import ListContact from "../components/ListContact";
import Container from "../components/Container";

const index: React.FC = () => {
    return (
        <Container>
            <div
                style={{
                    position: "absolute",
                    top: "74px",
                    left: "42px",
                    display: "flex",
                }}
            >
                <ListContact />
            </div>
        </Container>
    );
};

export default index;

import styled from "styled-components";

export const SectionList = styled.section`
    background: #fff;
    padding-top: 112px;
    padding-left: 32px;
    padding-right: 45px;
    width: 552px;
`;

export const SearchStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 475px;
    height: 48px;

    > label {
        font-size: 14px;
        color: #8083a3;
        font-family: "Lato", sans-serif;
        margin-bottom: 8px;
    }

    > input {
        font-size: 16px;
        color: #1a1c1d;
        font-family: "Lato", sans-serif;
        font-weight: 700;
        border: 0;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    }
`;

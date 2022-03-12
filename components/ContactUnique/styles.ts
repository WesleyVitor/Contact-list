import styled from "styled-components";

export const MainAside = styled.aside`
    max-width: 500px;
    font-family: "Lato", sans-serif;

    & .line {
        display: flex;
        margin-bottom: 21px;
    }
`;

export const Header = styled.header`
    width: 405px;
    height: 115px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Lato", sans-serif;
    & .name {
        font-family: "Lato", sans-serif;
        font-weight: 700;
        font-size: 20px;
    }

    & .job {
        font-size: 14px;
    }
`;

export const Caption = styled.p`
    margin-right: 34px;
    font-size: 14px;
    color: #8083a3;
`;

export const Info = styled.p`
    font-size: 14px;
    color: #1a1c1d;
    cursor: pointer;
    & a {
        margin-right: 10px;
        text-decoration: none;
        color: #333;

        &:hover {
            text-decoration: underline;
        }
    }
`;

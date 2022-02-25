import styled from "styled-components";

export const Button = styled.button`
    width: 146px;
    height: 56px;
    background: #6b59cc;
    border-radius: 10px;
    border: none;
    margin: 0 auto;
    display: block;
    cursor: pointer;
    & > img {
        width: 19%;
    }

    &:hover {
        opacity: 0.9;
    }
`;

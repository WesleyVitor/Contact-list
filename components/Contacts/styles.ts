import styled from "styled-components";

export const ListItems = styled.ul``;

export const Item = styled.li`
    height: 68px;
    display: flex;
    justify-content: space-between;
    padding-right: 50px;

    & a {
        text-decoration: none;
        color: #333;

        &:hover {
            text-decoration: underline;
        }
    }
`;

import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
`;

export const Input = styled.input`
    width: 250px;
    height: 20px;
    padding: 16px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
`;

export const Label = styled.label`
    font-size: 12px;
    color: #666;
    margin-bottom: 8px;
    width: 384px;
`;

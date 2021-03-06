import styled from 'styled-components';

export const MoreContainer = styled.div`
    width: 1280px;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    padding-top: 70px;
    padding-bottom: 70px;
`;

export const MoreContainerTextDiv = styled.div`
    max-width: 750px;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 70px;
`;

export const MoreContainerText = styled.p`
    margin-bottom: 40px;
    font-size: 18px;
    font-weight: bold;
    line-height: 30px;
`;

export const MoreButton = styled.button`
    width: 160px;
    height: 40px;
    color: white;
    background-color: #c59613;
    border-style: none;
    border-radius: 5px;
    font-weight: bolder;
    transition: color 0.3s ease-out;

    &:hover {
        color: rgb(200, 15, 50);
        border-style: solid;
        border-color: rgb(200, 15, 50);
    }
`;
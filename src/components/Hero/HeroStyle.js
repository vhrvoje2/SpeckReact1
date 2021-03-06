import styled from 'styled-components';
import bgimg from '../../assets/images/event.jpg';

export const HeroDiv = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    background-image: url(${bgimg});
    background-position-y: -375px;
`;

export const HeroContainer = styled.div`
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    width: 20%;
    height: 50%;
    border-radius: 20px;
    line-height: 40px;
    text-align: center;
    margin: auto;
`;

export const HeroTopText = styled.h2`
    color: white;
    font-size: 30px;
    margin-top: 0;
`;

export const HeroMiddleText = styled.h2`
    font-size: 38px;
    color: #c59613;
`;

export const HeroBottomText = styled.h2`
    color: white;
    font-size: 30px;
`;

export const HeroButton = styled.button`
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
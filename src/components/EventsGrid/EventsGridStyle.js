import styled from 'styled-components';

export const EventsGridDiv = styled.div`
    display: block;
    max-width: 350px;
    margin: 0 auto;
    padding: 0 15px;

    & InfoBox {
        margin-bottom: 40px;
    }

    @media only screen and (min-width: 576px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        max-width: 1024px;

        & InfoBox {
            margin: inherit;
        }
    }

    @media only screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media only screen and (min-width: 1024px){
        gap: 30px;
        padding: 0;
    }
`;


import styled from "styled-components";

export const Container = styled.div`
    height: 50%;
    width: 550px;
    padding: .5em;
    background: #eee;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #11111180;
    font-family: 'Poppins';
    font-weight: 400;

    @media only screen and (max-width: 550px){
        width: 90vw;
    }
`

export const Cont = styled.div`
    padding: .5em;
    height: 54px;
    font-family: 'Poppins';
    font-weight: 400;
    width: 100%;
    align-items: center;
    display: flex;
    align-content: center;
    justify-content: space-between;
`
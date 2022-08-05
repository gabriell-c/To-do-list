import styled from "styled-components";

export  const All = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
`

export const Container = styled.div`
    overflow-y: auto;
    max-height: 98vh;
    width: 550px;
    padding: .5em;
    background: #eee;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #11111180;
    font-weight: 500;

    @media only screen and (max-width: 550px){
        width: 90vw;
    }
`

export const Cont = styled.div`
    padding: .5em;
    height: 54px;
    font-weight: 500;
    width: 100%;
    align-items: center;
    display: flex;
    align-content: center;
    justify-content: space-between;
`
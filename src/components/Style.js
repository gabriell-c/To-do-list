import styled from "styled-components";

export  const All = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    overflow-y: auto;
    max-height: 98vh;
    width: 90vw;
    max-width: 700px;
    padding: .5em;
    background: #eee;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #11111180;
    font-weight: 500;

    #HeaderArea{
        padding-bottom: 1em;
    }

    ul{
        padding: 0;

        span{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 90%;
        }
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

    button{
        padding: 25px 30px;
    }

    div{
        height: 50px;
    }
    
    label{
        line-height: 2em;
    }
`

export const Item = styled.div`
    box-shadow: 1px 1px 3px #11111180;
    margin-top: 1em;
`

export const InputArea = styled.div`
    width: 100%;
    padding: .5em;

    div{
        height: 50px;
    }

    label{
        line-height: 1.1em;
    }

    fieldset{
        border-width: 2px;
    }
`
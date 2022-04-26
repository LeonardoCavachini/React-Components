import styled from 'styled-components';

export const Wrapper = styled.section`{
    display:flex;
    background-color: white;
    padding: 1%;
    img {
        border-radius: 5px;
        width:50%;
    }
    
}`;
export const Container = styled.div`{
    display:flex;
    margin-top: 5%;
    h3 {
        text-weight: bold;
        font-family: sans-serif;
    }
    span {
        margin-left: 5px;
        font-family: sans-serif;
        text-weight: bold;
        text-align: center;
    }
}`
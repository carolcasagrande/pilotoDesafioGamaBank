import styled, { css } from 'styled-components';

import backgroundImg from "../../img/happyhome.png";

export const Home = styled.div`
background-color: #8C52E5;
background-image: url(${backgroundImg});
background-repeat: no-repeat;
background-position: bottom;
h2{
    margin-bottom: 25px;
}
button{
    cursor: pointer;
    border: none;
    border-radius: 100px;
    color: #8C52E5;
}

form{
    input{
        display:block;
        border: none;
        font-size: 16px;
        padding: 8px;
        font-weight: 300;
        text-align:left;
        width: 90%;
        margin: 25px;
        border-bottom: 2px solid #666;
    }
}

button{
    cursor: pointer;
    border: none;
    border-radius: 100px;
    color: #8C52E5;    
}

`
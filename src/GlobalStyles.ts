import { createGlobalStyle, keyframes } from 'styled-components'

const animate = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`

export default createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }

   .app-content{
   
    display: flex;
    margin-top: 79px;
   }

   .animation-left {
    opacity: 0;
    transform: translateX(-20px);
    animation: ${animate} 0.3s forwards ease-in-out;
   }

   .animation-right {
    opacity: 0;
    transform: translateX(20px);
    animation: ${animate} 0.3s forwards ease-in-out;
   }

   .animation-top {
    opacity: 0;
    transform: translateY(-20px);
    animation: ${animate} 0.3s forwards ease-in-out;
   }

   .animation-bottom {
    opacity: 0;
    transform: translateY(20px);
    animation: ${animate} 0.3s forwards ease-in-out;
   }

`

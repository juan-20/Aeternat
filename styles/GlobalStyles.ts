import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

*{
    margin: 0px;
    margin: 0px;
    box-sizing: border-box;
    transition: background 0.2s linear;
  }
  
  html, #root, body{
    height: 100vh;
  }
  
main{
    padding: 1rem;
}

*, button, input {
    font-family: 'Poppins', sans-serif;


    /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
}

`;
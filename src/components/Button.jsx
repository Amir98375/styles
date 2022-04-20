import styled from "styled-components"
//import {Button} from "@mui/material"

// export const Button =({children})=>{
//     return(
//         <button className="btn">{children}</button>
//     )
// }
export const Button = styled.button`
  color:${(props)=>props.color?props.color:"white"};
  background-color:${(props)=>props.bg?props.bg:'grey'};
  border:${(props)=>props.border?border: '1px solid rgba(0, 0, 0, 0.05)'}
  border:1px solid black;
  height:50px;
  width:200px;
  margin-top:100px;
  border-radius: 20px 20px;
  margin-left:70px;

  `;

  export const Div = styled.div`
 

  display:grid;
  grid-template-columns: auto auto auto;
  gap:10px;
  
  `;
 
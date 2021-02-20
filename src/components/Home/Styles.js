import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-content: center;
  `;

const Head = styled.h2`
    background-color: #75cfb8;
    font-size: 20px;
    `;

const Box = styled.div`
    margin: auto;
    height: 100px;
    width: 300px;
    text-align: center;
    background-color:#bbdfc8;
    margin-bottom: 16px;
    border-radius:10px;
    `;

const StyledInput = styled.input`
margin: auto;
padding : 4px 16px;
width: 260px;
margin-bottom: 16px;
border-radius:10px;
`;
export {Box, Wrapper, Head, StyledInput}
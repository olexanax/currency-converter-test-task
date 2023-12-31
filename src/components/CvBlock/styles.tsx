import styled from 'styled-components';

export const Container = styled.div`
margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  & > p {
    font-size: 24px;
    margin-bottom: 16px;

    & > span {
      font-size: 32px;
    }

    & > a {
      color: white;
      text-decoration: underline;
    }
  }
  & > img {
    width: 50%; /* Підставте відповідний розмір */
    align-self: center;
  }

`;

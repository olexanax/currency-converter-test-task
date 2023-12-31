import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 16px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 448px;
  width: 100%;
  .inputBlock{
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;

  }
  .input{
    width: 100%;

    padding: 10px  16px;
    font-size: 24px;
    flex: 1 1 auto;
    border-radius: 8px;
    border: 1px solid gray;
  }
  .select{
    padding: 10px  16px;
    font-size: 24px;
    border-radius: 8px;
    border: 1px solid gray
  }
  .CV{
    font-size: 14px;
    font-weight: 600;
    color: gray;
    text-decoration: none;
    cursor: pointer;
  }
`;
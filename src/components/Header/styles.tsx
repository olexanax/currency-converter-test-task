import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 16px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 448px;
  .headerTitle{
    font-size: 32px;
    font-weight: 700;
  }
  .currency_container{
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
  }
  .currency_container_item{
    font-size: 24px;
  }
  .divider{
    display: block;
    height: 30px;
    width: 2px;
    background-color: black;
  }
`;
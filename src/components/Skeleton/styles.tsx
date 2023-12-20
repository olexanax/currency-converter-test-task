import styled from "styled-components";

export const Container = styled.div`

  background-color: rgb(244, 244, 245);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  border-radius: 6px;

@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
`;
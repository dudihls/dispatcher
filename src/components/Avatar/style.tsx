import styled from "styled-components";

const sizes = {
  sm: "50px",
  md: "100px",
};

type WrapperProps = {
  size: "sm" | "md";
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  padding: 2px;
  width: ${(props) => sizes[props.size]};
  height: ${(props) => sizes[props.size]};
  background-color: #555454;
  color: white;
`;

export const StyledImage = styled.img`
  border-radius: 50%;
  width: 100%;
`;

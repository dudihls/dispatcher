import { StyledIcon } from "./style";

type IconProps = {
  src: string,
  color?: "black" | "white" | "purple"
};

export const Icon  = ({src,color} :IconProps) : JSX.Element => {

return <StyledIcon src={src} color={color} />
} 

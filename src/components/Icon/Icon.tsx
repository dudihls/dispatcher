import { StyledIcon } from "./style";

const reqSvgs = require.context("./Icons", true, /\.svg$/);

const svgs = reqSvgs.keys().reduce((images: any, path) => {
  let myKey = path.substring(2, path.lastIndexOf(".svg"));
  images[myKey] = reqSvgs(path);
  return images;
}, {});

type IconProps = {
  name: string,
  color?: "black" | "white" | "purple"
};

export const Icon  = ({name,color} :IconProps) : JSX.Element =>  <StyledIcon src={svgs[name]} color={color} />

import { StyledImage, Wrapper } from "./style";

type AvatarProps = {
  src?: string;
  size: "sm" | "md";
};

export const Avatar: React.FC<AvatarProps> = ({ src, children, size }) => {
  return src ? (
    <Wrapper size={size}>
      <StyledImage src={src} />
    </Wrapper>
  ) : (
    <Wrapper size={size}>{children}</Wrapper>
  );
};

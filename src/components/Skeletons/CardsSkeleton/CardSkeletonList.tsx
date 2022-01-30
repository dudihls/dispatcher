import { CardSkeleton, CardSkeletonMobile } from "./CardSkeleton/CardSkeleton";
import { useMediaQuery } from "react-responsive";
import { theme } from "../../../global-styles/theme";
import { StyledSkeletonContainer, StyledWrapper } from "./style";

export const CardsSkeletonList = ({ amount }: { amount: number }) => {
  const isMobile = useMediaQuery({
    query: theme.device.mobile,
  });

  const cards = [];
  for (let i = 0; i < amount; i++) {
    isMobile
      ? cards.push(<CardSkeletonMobile key={i} />)
      : cards.push(<CardSkeleton key={i} />);
  }

  return (
    <StyledWrapper>
      <StyledSkeletonContainer>{cards.map((c) => c)}</StyledSkeletonContainer>
    </StyledWrapper>
  );
};

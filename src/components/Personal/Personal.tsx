import { Icon } from "../Icon/Icon";
import { Container, MobileSearchIcon } from "./style";
import search from "../../assets/Icons/search.svg";

type PersonalProps = {
  onClickSearchIcon: () => any;
};

export const Personal: React.FC<PersonalProps> = ({ onClickSearchIcon }) => {
  return (
    <Container>
      <MobileSearchIcon onClick={onClickSearchIcon}>
        <Icon src={search} />
      </MobileSearchIcon>
      {/* <Icon src={settings} ml={14} /> */}
      {/* <Icon src={notifications} ml={14} /> */}
      {/* <Avatar size={"sm"}>AB</Avatar> */}
    </Container>
  );
};

import { Icon } from "../Icon/Icon";
import { Container } from "./style";
import settings from "../../assets/Icons/settings.svg";
import notifications from "../../assets/Icons/notifications.svg";
import { Avatar } from "../Avatar/Avatar";

export const Personal: React.FC = () => (
  <Container>
    <Icon src={settings} ml={14} />
    <Icon src={notifications} ml={14} />
    <Avatar size={"sm"}>AB</Avatar>
  </Container>
);

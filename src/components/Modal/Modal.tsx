import { StyledModal } from "./style";

type ModalProps = {
  ToggleModal: () => any;
};

export const Modal: React.FC<ModalProps> = ({ ToggleModal }) => {
  return <StyledModal onClick={ToggleModal} />;
};

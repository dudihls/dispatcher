import { createPortal } from "react-dom";
import { StyledModal } from "./style";

type ModalProps = {
  ToggleModal: () => any;
};
const root = document.getElementById("root")!;
export const Modal: React.FC<ModalProps> = ({ ToggleModal }) => {
  return createPortal(<StyledModal onClick={ToggleModal} />, root);
};

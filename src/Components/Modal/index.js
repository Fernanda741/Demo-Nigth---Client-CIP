import "./styles.css";
import Button from "../Button";
import PlusButton from "../../Components/PlusButton";

export const Modal = ({ children, click, onClickYes, onClickNo, modal }) => {
  return (
    <>
      {modal && (
        <div className="modal-container" onClick={click}>
          <div className="modal">
            <div className="modal-content">
              <p>{children}</p>
              <div className="modal-buttons">
                <Button className="button-yes" onClick={onClickYes}>
                  Sim
                </Button>
                <Button className="button-no" onClick={onClickNo}>
                  Não
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const ModalEdit = ({ children, onClickNo, modal }) => {
  return (
    <>
      {modal && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-content">
              <div>{children}</div>
              <div className="modal-buttons">
                <Button className="button-no" onClick={onClickNo}>
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const ModalCheckingAccount = ({ children, onClickNo, modal }) => {
  return (
    <>
      {modal && (
        <div className="modal-container">
          <div className="modal">
            <div className="modal-content">
              <div>{children}</div>
              <div className="modal-buttons">
                <Button className="button-no" onClick={onClickNo}>
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

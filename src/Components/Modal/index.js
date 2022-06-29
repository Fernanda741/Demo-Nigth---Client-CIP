import './styles.css';
import Button from '../Button';

export const Modal = ({ children, click, onClickYes, onClickNo, modal }) => {
  return (
    <>
      <div
        className={(modal ? 'active' : '') + ' modal-container'}
        onClick={click}
      >
        <form>
          <section id="post" className="post">
            <div className="post-container">
              <h2>New Post</h2>
            </div>
          </section>
          <div className="container-btns">
            <button id="btn-post" className="btn btn-secondary">
              Post
            </button>
            <button id="btn-cancel" className="btn btn-primary">
              Cancel
            </button>
          </div>
        </form>
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
    </>
  );
};

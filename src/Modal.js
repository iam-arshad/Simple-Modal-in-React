import "./styles.css";

export default function Modal(props) {
  let children = props.children;
  function closeModal() {
    props.setIsModalOpen(false);
  }
  return (
    <>
      <div
        id="overlayForModal"
        onClick={(e) => {
          if (e.target.id === "overlayForModal") closeModal();
        }}
      >
        <div id="modalContainer">
          <header>
            <button id="closeModalBtn" onClick={closeModal}>
              X
            </button>
          </header>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}

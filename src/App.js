import { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

export default function App() {
  let [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        open Modal
      </button>
      {isModalOpen ? (
        <Modal setIsModalOpen={setIsModalOpen}>asdfgh....</Modal>
      ) : (
        ""
      )}
    </div>
  );
}

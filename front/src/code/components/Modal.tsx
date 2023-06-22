import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

/*
interface props{
    show: boolean,
    handleClose: (arg0: undefined) => void
}*/

interface props {
  search: string;
  changeState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModelSearch({ search, changeState }: props) {
  return (
    <>
      <div
        className="modal show"
        style={{
          display: "flex",
          position: "fixed",
          justifyContent: `center`,
          alignItems: `center`,
          backgroundColor: `rgba(0,0,0, 0.75)`,
        }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title className="text-center"> {search} </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>You Searched {search} </p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={() => changeState(false)} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
}

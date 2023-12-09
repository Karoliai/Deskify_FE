import { Button, Image } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import "./Photo.css";

import Floor from "../../../assets/floor.png";
import ImageDropZone from "../../../components/ImageDropZone/ImageDropZone";
import AlertModal from "../../../components/Modal/Modal";
import { useContext, useState } from "react";
import { AuthContext } from "../../../main";

function ReservationPhoto() {
  const [showModal, setShowModal] = useState(true);
  const isAdmin = useContext(AuthContext);
  return (
    <>
      <div className="d-flex justify-content-end w-100 me-4 cursor">
        {isAdmin().isAdmin === "false" ? null : (
          <Pencil onClick={() => setShowModal(false)} />
        )}
      </div>
      <Image src={Floor}></Image>
      <AlertModal isHidden={showModal}>
        <h1>Edit Photo</h1>
        <ImageDropZone />
        <div>
          <Button variant={"success"} onClick={() => setShowModal(true)}>
            Save
          </Button>
          <Button variant={"danger"} onClick={() => setShowModal(true)}>
            Cancel
          </Button>
        </div>
      </AlertModal>
    </>
  );
}

export default ReservationPhoto;

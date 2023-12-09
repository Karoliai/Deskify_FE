import React from "react";
import "./Modal.css";

function AlertModal({
  children,
  isHidden,
}: {
  children: React.ReactNode[];
  isHidden: boolean;
}) {
  return (
    <div className={`alert-modal ${isHidden ? "hide" : ""}`}>{children}</div>
  );
}

export default AlertModal;

import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
// import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

export const ModalWindow = ({open, setOpen, children}) => {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sheet
        variant="plain"
        color="#0788ff"
        sx={{
          maxWidth: 500,
          minWidth: 340,
          borderRadius: "md",
          p: 3,
          //   color: 'orange',
          border: "2px solid #393636;",
          boxShadow: "lg",
          outline: "none",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        {children}
      </Sheet>
    </Modal>
  );
};

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ActionMenu({ isOpen, setIsOpen }) {
  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="lg"
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
}

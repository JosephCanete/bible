import { useState, forwardRef } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function ActionMenu({ isOpen, setIsOpen, verse }) {
  const [selected, setSelected] = useState("");

  const copyVerse = () => {
    handleClose();
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const highlightVerse = () => {
    console.log("highlight verse now");
    console.log(verse);
    //close modal
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={isOpen}
      // TransitionComponent={Transition}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        {verse && verse.book} {` `}
        {verse && verse.chapter}
        {`:`}
        {verse && verse.verseNumber}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {verse && verse.verseContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={copyVerse} color="primary">
          Copy
        </Button>
        <Button onClick={(event) => highlightVerse(event)} color="secondary">
          Highlight
        </Button>
        <Button onClick={handleClose} color="error">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

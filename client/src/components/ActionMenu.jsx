import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function ActionMenu({ isOpen, setIsOpen, verse }) {
  const copyVerse = () => {
    console.log(`Verse copied ${verse.verseContent}`);
    handleClose();
  };

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
        <Button onClick={handleClose} color="secondary">
          Highlight
        </Button>
        <Button onClick={handleClose} color="error">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

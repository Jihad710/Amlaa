import * as React from "react";

import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";

import { IoCloseSharp } from "react-icons/io5";

import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { IoSearch } from "react-icons/io5";
import { useSearchInput } from "../hooks/SearchInput";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const { searchValue, handleChange } = useSearchInput();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IoSearch onClick={handleClickOpen} className="w-6 h-6" />;
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}></AppBar>
        <div className="flex justify-end m-5">
          <IoCloseSharp
            className="text-3xl cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <div className="w-10/12 mx-auto mt-10 ">
          <input
            type="text"
            value={searchValue}
            onChange={handleChange}
            placeholder="Search..."
            className="w-full border-b-4 bg-gray-100 font-semibold text-2xl  outline-none  border-black p-5 py-3"
          />
        </div>
      </Dialog>
    </React.Fragment>
  );
}

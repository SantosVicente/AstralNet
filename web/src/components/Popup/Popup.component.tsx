'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from 'next/link';
import { Box } from '@mui/material';

interface PopupProps {
  children: React.ReactNode;
  textBody: string;
  textTitle: string;
}

export function Popup(props: PopupProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        className="btn scroll-reveal px-4 py-2 rounded-md bg-gradient-to-br from-pink-500 to-blue-500 font-rob"
        onClick={handleClickOpen}
        sx={{color: '#fff'}}
      >
        {props.children}
      </Button>
      {/*rgba(33,37,50, 0.9)*/}
      <Dialog
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'rgba(10,37,50, 0.9)',
            border: '1px solid #fff',
            color: '#fff'
           },
      }}
        fullWidth={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box>
          <DialogTitle id="alert-dialog-title">{props.textTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" className="text-slate-400">
              {props.textBody}
            </DialogContentText>
          </DialogContent>
          <Box className="flex items-center justify-between p-5">
            <Link onClick={handleClose} href="./imersive" className='px-4 py-2 transition-colors hover:bg-[rgba(53,57,70)] rounded-md'>
              <Box>Trilha Imersiva</Box>
            </Link>
            <Link onClick={handleClose} href="./static" className='px-4 py-2 transition-colors hover:bg-[rgba(53,57,70)] rounded-md'>
              <Box>Trilha Estática</Box>
            </Link>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}

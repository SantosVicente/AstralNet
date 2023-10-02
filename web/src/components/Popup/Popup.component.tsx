'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';

interface PopupProps {
  children: React.ReactNode;
  textBody: string;
  textTitle: string;
}

export function Popup(props: PopupProps) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <Box>
      <Button onPress={onOpen}>Comece Agora</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        className='bg-blue-950 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'
        classNames={{
          closeButton: 'bg-transparent text-zinc-300',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-zinc-300">{props.textTitle}</ModalHeader>
              <ModalBody>
                <p className='text-zinc-300'> 
                  {props.textBody}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button className='bg-transparent rounded-sm text-zinc-300' variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" variant="light" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
}

'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';

interface PopupProps {
  children: React.ReactNode;
  textBody: string;
  textTitle: string;
}

export function Popup(props: PopupProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Box>
      <Button
        tabIndex={-1}
        onPress={onOpen}
        className="transition-all text-zinc-200 text-base transform hover:scale-110 opacity rounded-md border border-blue-500 hover:border-pink-500"
      >
        Comece Agora
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-blue-950 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        classNames={{
          closeButton:
            'bg-transparent text-zinc-300 hover:text-zinc-800 transition-all m-1',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-zinc-300">
                {props.textTitle}
              </ModalHeader>
              <ModalBody>
                <p className="text-zinc-300">{props.textBody}</p>
              </ModalBody>
              <ModalFooter>
                <div className="flex gap-2 mt-2">
                  <Button
                    className="bg-transparent rounded-sm text-zinc-300"
                    variant="light"
                    onPress={() => (window.location.href = '/immersive')}
                  >
                    Trilha Immersive
                  </Button>

                  <Button
                    className="bg-transparent rounded-sm text-zinc-300"
                    variant="light"
                    onPress={() => (window.location.href = '/static')}
                  >
                    Trilha Static
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
}

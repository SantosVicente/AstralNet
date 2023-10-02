'use client';

import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
} from '@nextui-org/react';
import { useState } from 'react';

import './chat.css';
import { MessageSquare } from 'lucide-react';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  return (
    <>
      {!isOpen && (
        <Tooltip
          content="Histórico de Conversas"
          className="text-zinc-800 bg-yellow-50"
        >
          <div
            className="absolute top-[35%] right-6 z-[70] p-custom rounded-full hover:bg-zinc-500 hover:bg-opacity-60 cursor-pointer trasform hover:scale-110 transition-all"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <Badge content="" color="danger">
              <MessageSquare size={25} className="text-zinc-50" />
            </Badge>
          </div>
        </Tooltip>
      )}
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        radius="none"
        className="absolute top-[15%] right-0 z-[80] text-zinc-800 bg-yellow-50 rounded-custom"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

'use client';

import {
  Avatar,
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
import { MessageSquare, Send } from 'lucide-react';
import { TextField } from '@mui/material';

import pfp from '../../assets/bot.png';

type AuthorType = {
  name: String;
  avatar: String;
  identifier: String;
};

type MessageType = {
  id: number;
  backgroundID: number;
  msg: String;
  progresso: number;
  author: AuthorType;
};

interface ChatProps {
  messages: MessageType[];
  chat: AuthorType;
}

export default function Chat(props: ChatProps) {
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
        scrollBehavior="inside"
        className="absolute top-[15%] h-[40rem] right-0 z-[80] text-zinc-800 bg-gray-200 rounded-custom"
        classNames={{
          closeButton:
            'bg-transparent text-zinc-800 transition-all m-[1.30rem] hover:bg-zinc-500 hover:bg-opacity-60 hover:text-zinc-50',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-4 border-b border-zinc-500">
                <Avatar isBordered className="w-12 h-12" src={pfp.src} />
                <p className="text-lg font-alt">{props.chat.name}</p>
              </ModalHeader>
              <ModalBody className="h-[20rem] overflow-y-auto">
                {props.messages.map((message, index) => (
                  <div
                    key={index}
                    className={`${
                      message.author.identifier === 'User'
                        ? 'text-right'
                        : 'text-left'
                    } p-2`}
                  >
                    <p
                      className={`inline-block p-3 font-semibold ${
                        message.author.identifier === 'User'
                          ? 'rounded-custom-message-user'
                          : 'rounded-custom-message'
                      } max-w-xs ${
                        message.author.identifier === 'User'
                          ? 'bg-[#d7bd8d]'
                          : 'bg-zinc-50'
                      }`}
                    >
                      {message.msg}
                    </p>
                  </div>
                ))}
              </ModalBody>
              <ModalFooter className="border-t border-zinc-500">
                <TextField
                  placeholder="Clique para digitar..."
                  variant="outlined"
                  disabled
                  className="w-full text-zinc-800 transition-all border-indigo-800"
                  sx={{
                    border: '1px solid rgb(30 27 75)',
                    borderRadius: '0.375rem',
                  }}
                />
                <Button
                  isIconOnly
                  color="primary"
                  aria-label="Like"
                  className="w-16 h-auto"
                >
                  <Send size={25} />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

'use client';

import { AuthContext } from '@/contexts/Auth/authContext';
import { useContext, useEffect, useState } from 'react';

import background from '../../../assets/1311860.jpeg';
import { Box } from '@mui/material';
import Chat from '@/components/Chat/Chat.component';
import Loading from '@/components/Loading/Loading.component';
import Image from 'next/image';
import Pane from '@/components/Pane/Pane.component';

import '../immersive.css';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import Link from 'next/link';

export default function BlackHole() {
  const auth = useContext(AuthContext);

  const backgrounds = [{ id: 1, url: { background } }];

  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      backgroundID: 1,
      msg: 'Ufa... Finalmente chegamos, viagens interestelares sempre são cansativas. Cof... cof... Bem, viajante, esse gigante bem a sua frente é ninguém mais, ninguém menos do que o próprio Psycho E*. Ele é incrível não é mesmo?',
      progresso: 1,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 2,
      backgroundID: 1,
      msg: 'Realmente... Ele é lindo. Han, mas o que seriam esses anéis em volta dele? Acho que consigo ver algumas pedras flutuando por lá.',
      progresso: 1,
      author: {
        name: `${auth.user?.name || 'Viajante'}`,
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 3,
      backgroundID: 1,
      msg: 'Oh, boa observação, essas pedras e poeiras não são nada mais, nada menos do que a matéria que está orbitando esse gigante.',
      progresso: 1,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 4,
      backgroundID: 1,
      msg: "Vamos falar um pouco mais sobre buracos negros, viajante. Eles são fenômenos fascinantes no universo. Um buraco negro é uma região que tem uma gravidade tão intensa que nada, nem mesmo a luz, pode escapar dela. É daí que vem o nome 'buraco negro', porque ele parece um orbe negro que absorve a luz.",
      progresso: 1,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 5,
      backgroundID: 1,
      msg: "Os buracos negros são objetos que podem ser orbitados, como esses anéis de luz que você vê em torno do Psycho E*. A matéria que orbita um buraco negro é aquela que não foi engolida por ele. Além disso, a 'coroa' que circunda o buraco negro é composta por fótons que são particulas de luz que não caíram nele e estão em órbita, mantendo uma relação gravitacional complexa.",
      progresso: 1,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 6,
      backgroundID: 1,
      msg: 'Acho que entendi, mas Emi, afinal como os buracos negros se formam?',
      progresso: 1,
      author: {
        name: `${auth.user?.name || 'Viajante'}`,
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 7,
      backgroundID: 1,
      msg: 'Excelente pergunta, viajante! Buracos negros são o resultado da morte de estrelas com muita massa. Eles se formam quando uma estrela, que deve possuir muito mais massa do que a massa do Sol, explodem e aquilo que sobra delas não consegue suportar o próprio peso e não consegue controlar sua pressão itnerna.',
      progresso: 1,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 8,
      backgroundID: 1,
      msg: 'Essa pressão interna é o que mantém uma estrela em equilíbrio durante sua vida, mas quando a estrela esgota seu combustível nuclear, ela não consegue mais sustentar essa pressão. O resultado é um colapso gravitacional que forma um buraco negro, onde a matéria se concentra em um espaço incrivelmente pequeno.',
      progresso: 1,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 9,
      backgroundID: 1,
      msg: 'E o que torna os buracos negros tão especiais além de sua gravidade intensa?',
      progresso: 1,
      author: {
        name: `${auth.user?.name || 'Viajante'}`,
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 10,
      backgroundID: 1,
      msg: 'Uma das características únicas dos buracos negros é sua densidade extrema. A gravidade intensa é o resultado da concentração de massa em um espaço extremamente pequeno, fazendo com que a densidade seja incrivelmente alta. Seu volume tende a zero, e a densidade tende ao infinito.',
      progresso: 1,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 11,
      backgroundID: 1,
      msg: 'Outra característica importante é o horizonte de eventos, que é uma fronteira invisível ao redor do buraco negro. Uma vez que algo ultrapasse o horizonte de eventos, não pode mais escapar da atração gravitacional do buraco negro e está destinado a cair nele.',
      progresso: 1,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 12,
      backgroundID: 1,
      msg: 'O que aconteceria se alguém caísse em um buraco negro?',
      progresso: 1,
      author: {
        name: `${auth.user?.name || 'Viajante'}`,
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 13,
      backgroundID: 1,
      msg: "Se alguém caísse em um buraco negro, experimentaria algo chamado 'espaguetificação'. A gravidade extremamente intensa faria com que a pessoa fosse esticada em direção ao buraco negro, como um espaguete, devido às forças de maré gravitacionais.",
      progresso: 1,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 14,
      backgroundID: 1,
      msg: 'Além disso, a radiação Hawking gradualmente evaporaria o corpo da pessoa, assim como ela evapora o próprio buraco negro. É um processo complexo e fascinante.',
      progresso: 1,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 15,
      backgroundID: 1,
      msg: 'E se alguém estivesse observando isso de fora? Ele poderia ver essa pessoa caindo no buraco negro?',
      progresso: 1,
      author: {
        name: `${auth.user?.name || 'Viajante'}`,
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 16,
      backgroundID: 1,
      msg: 'Quando alguém cai em um buraco negro, o horizonte de eventos o envolve, tornando-o invisível para observadores externos. A luz emitida por essa pessoa seria extremamente deslocada para o vermelho devido à distroção do espaço-tempo, tornando-a invisível. Isso faz com que não possamos mais ver ou interagir com quem caiu no buraco negro.',
      progresso: 1,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 17,
      backgroundID: 1,
      msg: 'Ao que parece, seus pais queriam vir para cá para estudar o comportamento desse gigante. Ultimamente ele andou emitindo alguns sinais de radiação meio estranhos... Por isso achei uma boa procurá-los aqui, mas parece que não tivemos resultas... Me desculpe',
      progresso: 1,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 18,
      backgroundID: 1,
      msg: 'Não se preocupe... Foi um bom palpite, o importante agora é seguir com a cabeça erguida, vamos seguir em frente!',
      progresso: 1,
      author: {
        name: `${auth.user?.name || 'Viajante'}`,
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 19,
      backgroundID: 1,
      msg: 'Tudo bem... Sendo assim, acho melhor voltarmos ao painel e procurarmos em outro lugar...',
      progresso: 1,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
  ]);

  const [mensagemAtual, setMensagemAtual] = useState('');
  const [indiceMensagem, setIndiceMensagem] = useState(0);
  const [typing, setTyping] = useState(true);
  const [backgroundIndex, setBackgroundIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [progresso, setProgresso] = useState(0);
  const [pane, setPane] = useState(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden-body');

    return () => {
      document.body.classList.remove('overflow-hidden-body');
    };
  }, []);

  useEffect(() => {
    if (mensagens[indiceMensagem].backgroundID != backgroundIndex) {
      setBackgroundIndex(mensagens[indiceMensagem].backgroundID);
    }
  }, [indiceMensagem, backgroundIndex, mensagens]);

  useEffect(() => {
    if (typing) {
      const currentPhrase = mensagens[indiceMensagem].msg;
      const textLength = mensagemAtual.length;

      if (textLength < currentPhrase.length) {
        const timeoutId = setTimeout(() => {
          setMensagemAtual(currentPhrase.substring(0, textLength + 1));
        }, 50); // Velocidade de digitação, você pode ajustar isso

        return () => clearTimeout(timeoutId);
      } else {
        setTyping(false);
      }
    } else {
      setMensagemAtual('');
    }
  }, [mensagemAtual, mensagens, indiceMensagem, typing]);

  useEffect(() => {
    const divLoading = document.getElementById('loading-div');
    if (progresso >= 100) {
      divLoading?.classList.add('fade-out');
      setPane(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [progresso, setLoading, setPane]);

  const handleDivClick = () => {
    if (typing) {
      //se mensagemAtual ainda tiver digitando, exiba a frase inteira
      setMensagemAtual(mensagens[indiceMensagem].msg);
      setTyping(false);
    } else {
      // Vá para a próxima frase ou reinicie
      if (indiceMensagem < mensagens.length - 1) {
        setIndiceMensagem(indiceMensagem + 1);
        setTyping(true);
      } else {
        setOpenAlert(true);
        //setLoading(true);
      }
    }
  };

  const author = {
    name: 'Emi',
    avatar: '',
    identifier: 'Emi',
  };

  return (
    <Box className="w-screen h-screen relative overflow-hidden">
      {!loading && <Chat messages={mensagens} chat={author} />}

      {!!loading ? (
        <div
          className="absolute top-0 left-0 h-screen w-screen bg-zinc-900 fade-in z-[50]"
          id="loading-div"
        >
          <Loading value={progresso} setValue={setProgresso} />
        </div>
      ) : !loading && !pane ? (
        <>
          <Image
            src={backgroundIndex == 1 ? background : background}
            alt="background"
            className="absolute top-0 left-0 -z-9 w-full h-full object-cover"
          />
          <Box
            className={`w-screen h-screen bg${backgroundIndex} z-40 flex items-end overflow-hidden`}
          >
            <Box
              className="h-[15rem] w-full m-3 bg-opacity-80 bg-black text-white p-2 rounded-xl cursor-pointer border border-red-500"
              onClick={handleDivClick}
            >
              <h1 className="m-4 font-alt text-xl select-none font-bold text-red-500">
                {mensagens[indiceMensagem].author.name}
              </h1>
              <p className="m-4 font-alt text-3xl select-none">
                {typing ? mensagemAtual : mensagens[indiceMensagem].msg}
              </p>
            </Box>
          </Box>
          <Modal
            isOpen={openAlert}
            backdrop="blur"
            onClose={() => setOpenAlert(false)}
            radius="none"
            scrollBehavior="inside"
            className="absolute top-[35%] z-[80] rounded-md text-zinc-800 bg-gray-200"
            classNames={{
              closeButton:
                'bg-transparent text-zinc-800 transition-all m-4 hover:bg-zinc-500 hover:bg-opacity-60 hover:text-zinc-50',
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Espere ai!
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Antes de continuar, caso queira revisar conceitos sobre
                      Buracos negros vá até os <span>arquivos</span> e veja mais
                      sobre esses astros incríveis!
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="danger"
                      variant="light"
                      onPress={() =>
                        (window.location.href = '/static/black-hole')
                      }
                    >
                      Ir para Arquivos
                    </Button>
                    <Button
                      color="primary"
                      variant="light"
                      onPress={() => setLoading(true)}
                    >
                      Ir ao Painel
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      ) : (
        !!loading ||
        (!!pane && (
          <Box className="absolute top-0 left-0 w-screen h-screen fade-in">
            <Pane />
          </Box>
        ))
      )}
    </Box>
  );
}

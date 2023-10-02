'use client';

import { Box } from '@mui/material';

import { useContext, useEffect, useState } from 'react';
import background from '../../assets/1311860.jpeg';
import Loading from '../../components/Loading/Loading.component';
import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation'; //import das setas
import 'swiper/css/pagination'; //import da paginação
import 'swiper/css/scrollbar'; //import da scrollbar
import 'swiper/css/effect-coverflow';
import { setTimeout } from 'timers';

import './immersive.css';
import Image from 'next/image';
import background1 from '../../assets/aerospace.png';
import Pane from '../../components/Pane/Pane.component';
import Chat from '../../components/Chat/Chat.component';
import { AuthContext } from '@/contexts/Auth/authContext';

export default function Immersive() {
  const auth = useContext(AuthContext);

  const backgrounds = [{ id: 1, url: { background } }];

  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      backgroundID: 1,
      msg: 'Hmm. Onde... onde estou? Que lugar é esse? Minha cabeça dói muito.',
      progresso: 0,
      author: {
        name: 'Viajante',
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 2,
      backgroundID: 1,
      msg: 'Eu... sinto que conheço este lugar, mas ainda assim tudo parece muito vago. Afinal, quem eu sou?',
      progresso: 0,
      author: {
        name: 'Viajante',
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 3,
      backgroundID: 1,
      msg: 'Ligando sistemas... Iniciando protocolos... Carregando... 25%... 40%... 85%... 100%',
      progresso: 0,
      author: {
        name: '???',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 4,
      backgroundID: 1,
      msg: 'Hã? O que está acontecendo? Que voz é essa?',
      progresso: 0,
      author: {
        name: 'Viajante',
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 5,
      backgroundID: 1,
      msg: 'Bom dia, agora os sitemas da nave estão em operação novamente, seja bem vindo de novo viajante.',
      progresso: 0,
      author: {
        name: '???',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 6,
      backgroundID: 1,
      msg: 'O que? Espere ai, quem é você?',
      progresso: 0,
      author: {
        name: 'Viajante',
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 7,
      backgroundID: 1,
      msg: `Me chamo Emi, sou o sistema principal da Nave Espacial AstralNET, esta que pertence a você e aos seus pais. Ao que parece, você sofreu uma perda de memória durante o período de suspensão da nave. Seu nome é ${
        auth.user?.name || 'Viajante'
      }`,
      progresso: 0,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 8,
      backgroundID: 1,
      msg: 'Meus pais... É verdade, eu lembro deles. Mas... onde estão?',
      progresso: 0,
      author: {
        name: `${auth.user?.name || 'Viajante'}`,
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 9,
      backgroundID: 2,
      msg: 'Infelizmente sofremos um ataque enquanto estávamos a caminho de explorar os arredores do buraco negro Psycho E*, e com isso a nave entrou em estado de suspensão. Quando reativada, seus pais não estavam mais a bordo.',
      progresso: 0,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 10,
      backgroundID: 2,
      msg: 'Buraco negro... Ataque... Então isso quer dizer que meus pais foram raptados?',
      progresso: 0,
      author: {
        name: `${auth.user?.name || 'Viajante'}`,
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 11,
      backgroundID: 2,
      msg: 'Não sei lhe dizer ao certo, fiquei inoperante durante o ocorrido, mas creio que tenha sido isso.',
      progresso: 0,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 12,
      backgroundID: 2,
      msg: 'Em que ano nós estamos?',
      progresso: 0,
      author: {
        name: `${auth.user?.name || 'Viajante'}`,
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 13,
      backgroundID: 2,
      msg: 'Estamos no ano 2367. A exploração espacial tornou-se comum e a humanidade viaja livremente entre as estrelas.',
      progresso: 0,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 14,
      backgroundID: 2,
      msg: '2367... Tudo parece tão avançado. Mas isso não importa, Emi, eu preciso encontrar meus pais.',
      progresso: 0,
      author: {
        name: `${auth.user?.name || 'Viajante'}`,
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 15,
      backgroundID: 2,
      msg: 'Entendo sua preocupação. Temos dois problemas principais a lidar, sua perda de memória e achar seus pais. Não temos tempo a perder, vamos nessa.',
      progresso: 0,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 16,
      backgroundID: 2,
      msg: 'Obrigado, Emi. Eu farei de tudo para descobrir o que aconteceu com meus pais e trazê-los de volta.',
      progresso: 0,
      author: {
        name: `${auth.user?.name || 'Viajante'}`,
        avatar: '',
        identifier: 'User',
      },
    },
    {
      id: 17,
      backgroundID: 2,
      msg: 'Isso é ótimo, viajante. Então acho que para começar a busca devemos ir em direção ao Psycho E*, já que esse era nosso destino original, podemos acabar achando pistas por lá. Vá até o painel de controle e selecione nosso destino!',
      progresso: 0,
      author: {
        name: 'Emi',
        avatar: '',
        identifier: 'Emi',
      },
    },
    {
      id: 18,
      backgroundID: 2,
      msg: 'Me leve até ele!',
      progresso: 0,
      author: {
        name: `${auth.user?.name || 'Viajante'}`,
        avatar: '',
        identifier: 'User',
      },
    },
  ]);

  const [mensagemAtual, setMensagemAtual] = useState('');
  const [indiceMensagem, setIndiceMensagem] = useState(0);
  const [typing, setTyping] = useState(true);
  const [backgroundIndex, setBackgroundIndex] = useState(1);
  const [loading, setLoading] = useState(false);
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
        setLoading(true);
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
            src={backgroundIndex == 1 ? background1 : background1}
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

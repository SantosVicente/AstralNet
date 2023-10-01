import { Box } from '@mui/material';
import { FolderLock } from 'lucide-react';

interface props {
  section: string;
}

export function BlockedCard(props: props) {
  return (
    <Box className="border-card2 2xl:scale-90 border border-zinc-600 rounded-md px-10 flex flex-col items-center justify-center w-[25rem] h-[25rem] transition-colors text-zinc-400 hover:text-zinc-50 card-bg">
      <div className="break-words flex flex-col items-center justify-center">
        <FolderLock className="text-red-500" size={60} />
        <h1 className="text-3xl font-bold font-alt text-zinc-300 mt-2">
          Alerta!
        </h1>
        <h1 className="text-center text-xl font-bold font-alt text-zinc-300 mt-2">
          A sessão {props.section} ainda não está disponível
        </h1>
      </div>
    </Box>
  );
}

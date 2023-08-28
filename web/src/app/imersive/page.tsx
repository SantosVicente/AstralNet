import { Card } from "@/components/Card/Card.component";
import { Box, Button, Typography } from "@mui/material";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Link from "next/link";

export default function Imersive() {
  return (
    <Box className="pt-16 flex flex-col items-center h-screen justify-center">
      <Box className="mb-11 flex gap-10 w-screen items-center justify-center">
        <Box className="border-card2 border border-zinc-600 rounded-md flex w-[25%] h-[4.5rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5 items-center justify-center" />
        <Box className="border-card2 border border-zinc-600 rounded-md flex px-[1rem] pb-[1rem] pt-[1.5rem] transition-colors text-zinc-100 bg-zinc-50 bg-opacity-5 items-center justify-center">
          <Typography variant="h4">Escolha seu Próximo Destino</Typography>
        </Box>
        <Box className="border-card2 border border-zinc-600 rounded-md flex w-[25%] h-[4.5rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5 items-center justify-center" />
      </Box>
      <Box className="flex gap-10 items-center">
        <Link href="./imersive" className="border-card2 border border-zinc-600 rounded-md flex w-[7rem] h-[15rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5 items-center justify-center">
          <ArrowBigLeft size={60} />
        </Link>
        <Box className="flex gap-10">
          <Box className="scale-75">
            <Card title="Card 1" description="Conteudo do Card 1" link="./imersive" />
          </Box>
          <Box>
            <Card title="Card 2" description="Conteudo do Card 2" link="./imersive" />
          </Box>
          <Box className="scale-75">
            <Card title="Card 3" description="Conteudo do Card 3" link="./imersive" />
          </Box>
        </Box>
        <Link href="./imersive" className="border-card2 border border-zinc-600 rounded-md flex w-[7rem] h-[15rem] transition-colors text-zinc-400 hover:text-zinc-50 bg-zinc-50 bg-opacity-5 items-center justify-center">
          <ArrowBigRight size={60} />
        </Link>
      </Box>
      <Button className="text-white border border-zinc-600 mt-11 p-10 text-2xl rounded-lg font-alt hover:font-bold hover:border-zinc-200" variant="outlined">Selecionar Destino</Button>
    </Box>
  );
}

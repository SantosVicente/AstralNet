import { Box, Typography } from '@mui/material';
import { AlertTriangle } from 'lucide-react';

export default function UniverseScale() {
  return (
    <div className="pt-16 flex items-center h-screen justify-center">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <AlertTriangle size={70} className="text-red-500" />
        <Typography variant="h4" className="font-alt font-bold">
          Página em Construção
        </Typography>
        <Typography variant="h6" className="font-alt text-center">
          A sessão de Universo em Escala ainda está em construção. Por favor,
          volte mais tarde
          <br /> para aproveitar a versão atual.
        </Typography>
      </Box>
    </div>
  );
}

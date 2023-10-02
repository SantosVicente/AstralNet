import { Box } from '@mui/material';
import Link from 'next/link';

interface CardProps {
  title?: string;
  description: string;
  icon?: any;
  link?: string;
}

export function Card(props: CardProps) {
  return (
    <>
      {!props.link ? (
        <Box
          className={`border-card2 2xl:scale-90 border border-zinc-600 rounded-md px-10 flex flex-col w-[25rem] h-[25rem] transition-colors text-zinc-400 hover:text-zinc-50 card-bg`}
        >
          {props.icon}
          <div className="mt-4 break-words">
            <h1 className="text-3xl font-bold font-alt text-zinc-300">
              {props.title}
            </h1>

            <div className="flex gap-1">
              <p className="mt-7 max-w-full">{props.description}</p>
            </div>
          </div>
        </Box>
      ) : (
        <Link
          tabIndex={-1}
          href={props.link}
          className={`border-card2 2xl:scale-90 border border-zinc-600 rounded-md px-10 flex flex-col w-[25rem] h-[25rem] transition-colors text-zinc-400 hover:text-zinc-50 card-bg`}
        >
          {props.icon}
          <div className="mt-4 break-words">
            <h1 className="text-3xl font-bold font-alt text-zinc-300">
              {props.title}
            </h1>

            <div className="flex gap-1">
              <p className="mt-7 max-w-full">{props.description}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

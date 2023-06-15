import Link from 'next/link';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div
      className="border-t border-zinc-700 flex-col pt-24 gap-8 flex items-center justify-center overflow-hidden"
    >
      <div>

        <h1>João Vitor</h1>
      </div>
      <div>

        <h1>Matheus Rodrigues</h1>
      </div>
      <div>

        <h1>Vicente Santos</h1>
      </div>
    </div>
  );
}

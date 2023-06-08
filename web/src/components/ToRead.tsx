import Image from 'next/image';
import Balance from 'react-wrap-balancer';
import Webb from '../assets/webb.png';
import ScrollAnimation from '../scrolls/ScrollReveal';

export default function ToRead() {
  return (
    <div className="flex items-center justify-center gap-36">
      <div className="flex flex-col gap-8 max-w-3xl text-justify">
        <ScrollAnimation delay={0} duration={0.7} y={50}>
          <h1 className="text-4xl font-alt font-bold">TYPE SOME TITLE</h1>
        </ScrollAnimation>
        <h2 className="text-xl font-thin">
          <ScrollAnimation delay={0.1} duration={0.7} y={50}>
            <Balance>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              explicabo neque a omnis voluptates veritatis tenetur porro, esse
              eligendi voluptatem, quod nobis consequatur accusantium provident
              vel sapiente quas repellat unde ipsum dolor sit amet consectetur
              adipisicing elit. Eum explicabo neque a omnis voluptates veritatis
              tenetur porro, esse eligendi voluptatem, quod nobis consequatur
              accusantium provident vel sapiente quas repellat unde ipsum dolor
              sit amet consectetur adipisicing elit. Eum explicabo neque a omnis
              voluptates veritatis tenetur porro, esse eligendi voluptatem, quod
              nobis consequatur accusantium provident vel sapiente quas repellat
              unde!
            </Balance>
          </ScrollAnimation>
        </h2>
      </div>
      <ScrollAnimation delay={0} duration={0.7} y={50}>
        <Image src={Webb} alt="" className="w-full" />
      </ScrollAnimation>
    </div>
  );
}

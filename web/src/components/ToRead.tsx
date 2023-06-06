import Image from "next/image";
import Balance from "react-wrap-balancer";
import Webb from "../assets/webb.png";

export default function ToRead() {
  return (
    <div className="flex items-center justify-center gap-36">
      <div className="flex flex-col gap-8 max-w-3xl text-justify">
        <h1 className="text-4xl font-alt">TYPE SOME TITLE</h1>
        <h2 className="text-xl font-thin">
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
        </h2>
      </div>
      <Image src={Webb} alt="" className="w-[38%]"></Image>
    </div>
  );
}

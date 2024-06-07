import Marquee from "react-fast-marquee";

export default function Banner() {
  return (
    <>
      <div className="border-y-2 border-negro">
        <Marquee gradient={false} speed={140}>
            <Carrousell image="CUBE.svg" text="LET'S WORK!" />
            <Carrousell image="CUBE.svg" text="LET'S WORK!" />
            <Carrousell image="CUBE.svg" text="LET'S WORK!" />
            <Carrousell image="CUBE.svg" text="LET'S WORK!" />
            <Carrousell image="CUBE.svg" text="LET'S WORK!" />
        </Marquee>
      </div>
    </>
  );
}

function Carrousell({ image, text }: { image: string; text: string }) {
    return (
        <div className="bg-white text-[#0C0C0C] flex flex-row items-center gap-4 p-2 ">
        <img src={image} />
        <h1 className="text-[80px] font-medium">{text}</h1>
        </div>
    );
}

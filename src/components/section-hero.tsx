import Image from "next/image";
import { GridContainer } from "./grid";

import IconFile from "/public/icon-file.svg";
import IconHand from "/public/icon-hand.svg";
import IconHand02 from "/public/icon-hand-02.svg";
import IconMockup from "/public/mockup.svg";

export function SectionHero() {
  return (
    <section className=" relative w-full h-section-hero bg-hero bg-no-repeat bg-green-primary bg-top border-t border-t-green-border pt-16 overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div className="w-full max-w-text-hero text-center">
          <h3 className="text-xl font-medium text-green-actived mb-4">
            Novo Curso focado em Instagram
          </h3>
          <h1 className="text-white text-7xl/normal font-semibold mb-2">
            Destrave as suas habilidades
          </h1>
          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-2 ">
              <Image src={IconFile} alt="Icone file" />
              <span className="text-white font-medium">
                Assinar a lista de espera
              </span>
            </button>
            <button className="py-4 px-5 bg-green-btn rounded-full text-green-primary font-bold">
              Começar agora
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-area-icons h-28 mt-4">
          <Image
            src={IconHand}
            alt="Icon hand"
            className="absolute left-0 bottom-0"
          />
          <Image
            src={IconHand02}
            alt="Icon Hand02"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
          <Image
            src={IconMockup}
            alt="Mockup"
            className="relative -rotate-12 top-[18px] left-[53px]"
          />
          <Image
            src={IconMockup}
            alt="Mockup"
            className="relative rotate-12 top-[18px] right-[53px]"
          />
        </div>
      </GridContainer>
    </section>
  );
}

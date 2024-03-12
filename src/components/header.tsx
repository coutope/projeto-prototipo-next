import Image from "next/image";
import Link from "next/link";

import LogoImg from "/public/logo.svg";
import SearchIcon from "/public/icon-search.svg";
import IconUser from "/public/icon-user.svg";
import { GridContainer } from "./grid";

const arrayMenu = ["Inicio", "Formação", "Curso", "Sobre nós"];

export function Header() {
  const activedStyle = "bg-green-actived rounded-full text-opacity-100";
  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image src={LogoImg} alt="Logo" />
        <div className="flex items-center gap-20">
          <nav className="flex gap-2">
            {arrayMenu.map((item, index) => (
              <Link
                key={index}
                href="#"
                className={`px-3 py-8 text-white houver:text-opacity-100 transition-all
                                ${index === 0 ? activedStyle : ""}`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex-items-center gap-6">
            <button>
              <Image src={SearchIcon} alt="Icone de pesquisa" />
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}

"use client";
import Image from "next/image";

import { useState } from "react";

import Link from "next/link";

import { Link as LinkScroll } from "react-scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="z-50 p-4 sticky top-0 bg-black bg-opacity-70 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="cursor-pointer ">
          <Link href="/">
            <Image
              src="/logoCorpore.png"
              alt="Logo"
              width={500}
              height={500}
              className="w-12 sm:w-56"
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <div
            className={`fixed top-0 left-0 right-0 bottom-0 z-30 bg-black opacity-50 ${
              isOpen ? "block" : "hidden"
            }`}
            onClick={toggleMenu}
          ></div>
          <div
            className={`fixed top-0 right-0 bottom-0 bg-zinc-950 z-40 w-64 transform transition-transform ease-in-out duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="p-8 space-y-2 text-lg uppercase">
              <li className="cursor-pointer text-[#f2e61e] font-medium duration-300">
                <Link href="/" onClick={toggleMenu}>
                  Página Inicial
                </Link>
              </li>
              <li className="cursor-pointer text-[#f2e61e] font-medium duration-300">
                <LinkScroll smooth={true} to="SobreNos" onClick={toggleMenu}>
                  Sobre Nós
                </LinkScroll>
              </li>
              <li className="cursor-pointer text-[#f2e61e] font-medium duration-300">
                <LinkScroll
                  smooth={true}
                  onClick={toggleMenu}
                  to="NossoEspaco"
                >
                  Nosso Espaço
                </LinkScroll>
              </li>
              <li className="cursor-pointer text-[#f2e61e] font-medium duration-300">
                <LinkScroll
                  smooth={true}
                  onClick={toggleMenu}
                  to="Modalidades"
                >
                  Modalidades
                </LinkScroll>
              </li>
              <li className="cursor-pointer text-[#f2e61e] font-medium duration-300">
                <LinkScroll
                  smooth={true}
                  onClick={toggleMenu}
                  to="Mensalidades"
                >
                  Mensalidades
                </LinkScroll>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-12 font-medium text-center items-center text-lg">
            <li className="cursor-pointer font-bold hover:text-[#f2e61e] duration-300">
              <Link href="/">Página Inicial</Link>
            </li>
            <li className="cursor-pointer font-bold hover:text-[#f2e61e] duration-300">
              <LinkScroll smooth={true} to="SobreNos">
                Sobre Nós
              </LinkScroll>
            </li>
            <li className="cursor-pointer font-bold hover:text-[#f2e61e] duration-300">
              <LinkScroll smooth={true} to="NossoEspaco">
                Nosso Espaço
              </LinkScroll>
            </li>
            <li className="cursor-pointer font-bold hover:text-[#f2e61e] duration-300">
              <LinkScroll smooth={true} to="Modalidades">
                Modalidades
              </LinkScroll>
            </li>
            <li className="cursor-pointer font-bold hover:text-[#f2e61e] duration-300">
              <LinkScroll smooth={true} to="Mensalidades">
                Mensalidades
              </LinkScroll>
            </li>
          </ul>
        </div>
        <div className="hamburger lg:hidden" onClick={toggleMenu}>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </div>
      </div>
    </section>
  );
}

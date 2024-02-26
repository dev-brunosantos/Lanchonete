import Image from "next/image";
import { Menu } from "@/components/Menu";
import { motion } from 'framer-motion';
import Link from "next/link";
import { Cores } from "@/components/Cores";
import { useState } from "react";

export default function Home() {

  const [teste, setTeste] = useState(0)
  window.addEventListener("scroll", abrirTela)
  function abrirTela() {
    if(window.pageYOffset > 550 && window.pageYOffset < 1700) {
      return setTeste(1)
    }
    return setTeste(0)
  }

  return (
    <>
      <Menu />
      <main className="relative">


        <section className="flex home">
          <div className="w-[50%] h-[100vh] flex items-center justify-center flex-col">
            <motion.h1
              className="text-[2rem] text-center text-white font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Bem vindo ao <span className="text-[3rem] text-[black]  "> Burger Mania</span>
            </motion.h1>

            <motion.p className="text-[1.4rem] mt-5 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Veja nossos deliciosos lanches no
              {/* <span className="text-yellow-500"> */}
              <span className="text-[black] font-bold">
                <Link href={'cardapio'} > Cardápio</Link>
              </span>
            </motion.p>
          </div>

          <div className="w-[50%] h-[100vh] flex items-center relative">
            <motion.div
              initial={{ position: "absolute", left: "100%" }}
              animate={{ position: "absolute", left: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Image src={require('../../public/lanche2.png')} alt="" width={1000} />
            </motion.div>
          </div>
        </section>

        <section>
          <div className="w-[100%] h-[50vh] ">
            <div className="parallax">
              {/* <div className="w-[100%] h-[100%] bg-[#1515156a]"></div> */}
              <div className="w-[100%] h-[100%] bg-[#dc75106b]"></div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="w-[100%] h-[100vh] z-[990] ">
            
          </div>
        </section>
        
        <section>
          <motion.div className="w-[100%] h-[100vh] z-[990] sobre" 
            initial={{ opacity: teste }}
            animate={{ opacity: teste }}
            transition={{duration: 0.3}}
          >
            s
          </motion.div>
        </section>

        <section>
          <div className="w-[100%] h-[100vh] z-[990] bg-[#dc75106b]">
            
          </div>
        </section>
        


      </main>
    </>
  );
}

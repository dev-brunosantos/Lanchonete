import Image from "next/image";
import { Menu } from "@/components/Menu";
import { motion } from 'framer-motion';
import Link from "next/link";
import { Cores } from "@/components/Cores";

export default function Home() {
  return (
    <>
      <Menu />
      <main>
        <section className="flex home">
          <div className="w-[50%] h-[100vh] flex items-center justify-center flex-col">
            <motion.h1
              className="text-[2rem] text-center text-white font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Bem vindo ao <span className="text-[3rem] text-[black]  "> Burger Mania</span>
            </motion.h1>

            <motion.p className="text-[1.4rem] mt-5 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
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
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Image src={require('../../public/lanche2.png')} alt="" width={1000} />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

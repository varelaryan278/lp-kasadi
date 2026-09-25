import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Ambientes } from "./_components/Ambientes";
import { Processo } from "./_components/Processo";
import { Fabrica } from "./_components/Fabrica";
import { Orcamento } from "./_components/Orcamento";
import { Showroom } from "./_components/Showroom";
import { Footer } from "./_components/Footer";
import { JsonLd } from "./_components/JsonLd";
import { WhatsappFlutuante } from "./_components/WhatsappFlutuante";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Ambientes />
        <Processo />
        <Fabrica />
        <Orcamento />
        <Showroom />
      </main>
      <Footer />
      <WhatsappFlutuante />
    </>
  );
}

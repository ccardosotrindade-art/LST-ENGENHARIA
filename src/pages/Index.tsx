import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  Building2,
  ClipboardCheck,
  HardHat,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Clock,
  Share2,
  CheckCircle2,
  FileText,
  Layers,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "5547991919790";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de solicitar uma consultoria para meu projeto."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

function whatsapp(msg?: string) {
  const text = msg
    ? encodeURIComponent(msg)
    : WHATSAPP_MSG;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const SERVICES = [
  {
    icon: <LayoutDashboard size={28} />,
    title: "Projeto Arquitetônico",
    description:
      "Desenvolvemos projetos arquitetônicos e técnicos, alinhados com as expectativas e necessidades de cada cliente, visando bem estar e segurança, sem deixar de lado as normas vigentes.",
    cta: "Solicitar Orçamento",
  },
  {
    icon: <FileText size={28} />,
    title: "Aprovação de Projetos",
    description:
      "Gerenciamos todo o trâmite burocrático junto às prefeituras e órgãos competentes em Santa Catarina, garantindo aprovação ágil e sem contratempos jurídicos.",
    cta: "Solicitar Orçamento",
  },
  {
    icon: <ClipboardCheck size={28} />,
    title: "Regularização Imobiliária",
    description:
      "Levantamento, documentação e regularização completa do imóvel, assegurando conformidade normativa e segurança jurídica ao seu patrimônio.",
    cta: "Solicitar Orçamento",
  },
  {
    icon: <HardHat size={28} />,
    title: "Gerenciamento de Obras",
    description:
      "Acompanhamento técnico rigoroso, eliminando as dores de cabeça com desperdício de materiais e falhas de execução, fazendo do canteiro de obra um lugar de realização de sonho e satisfação.",
    cta: "Solicitar Orçamento",
  },
];

const DIFFERENTIALS = [
  {
    icon: <Layers size={24} />,
    title: "Gestão Centralizada",
    text: "Integramos projeto, aprovação documental e execução em um único ponto de contato, eliminando lacunas e retrabalhos.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Conformidade Normativa Total",
    text: "Conhecemos a legislação municipal de Corupá e de todo o estado de Santa Catarina, garantindo que cada detalhe técnico esteja em conformidade com as normas vigentes.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Economia Inteligente",
    text: "Nossa assessoria técnica reduz o desperdício de materiais e evita retrabalhos, gerando economia real ao longo da obra.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Valorização Patrimonial",
    text: "Edificações regularizadas e tecnicamente sólidas têm maior valor de mercado e facilitam financiamentos e negociações.",
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: "Segurança Jurídica",
    text: "Documentação correta desde o início previne multas, embargos e futuras complicações legais com o imóvel.",
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "Transparência em Cada Etapa",
    text: "Você recebe relatórios técnicos e acompanhamento contínuo, sabendo exatamente o status do seu projeto a qualquer momento.",
  },
];



function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#4a5859]/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 select-none">
          <img
            src="https://hercules-cdn.com/file_2LBxD0Qp0OzTdPrh4b9d26fs"
            alt="LST Engenheira Civil — Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="leading-tight">
            <p className="font-black text-sm tracking-widest text-[#0f1416] uppercase">
              LST
            </p>
            <p className="font-medium text-[10px] tracking-widest text-[#4a5859] uppercase -mt-0.5">
              Engenheira Civil
            </p>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-semibold text-[#0f1416]/70 hover:text-[#4a5859] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#4a5859] text-white text-sm font-bold hover:bg-[#0f1416] transition-colors"
          aria-label="Fale conosco pelo WhatsApp"
        >
          Fale Conosco
        </a>

        <button
          className="md:hidden p-1 text-[#0f1416]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-[#4a5859]/10 overflow-hidden"
          >
            <ul className="px-5 py-4 space-y-4">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="block text-sm font-semibold text-[#0f1416]/80 hover:text-[#4a5859]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 rounded-sm bg-[#4a5859] text-white text-sm font-bold"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f1416]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1565118387387-add70a563efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzIwMTN8MHwxfHNlYXJjaHw0fHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9uJTIwcHJvZmVzc2lvbmFsJTIwQnJhemlsfGVufDB8fHx8MTc4NTI2NjIxNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Engenharia civil em ação — construção profissional"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1416]/95 via-[#0f1416]/70 to-[#0f1416]/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-32 md:py-0 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4a5859]/30 border border-[#4a5859]/50 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4a5859] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-[#808080] uppercase">
              Corupá · SC — Santa Catarina
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] text-balance mb-6"
          >
            Transformando{" "}
            <span className="text-[#4a5859]">seu sonho em realidade</span>,
            com transparência e segurança.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg space-y-4"
          >
            <p>
              Do projeto à realização da sua obra, ajudamos você a transformar suas ideias em um imóvel pensado para o que realmente importa: viver bem, investir com segurança e construir um patrimônio sólido que só valoriza com o tempo.
            </p>
            <p>
              Cuidamos de cada etapa para que você possa tirar seus planos do papel com mais tranquilidade, clareza e segurança — seja para construir a casa dos seus sonhos, investir em um imóvel ou transformar uma oportunidade em um patrimônio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={whatsapp(
                "Olá! Quero falar com um especialista da LST Engenharia."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-[#4a5859] text-white font-bold text-base hover:bg-[#3a4748] transition-colors"
            >
              Falar com Especialista
              <ArrowRight size={18} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-sm border border-white/20 text-white font-semibold text-base hover:border-white/50 transition-colors"
            >
              Ver Serviços
            </a>
          </motion.div>


        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="hidden md:block"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://hercules-cdn.com/file_dbHu3fgFth84ODn9cibHrarT"
              alt="Larissa Trindade — Engenheira Civil com capacete LST Engenharia no canteiro de obras"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0f1416]/80 to-transparent p-6">
              <p className="text-white font-bold text-sm">
                Larissa Trindade — CREA · Eng.ª Civil
              </p>
              <p className="text-white/60 text-xs mt-0.5">LST Engenharia · Corupá e Santa Catarina</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <p className="text-xs font-bold tracking-widest text-[#4a5859] uppercase mb-4">
            Sobre a LST Engenharia
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0f1416] leading-tight mb-6">
            Uma história construída com propósito
          </h2>
          <div className="space-y-4 text-[#0f1416]/70 leading-relaxed">
            <p>
              Os sonhos não surgem do acaso. Com um desenho aqui, um cálculo
              ali, aos poucos a ideia foi se fortalecendo. No momento da
              decisão — continuar no ramo empresarial da família ou seguir o
              sonho da engenharia — o coração venceu.
            </p>
            <p>
              Cá estamos nós, com a LST Engenharia, vivendo o desejo de
              ajudar pessoas a "desenharem" seus sonhos e tirá-los do papel.
            </p>
            <p>
              Nossa missão é{" "}
              <strong className="text-[#0f1416]">
                transformar complexidade burocrática em viabilidade técnica
              </strong>
              . Acreditamos que a engenharia de precisão é o único caminho para
              a segurança patrimonial duradoura — e é isso que entregamos a
              cada cliente, do projeto à entrega das chaves.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-[#4a5859]/10">
            {[
              { value: "5+", label: "Anos de Experiência" },
              { value: "100%", label: "Projetos Regularizados" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-black text-[#4a5859]">{s.value}</p>
                <p className="text-xs text-[#0f1416]/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://hercules-cdn.com/file_vupCBl2Klh3pyZTAbZZeFv0i"
                alt="Larissa Trindade — Engenheira Civil no canteiro de obras com capacete LST Engenharia e projetos"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#4a5859] text-white rounded-xl p-5 shadow-xl max-w-[200px]">
              <p className="text-2xl font-black">Rigor Técnico</p>
              <p className="text-xs text-white/70 mt-1 leading-snug">
                do projeto à entrega final
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#f7f8f8]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest text-[#4a5859] uppercase mb-3">
              Soluções Completas
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1416] mb-4">
              Serviços e Soluções
            </h2>
            <p className="text-[#0f1416]/60 max-w-2xl mx-auto text-lg">
              Unificamos o desenvolvimento técnico à gestão burocrática para
              garantir edificações sólidas, legalizadas e sem surpresas.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="group bg-white rounded-xl p-7 shadow-sm border border-[#4a5859]/8 hover:border-[#4a5859]/30 hover:shadow-md transition-all h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-[#4a5859]/10 flex items-center justify-center text-[#4a5859] mb-5 group-hover:bg-[#4a5859] group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-black text-[#0f1416] mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-[#0f1416]/60 leading-relaxed flex-1 mb-6">
                  {s.description}
                </p>
                <a
                  href={whatsapp(
                    `Olá! Tenho interesse em ${s.title}. Podem me passar mais informações?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-sm bg-[#0f1416] text-white text-sm font-bold hover:bg-[#4a5859] transition-colors"
                >
                  {s.cta} <ArrowRight size={14} />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-xs font-bold tracking-widest text-[#4a5859] uppercase mb-3">
                Por que a LST?
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-[#0f1416] leading-tight">
                Diferenciais que protegem o seu investimento
              </h2>
            </div>
            <p className="text-[#0f1416]/60 text-lg leading-relaxed">
              Cada projeto tem riscos ocultos — burocráticos, técnicos e
              financeiros. Nossos diferenciais foram desenvolvidos para eliminar
              esses riscos e garantir que seu patrimônio seja construído da
              forma certa, na primeira vez.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((d, i) => (
            <FadeIn key={d.title} delay={i * 0.08}>
              <div className="flex gap-4 p-6 rounded-xl bg-[#f7f8f8] border border-[#4a5859]/8 hover:border-[#4a5859]/25 hover:bg-[#f0f3f3] transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#4a5859] flex items-center justify-center text-white shrink-0">
                  {d.icon}
                </div>
                <div>
                  <h3 className="font-black text-[#0f1416] mb-1">{d.title}</h3>
                  <p className="text-sm text-[#0f1416]/60 leading-relaxed">
                    {d.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section className="bg-[#4a5859] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-stretch">
        <div className="relative h-72 lg:h-auto order-last lg:order-first">
          <img
            src="https://images.unsplash.com/photo-1698846296220-e44d9d4b9100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzIwMTN8MHwxfHNlYXJjaHw1fHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwY29uc3RydWN0aW9uJTIwcHJvamVjdCUyMGNvbWluZyUyMHRvJTIwbGlmZXxlbnwwfHx8fDE3ODUzNTA1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Engenheira desenhando planta baixa — projeto saindo do papel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#4a5859]/60 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#4a5859]/80 to-transparent lg:hidden" />
        </div>

        <div className="px-8 md:px-14 py-20">
          <FadeIn>
            <p className="text-xs font-bold tracking-widest text-white/60 uppercase mb-4">
              Comece Agora
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Pronto para transformar seu projeto em patrimônio sólido?
            </h2>
            <p className="text-white/70 text-lg mb-3">
              Consultoria inicial{" "}
              <strong className="text-white">sem compromisso</strong>. Avaliamos
              a viabilidade técnica do seu terreno ou projeto e apresentamos um
              plano claro, sem custos ocultos ou burocracia desnecessária.
            </p>
            <p className="text-white/50 text-sm mb-10">
              Atendemos proprietários, investidores e construtoras em Corupá e em todo o estado de Santa Catarina,
              com foco especial em projetos arquitetônicos e regularizações.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={whatsapp(
                  "Olá! Quero falar com um especialista da LST Engenharia e solicitar meu orçamento."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm bg-white text-[#4a5859] font-black text-base hover:bg-[#f0f3f3] transition-colors shadow-lg"
              >
                Falar com Especialista
                <ArrowRight size={18} />
              </a>
              <a
                href={whatsapp(
                  "Olá! Gostaria de solicitar um orçamento para meu projeto."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm border-2 border-white/30 text-white font-bold text-base hover:border-white/60 transition-colors"
              >
                Solicitar Orçamento
              </a>
            </div>

            <div className="flex flex-col gap-3">
              {[
                "Consultoria inicial gratuita",
                "Orçamento transparente e detalhado",
                "Sem taxas surpresa no processo",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-white/80 text-sm font-medium"
                >
                  <CheckCircle2 size={16} className="text-white shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0f1416] text-white/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img
              src="https://hercules-cdn.com/file_2LBxD0Qp0OzTdPrh4b9d26fs"
              alt="LST Engenheira Civil — Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-black text-sm tracking-widest text-white uppercase">
                LST
              </p>
              <p className="font-medium text-[10px] tracking-widest text-[#4a5859] uppercase">
                Engenheira Civil
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Transformamos seu projeto em um patrimônio sólido, seguro e
            totalmente regularizado. Rigor técnico a serviço do seu sonho.
          </p>
        </div>

        <div>
          <p className="text-white font-bold mb-4 text-sm tracking-widest uppercase">
            Serviços
          </p>
          <ul className="space-y-2 text-sm">
            {[
              "Projeto Arquitetônico",
              "Aprovação de Projetos",
              "Regularização Imobiliária",
              "Gerenciamento de Obras",
            ].map((s) => (
              <li key={s}>
                <a
                  href="#servicos"
                  className="hover:text-[#4a5859] transition-colors"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white font-bold mb-4 text-sm tracking-widest uppercase">
            Contato
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#4a5859] transition-colors"
              >
                <Phone size={14} /> (47) 99191-9790
              </a>
            </li>
            <li>
              <a
                href="mailto:eng.larissatrindade@gmail.com"
                className="flex items-center gap-2 hover:text-[#4a5859] transition-colors"
              >
                <Mail size={14} /> eng.larissatrindade@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} /> Corupá-SC e todo o estado de Santa Catarina
            </li>
            <li className="flex items-center gap-2">
              <Clock size={14} /> Seg–Sex, 8h–18h
            </li>
            <li>
              <a
                href="https://instagram.com/larissa_s_trindade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#4a5859] transition-colors"
              >
                <Share2 size={14} /> @larissa_s_trindade
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs">
          © {year} LST Engenharia. Todos os direitos reservados.
        </p>
        <p className="text-xs">Corupá-SC · Santa Catarina · Brasil</p>
      </div>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

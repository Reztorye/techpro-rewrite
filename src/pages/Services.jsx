import { ArrowRight, MessageCircle, Wrench, Monitor, HardDrive, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/Animations'

const services = [
    {
        icon: Wrench,
        title: 'Montagem de PC',
        desc: 'Comprou as peças do seu PC e precisa de ajuda com a montagem? Estamos aqui para isso! Montagem profissional com cabeamento organizado.',
        link: '/orcamento-personalizado',
    },
    {
        icon: Monitor,
        title: 'Limpeza Interna e Externa',
        desc: 'Removemos toda a poeira e sujeira, peça por peça, para manter seu PC funcionando com máximo desempenho.',
        link: '/limpeza-e-formatacao',
    },
    {
        icon: HardDrive,
        title: 'Formatação',
        desc: 'Windows renovado, rápido e sem travamentos. Instalamos drivers e programas essenciais.',
        link: '/limpeza-e-formatacao',
    },
    {
        icon: Cpu,
        title: 'Troca de Pasta Térmica',
        desc: 'Nova aplicação para reduzir o calor e proteger suas peças, prolongando a vida útil do hardware.',
        link: '/limpeza-e-formatacao',
    },
]

export default function Services() {
    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-dark py-20">
                <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-accent/5" />
                <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <FadeIn>
                        <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold tracking-widest text-accent uppercase">
                            Tudo que você precisa
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-5xl">
                            Nossos <span className="text-accent">Serviços</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="mx-auto max-w-2xl text-base text-white/70">
                            Comprou as peças do seu PC e precisa de ajuda com a montagem? Estamos aqui para isso! Oferecemos soluções completas para seu computador.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <StaggerContainer className="grid gap-8 sm:grid-cols-2">
                        {services.map((s) => (
                            <StaggerItem key={s.title}>
                                <Link
                                    to={s.link}
                                    className="group relative block overflow-hidden rounded-2xl border border-light bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-accent/10 p-3.5 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                                        <s.icon size={28} />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-secondary">{s.title}</h3>
                                    <p className="mb-5 text-sm leading-relaxed text-muted">{s.desc}</p>
                                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                                        Ver mais <ArrowRight size={14} />
                                    </span>
                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary py-16">
                <FadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6">
                    <h2 className="mb-4 text-3xl font-bold text-white">Precisa de algum serviço?</h2>
                    <p className="mb-8 text-white/80">Entre em contato pelo WhatsApp e tire suas dúvidas.</p>
                    <a
                        href="https://api.whatsapp.com/send/?phone=5541997511143&text=Olá%21+Tenho+interesse+nos+serviços+da+TechPro+Curitiba.&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
                    >
                        <MessageCircle size={18} />
                        Solicitar Orçamento no WhatsApp
                        <ArrowRight size={16} />
                    </a>
                </FadeIn>
            </section>
        </>
    )
}

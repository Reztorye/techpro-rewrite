import { Link } from 'react-router-dom'
import { ArrowRight, Monitor, Brush, Wrench, MessageCircle, Star, Quote } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/Animations'

const services = [
    {
        icon: Monitor,
        title: 'Serviço Completo de Montagem',
        desc: 'Montamos seu PC Gamer ou de trabalho com atendimento personalizado, desde a escolha das peças até a entrega.',
        link: '/orcamento-personalizado',
    },
    {
        icon: Brush,
        title: 'Limpeza e Formatação',
        desc: 'Removemos sujeira, poeira e otimizamos o sistema para que ele volte a funcionar como novo.',
        link: '/limpeza-e-formatacao',
    },
    {
        icon: Wrench,
        title: 'Serviços Adicionais',
        desc: 'Já tem as peças? Fazemos a montagem com todo o cuidado e qualidade. Formatação e mais.',
        link: '/servicos',
    },
]

const testimonials = [
    {
        name: 'Cliente Satisfeito',
        role: 'Gamer',
        text: 'Serviço impecável! Meu PC estava travando muito e esquentando. Depois da limpeza e troca da pasta térmica, parece outro computador. Recomendo demais!',
    },
    {
        name: 'Ana Paula',
        role: 'Designer',
        text: 'A montagem ficou perfeita, cabeamento super organizado. O atendimento foi excelente do início ao fim. Muito obrigada TechPro!',
    },
    {
        name: 'Carlos Eduardo',
        role: 'Programador',
        text: 'Profissionais de verdade. Entendem muito de hardware e foram super transparentes no orçamento. Meu setup ficou show!',
    },
]

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-gradient-to-br from-secondary via-secondary to-dark">
                <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/5" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/5" />

                <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
                    <FadeIn>
                        <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold tracking-widest text-accent uppercase">
                            Montagem e Limpeza de Computadores
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                            TechPro <span className="text-accent">Curitiba</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="mx-auto mb-4 max-w-2xl text-lg font-medium text-white/90">
                            Clientes satisfeitos, PCs impecáveis
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <p className="mx-auto mb-10 max-w-3xl text-base text-white/70 leading-relaxed">
                            A limpeza completa do seu computador é o nosso serviço mais procurado — removemos sujeira, poeira e otimizamos o sistema para que ele
                            volte a funcionar como novo. Também montamos seu PC Gamer ou de trabalho com atendimento personalizado, desde a escolha das peças até a
                            entrega pronta para uso.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <a
                            href="https://api.whatsapp.com/send/?phone=5541997511143&text=Olá%21+Tenho+interesse+nos+serviços+da+TechPro+Curitiba.&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-hover hover:shadow-xl hover:shadow-primary/40"
                        >
                            <MessageCircle size={18} />
                            Entre em contato
                        </a>
                    </FadeIn>
                </div>
            </section>

            {/* Services */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <span className="mb-2 block text-center text-xs font-bold tracking-widest text-accent uppercase">
                            O que fazemos
                        </span>
                        <h2 className="mb-4 text-center text-3xl font-bold text-secondary sm:text-4xl">
                            Serviços
                        </h2>
                        <p className="mx-auto mb-14 max-w-2xl text-center text-muted">
                            Oferecemos soluções completas em montagem, limpeza e formatação de computadores, garantindo performance, agilidade e segurança.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="grid gap-8 md:grid-cols-3">
                        {services.map((s) => (
                            <StaggerItem key={s.title}>
                                <Link
                                    to={s.link}
                                    className="group relative block overflow-hidden rounded-2xl border border-light bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                                        <s.icon size={28} />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-secondary">{s.title}</h3>
                                    <p className="mb-4 text-sm leading-relaxed text-muted">{s.desc}</p>
                                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                                        Saiba mais <ArrowRight size={14} />
                                    </span>
                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-light py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <span className="mb-2 block text-center text-xs font-bold tracking-widest text-accent uppercase">
                            Depoimentos
                        </span>
                        <h2 className="mb-4 text-center text-3xl font-bold text-secondary sm:text-4xl">
                            O que nossos clientes dizem
                        </h2>
                        <p className="mx-auto mb-14 max-w-2xl text-center text-muted">
                            A satisfação dos nossos clientes é o nosso maior orgulho. Confira algumas experiências.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="grid gap-8 md:grid-cols-3">
                        {testimonials.map((t, i) => (
                            <StaggerItem key={i}>
                                <div className="relative rounded-2xl bg-white p-8 shadow-sm">
                                    <Quote size={40} className="absolute -top-4 -left-2 text-accent/20" />

                                    <div className="mb-4 flex gap-1 text-accent">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>

                                    <p className="mb-6 text-sm leading-relaxed text-secondary/80 italic">
                                        "{t.text}"
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-secondary">{t.name}</p>
                                            <p className="text-xs text-muted">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden bg-primary py-20">
                <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/5" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/5" />

                <FadeIn className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
                    <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                        Pronto para turbinar seu PC?
                    </h2>
                    <p className="mb-8 text-lg text-white/80">
                        Fale conosco agora mesmo e receba um orçamento sem compromisso.
                    </p>
                    <a
                        href="https://api.whatsapp.com/send/?phone=5541997511143&text=Olá%21+Tenho+interesse+nos+serviços+da+TechPro+Curitiba.&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
                    >
                        <MessageCircle size={18} />
                        Chamar no WhatsApp
                    </a>
                </FadeIn>
            </section>
        </>
    )
}

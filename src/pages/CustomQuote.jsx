import { ArrowRight, MessageCircle, Settings, Cpu, Truck, FileText, Shield, Trophy } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/Animations'

const steps = [
    { num: '01', title: 'Envie seu pedido', desc: 'Envie seu pedido no WhatsApp' },
    { num: '02', title: 'Receba o orçamento', desc: 'Receba orçamento e opções de peças' },
    { num: '03', title: 'PC pronto', desc: 'PC montado e entregue em até 8 dias.' },
]

const features = [
    { icon: Settings, title: 'Orçamento sob medida', desc: 'PC Gamer ou de trabalho, feito para sua necessidade.' },
    { icon: Cpu, title: 'Montagem profissional', desc: 'Instalação do Sistema Operacional, Drivers, testes de desempenho e temperatura.' },
    { icon: Truck, title: 'Entrega garantida', desc: 'Entregamos na sua casa, pronto para uso.' },
    { icon: FileText, title: 'Caixas e notas fiscais', desc: 'Sempre acompanham seu pedido.' },
    { icon: Shield, title: 'Garantia de fábrica', desc: 'Cada peça com suporte oficial.' },
    { icon: Trophy, title: '+50 PCs montados/limpos', desc: 'Experiência comprovada em Curitiba.' },
]

export default function CustomQuote() {
    return (
        <>
            {/* Hero */}
            <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-gradient-to-br from-secondary to-dark">
                <div className="pointer-events-none absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-primary/5" />
                <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
                    <FadeIn>
                        <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold tracking-widest text-accent uppercase">
                            Orçamento Personalizado
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                            Monte seu PC Gamer ou de Trabalho<br />
                            <span className="text-accent">com Orçamento Personalizado</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="mx-auto mb-10 max-w-2xl text-base text-white/70">
                            Escolha as peças, nós cuidamos do resto. Atendimento em Curitiba e região.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <a
                            href="https://api.whatsapp.com/send/?phone=5541997511143&text=Olá%21+Tenho+interesse+nos+serviços+da+TechPro+Curitiba.&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-hover hover:shadow-xl"
                        >
                            <MessageCircle size={18} />
                            Solicitar Orçamento no WhatsApp
                        </a>
                    </FadeIn>
                </div>
            </section>

            {/* How it Works */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <h2 className="mb-2 text-center text-3xl font-bold text-secondary">Como funciona?</h2>
                        <p className="mb-14 text-center text-muted">Simples, rápido e personalizado.</p>
                    </FadeIn>

                    <StaggerContainer className="grid gap-8 md:grid-cols-3">
                        {steps.map((s) => (
                            <StaggerItem key={s.num}>
                                <div className="group relative rounded-2xl border border-light bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                                    <span className="mb-4 inline-block text-5xl font-extrabold text-accent/20 transition-colors group-hover:text-accent">
                                        {s.num}
                                    </span>
                                    <h3 className="mb-2 text-lg font-bold text-secondary">{s.title}</h3>
                                    <p className="text-sm text-muted">{s.desc}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Features */}
            <section className="bg-light py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <h2 className="mb-14 text-center text-3xl font-bold text-secondary">O que oferecemos</h2>
                    </FadeIn>

                    <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((f) => (
                            <StaggerItem key={f.title}>
                                <div className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                                        <f.icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 text-sm font-bold text-secondary">{f.title}</h3>
                                        <p className="text-sm text-muted">{f.desc}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Gallery callout */}
            <FadeIn>
                <section className="py-20">
                    <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
                        <h2 className="mb-4 text-3xl font-bold text-secondary">
                            Veja alguns dos serviços realizados
                        </h2>
                        <p className="mb-8 text-muted">
                            Clientes satisfeitos, PCs impecáveis.
                        </p>
                    </div>
                </section>
            </FadeIn>

            {/* CTA */}
            <section className="bg-primary py-16">
                <FadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6">
                    <h2 className="mb-4 text-3xl font-bold text-white">Pronto para montar seu PC?</h2>
                    <p className="mb-8 text-white/80">Entre em contato e receba seu orçamento personalizado.</p>
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

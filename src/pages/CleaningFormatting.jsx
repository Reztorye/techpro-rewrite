import { ArrowRight, MessageCircle, Sparkles, ThermometerSun, Monitor, MapPin, Trophy } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/Animations'

const steps = [
    { num: '01', title: 'Solicite um orçamento', desc: 'Solicite um orçamento no WhatsApp' },
    { num: '02', title: 'Agendamos uma data', desc: 'Agendamos uma data e vamos até você' },
    { num: '03', title: 'Realizamos o serviço', desc: 'Mais velocidade, mais desempenho, mais segurança' },
]

const features = [
    { icon: Sparkles, title: 'Limpeza Completa Peça por Peça', desc: 'Removemos poeira e resíduos de cada componente para máximo desempenho.' },
    { icon: ThermometerSun, title: 'Troca da Pasta Térmica', desc: 'Nova aplicação para reduzir o calor e proteger suas peças.' },
    { icon: Monitor, title: 'Formatação Opcional', desc: 'Windows renovado, rápido e sem travamentos.' },
    { icon: MapPin, title: 'Serviço a Domicílio ou em Nosso Local', desc: 'Agende na sua casa ou traga até nós, com toda a praticidade.' },
    { icon: Trophy, title: '+50 PCs montados/limpos', desc: 'Experiência comprovada em Curitiba e região.' },
]

export default function CleaningFormatting() {
    return (
        <>
            {/* Hero */}
            <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-gradient-to-br from-secondary to-dark">
                <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/5" />
                <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
                    <FadeIn>
                        <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold tracking-widest text-accent uppercase">
                            Limpeza e Formatação
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="mb-6 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                            Seu PC como novo em poucas horas,<br />
                            <span className="text-accent">sem sair de casa</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="mx-auto mb-10 max-w-2xl text-base text-white/70">
                            Aumente a vida útil do seu computador e deixe ele rodando como novo com nosso serviço de limpeza e formatação a domicílio.
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
                        <p className="mb-14 text-center text-muted">Processo simples e rápido.</p>
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

            {/* Features — balanced grid: top row 3, bottom row 2 centered */}
            <section className="bg-light py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <h2 className="mb-14 text-center text-3xl font-bold text-secondary">O que está incluso</h2>
                    </FadeIn>

                    <StaggerContainer className="flex flex-wrap justify-center gap-6">
                        {features.map((f) => (
                            <StaggerItem key={f.title} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                                <div className="group flex h-full items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
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

            {/* CTA */}
            <section className="bg-primary py-16">
                <FadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6">
                    <h2 className="mb-4 text-3xl font-bold text-white">Quer deixar seu PC como novo?</h2>
                    <p className="mb-8 text-white/80">Solicite um orçamento agora, sem compromisso.</p>
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

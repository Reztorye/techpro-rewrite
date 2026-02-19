import { MessageCircle, ShoppingCart, Cpu, HardDrive, MemoryStick, Zap, Box, ExternalLink, CheckCircle, Settings } from 'lucide-react'
import { FadeIn, FadeInScale } from '../components/ui/Animations'
import Ryzen3Img from '../assets/ryzen3200.png'
import Ryzen5Img from '../assets/ryzen55600gt.png'

const pcs = [
    {
        name: 'PC Gamer Ryzen 3',
        price: 'R$ 1.499,90',
        img: Ryzen3Img,
        whatsappLink:
            'https://api.whatsapp.com/send?phone=5541997511143&text=Oi%21%20Estou%20interessado%20no%20PC%20com%20Ryzen%203%20que%20vi%20no%20site%20da%20TechPro%20Curitiba.%20Voc%C3%AA%20pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F',
        mlLink: 'https://produto.mercadolivre.com.br/MLB-4144616171-pc-gamer-ryzen-3-3200g-16-gb-3200mhz-240gb-ssd-_JM',
        specs: [
            { label: 'Processador', value: 'AMD Ryzen 3 3400G (4 núcleos / 4 threads, até 4.0GHz, Vega 8)' },
            { label: 'Placa-mãe', value: 'Mancer A520M DXSC, DDR4, AM4' },
            { label: 'Memória RAM', value: '2x 8GB DDR4 3200MHz Mancer Dantalion Z' },
            { label: 'Armazenamento', value: 'SSD Mancer Reaper RF, 480GB' },
            { label: 'Fonte', value: 'Mancer Thunder 400W, 80 Plus Bronze' },
            { label: 'Gabinete', value: 'Mancer Hexer, Rainbow, Mid-Tower, Vidro, 3 Fans' },
        ],
    },
    {
        name: 'PC Gamer Ryzen 5',
        price: 'R$ 2.149,90',
        img: Ryzen5Img,
        whatsappLink:
            'https://api.whatsapp.com/send?phone=5541997511143&text=Oi%21%20Estou%20interessado%20no%20PC%20com%20Ryzen%205%20que%20vi%20no%20site%20da%20TechPro%20Curitiba.%20Voc%C3%AA%20pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F',
        mlLink: 'https://produto.mercadolivre.com.br/MLB-4144731579-pc-gamer-ryzen-5-5600gt-16-gb-3200mhz-480gb-ssd-_JM',
        specs: [
            { label: 'Processador', value: 'AMD Ryzen 5 5600GT (6 núcleos / 12 threads, até 4.6GHz, Vega)' },
            { label: 'Placa-mãe', value: 'ASRock B450M-HDV R4.0' },
            { label: 'Memória RAM', value: '16GB (2x8GB) DDR4 3200MHz Mancer Astrion' },
            { label: 'Armazenamento', value: 'SSD MSI Spatium S270 480GB' },
            { label: 'Fonte', value: 'TGT Havoc 500W 80 Plus White' },
            { label: 'Gabinete', value: 'TGT Jester V2, Mini-Tower, Acrílico, 1 Fan Rainbow' },
        ],
    },
]

const extras = [
    'Montagem profissional com cabeamento organizado',
    'Windows 11 Pro instalado',
    'Drivers atualizados',
    'Testes de desempenho e temperatura realizados',
]

const specIcons = {
    Processador: Cpu,
    'Placa-mãe': HardDrive,
    'Memória RAM': MemoryStick,
    Armazenamento: HardDrive,
    Fonte: Zap,
    Gabinete: Box,
}

export default function ReadyPCs() {
    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-dark py-20">
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/5" />
                <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <FadeIn>
                        <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold tracking-widest text-accent uppercase">
                            Pronta Entrega
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-5xl">
                            PCs Montados e <span className="text-accent">Prontos para Enviar</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="mx-auto max-w-2xl text-base text-white/70">
                            Escolha um dos nossos modelos prontos e receba na sua casa com montagem profissional, Windows instalado e tudo testado!
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Product Cards */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-2">
                        {pcs.map((pc, i) => (
                            <FadeInScale key={pc.name} delay={i * 0.15}>
                                <div className="group relative overflow-hidden rounded-3xl border border-light bg-white shadow-sm transition-all hover:shadow-xl">
                                    {/* Image - full width banner */}
                                    <div className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
                                        <img
                                            src={pc.img}
                                            alt={pc.name}
                                            className="mx-auto block h-auto w-full max-w-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Card header */}
                                    <div className="bg-gradient-to-r from-secondary to-secondary/90 px-8 py-6">
                                        <h2 className="text-2xl font-bold text-white">{pc.name}</h2>
                                        <p className="text-4xl font-extrabold text-accent">{pc.price}</p>
                                        <p className="mt-1 text-xs text-white/60">Envio em até 2 dias úteis · Desconto em Curitiba e região</p>
                                    </div>

                                    <div className="p-8">
                                        {/* Specs */}
                                        <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-wider text-accent uppercase">
                                            <CheckCircle size={16} /> Configuração
                                        </h3>
                                        <div className="space-y-3">
                                            {pc.specs.map((spec) => {
                                                const Icon = specIcons[spec.label] || Box
                                                return (
                                                    <div key={spec.label} className="flex items-start gap-3">
                                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                                                            <Icon size={16} />
                                                        </div>
                                                        <div>
                                                            <span className="text-xs font-bold text-secondary">{spec.label}</span>
                                                            <p className="text-sm text-muted">{spec.value}</p>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        {/* Extras */}
                                        <h3 className="mb-3 mt-6 flex items-center gap-2 text-sm font-bold tracking-wider text-accent uppercase">
                                            <Settings size={16} /> Detalhes adicionais
                                        </h3>
                                        <ul className="space-y-1.5">
                                            {extras.map((e) => (
                                                <li key={e} className="flex items-center gap-2 text-sm text-muted">
                                                    <span className="text-accent">•</span> {e}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Buttons */}
                                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                            <a
                                                href={pc.whatsappLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg"
                                            >
                                                <MessageCircle size={16} />
                                                Compre Aqui
                                            </a>
                                            <a
                                                href={pc.mlLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-secondary bg-secondary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-secondary/80"
                                            >
                                                <ShoppingCart size={16} />
                                                Mercado Livre
                                                <ExternalLink size={12} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </FadeInScale>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

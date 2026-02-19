import { useState, useEffect } from 'react'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'

const STORE_ADDRESS = 'Rua Antônio Turíbio Teixeira Braga, 35 - Butiatuvinha, Curitiba - PR'
const MAPS_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d-49.3378!3d-25.3910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIzJzI3LjYiUyA0OcKwMjAnMTYuMSJX!5e0!3m2!1spt-BR!2sbr!4v1`
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STORE_ADDRESS)}`
const MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('TechPro Curitiba ' + STORE_ADDRESS)}`

export default function GoogleMap() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true)
        }, 1500) // Fallback: show map after 1.5s even if onLoad doesn't fire
        return () => clearTimeout(timer)
    }, [])

    return (
        <section className="relative bg-secondary">
            {/* Section Header */}
            <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
                <span className="mb-2 block text-center text-xs font-bold tracking-widest text-accent uppercase">
                    Localização
                </span>
                <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">
                    Onde estamos
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-center text-white/70">
                    Venha nos visitar! Estamos localizados em Curitiba, no bairro Butiatuvinha.
                </p>
            </div>

            {/* Map Container */}
            <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
                    {/* Loading Skeleton */}
                    {!isLoaded && (
                        <div className="flex h-[400px] items-center justify-center bg-secondary/80 lg:h-[450px]">
                            <div className="flex flex-col items-center gap-3">
                                <div className="h-10 w-10 animate-spin rounded-full border-4 border-accent/30 border-t-accent" />
                                <span className="text-sm text-white/50">Carregando mapa...</span>
                            </div>
                        </div>
                    )}

                    {/* Google Maps Iframe */}
                    <iframe
                        src={MAPS_EMBED_URL}
                        width="100%"
                        height={isLoaded ? '450' : '0'}
                        style={{
                            border: 0,
                            display: isLoaded ? 'block' : 'none',
                        }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização TechPro Curitiba"
                        onLoad={() => setIsLoaded(true)}
                    />

                    {/* Overlay Bar */}
                    <div className="flex flex-col items-center justify-between gap-4 bg-linear-to-r from-dark to-secondary p-5 sm:flex-row">
                        <div className="flex items-center gap-3 text-white">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20">
                                <MapPin size={20} className="text-accent" />
                            </div>
                            <div>
                                <p className="text-sm font-bold">TechPro Curitiba</p>
                                <p className="text-xs text-white/60">{STORE_ADDRESS}</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <a
                                href={MAPS_DIRECTIONS_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold text-secondary shadow-lg transition-all hover:bg-accent-light hover:shadow-xl"
                            >
                                <Navigation size={14} />
                                Rotas
                            </a>
                            <a
                                href={MAPS_SEARCH_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-xs font-bold text-white transition-all hover:border-accent hover:text-accent"
                            >
                                <ExternalLink size={14} />
                                Abrir no Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

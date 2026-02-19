import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react'
import GoogleMap from '../shared/GoogleMap'

export default function Footer() {
    return (
        <footer className="bg-secondary text-white">
            {/* Google Maps Section */}
            <GoogleMap />

            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Contacts */}
                    <div className="text-center md:text-left">
                        <h3 className="mb-4 text-2xl font-bold tracking-wider uppercase">
                            Contatos
                        </h3>
                        <hr className="mx-auto mb-6 w-16 border-accent md:mx-0" />
                        <div className="space-y-3 text-sm">
                            <a
                                href="https://wa.me/5541997511143?text=Olá%2C%20gostaria%20de%20mais%20informações."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 transition-colors hover:text-accent md:justify-start"
                            >
                                <Phone size={16} />
                                (41) 99751-1143 (Telefone e WhatsApp)
                            </a>
                            <a
                                href="mailto:techprocuritiba@gmail.com"
                                className="flex items-center justify-center gap-2 transition-colors hover:text-accent md:justify-start"
                            >
                                <Mail size={16} />
                                techprocuritiba@gmail.com
                            </a>
                        </div>
                        <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
                            <a href="https://www.instagram.com/techprocuritiba/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61577986714464" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.youtube.com/@techprocuritiba" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="text-center md:text-left">
                        <h3 className="mb-4 text-2xl font-bold tracking-wider uppercase">
                            Endereço
                        </h3>
                        <hr className="mx-auto mb-6 w-16 border-accent md:mx-0" />
                        <div className="space-y-3 text-sm">
                            <p className="flex items-center justify-center gap-2 md:justify-start">
                                <MapPin size={16} />
                                Rua Antônio Turíbio Teixeira Braga, 35 - Butiatuvinha
                            </p>
                            <p>Área de Atendimento: Curitiba e região.</p>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="text-center md:text-left">
                        <h3 className="mb-4 text-2xl font-bold tracking-wider uppercase">
                            Horário
                        </h3>
                        <hr className="mx-auto mb-6 w-16 border-accent md:mx-0" />
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start justify-center gap-2 md:justify-start">
                                <Clock size={16} className="mt-0.5 shrink-0 text-accent" />
                                <div>
                                    <p className="font-bold text-white">Segunda - Domingo</p>
                                    <p className="text-white/70">09:00 - 22:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60">
                    © {new Date().getFullYear()} TechPro Curitiba. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/limpeza-e-formatacao', label: 'Limpeza e Formatação' },
    { path: '/orcamento-personalizado', label: 'Orçamento Personalizado' },
    { path: '/pcs-prontos', label: 'PCs Prontos' },
    { path: '/servicos', label: 'Serviços' },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <span className="font-brand text-2xl font-bold text-secondary">
                        <span className="font-bold">TechPro</span>
                        <span className="font-normal">Curitiba</span>
                    </span>
                    <span className="block text-xs font-semibold tracking-wider text-accent">
                        MONTAGEM E LIMPEZA DE COMPUTADORES
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex md:items-center md:gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:bg-light hover:text-primary ${location.pathname === link.path
                                    ? 'text-primary'
                                    : 'text-secondary'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden rounded-md p-2 text-secondary hover:bg-light"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <nav className="border-t border-light bg-white px-4 pb-4 md:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:bg-light hover:text-primary ${location.pathname === link.path
                                    ? 'text-primary'
                                    : 'text-secondary'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    )
}

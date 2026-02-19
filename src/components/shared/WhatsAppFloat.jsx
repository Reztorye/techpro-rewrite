import { MessageCircle } from 'lucide-react'

export default function WhatsAppFloat() {
    return (
        <a
            href="https://api.whatsapp.com/send/?phone=5541997511143&text=Olá%21+Tenho+interesse+nos+serviços+da+TechPro+Curitiba.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chamar no WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40"
        >
            <MessageCircle size={26} />
        </a>
    )
}

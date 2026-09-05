import { useState } from "react";
import { Check, Copy } from "lucide-react";
import {Section} from "@/components";

export const ContactSection = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        // Reconstrucción dinámica para evitar scrapers de HTML estático
        const user = "sergioegch"; // reemplaza con tu prefijo
        const domain = "gmail.com"; // reemplaza con tu dominio
        const email = `${user}@${domain}`;

        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <Section id="projects">
            {/* Indicador de estado */}
            <div className="inline-flex items-center mt-5 mx-auto gap-2 text-xs text-neutral-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="tracking-widest uppercase">// CANAL_SEGURO · COMUNICACIÓN ABIERTA</span>
            </div>

            {/* Título principal */}
            <h3 className="mt-3 mx-auto text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
                ¿Tienes un reto o proyecto en mente?
            </h3>

            {/* Botón táctico protegido */}
            <div className="mt-6 flex justify-center">
                <button
                    onClick={handleCopyEmail}
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl cursor-pointer border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 shadow-sm transition-all duration-200 hover:border-[#F97316] hover:bg-orange-50 hover:text-[#F97316] active:scale-95"
                    aria-label="Copiar correo de contacto"
                >
                    {copied ? (
                        <>
                            <Check className="h-4 w-4 text-[#F97316]" />
                            <span>// CORREO COPIADO AL PORTAPAPELES</span>
                        </>
                    ) : (
                        <>
                            <Copy className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-[#F97316]" />
                            <span>[ INICIAR CONVERSACIÓN POR CORREO ]</span>
                        </>
                    )}
                </button>
            </div>

            {/* Enlaces a perfiles */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs font-medium text-neutral-500">
                <a
                    href="https://www.linkedin.com/in/sgachuzc/"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#F97316]"
                >
                    [ LINKEDIN ]
                </a>
                <span className="text-neutral-300">/</span>
                <a
                    href="https://github.com/sgachuzc"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#F97316]"
                >
                    [ GITHUB ]
                </a>
            </div>
        </Section>
    );
};
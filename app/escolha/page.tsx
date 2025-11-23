"use client"

import { ArrowRight, Youtube, Users, User } from "lucide-react"

export default function EscolhaPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header Simplificado */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-white">D</span>
            <span className="text-gray-400">LIFE</span>
          </div>
        </nav>
      </header>

      {/* Tela de Escolha */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter leading-none">
              Bem-vindo ao <span className="text-gray-400">DLIFE</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Escolha seu caminho para liberdade financeira digital
            </p>
          </div>

          {/* 3 Cards de Escolha */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card YouTube */}
            <div 
              onClick={() => window.open('https://www.youtube.com/@jotacostaolv', '_blank')}
              className="group cursor-pointer"
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
                <img 
                  src="/images/IMG_9683.jpg" 
                  alt="YouTube" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Conteúdo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6 p-4 bg-red-500/20 rounded-full border border-red-500/30">
                    <Youtube className="w-12 h-12 text-red-500" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">YouTube</h2>
                  <p className="text-gray-300 mb-6">
                    Conteúdo gratuito sobre marketing digital e lifestyle
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 group-hover:bg-white/20 transition-colors">
                    <span className="text-sm">Assistir vídeos</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card Mentoria */}
            <a 
              href="https://forms.gle/fZumm4uFPHX5hwVR9"
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer"
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
                <img 
                  src="/images/como.jpeg" 
                  alt="Mentoria" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Conteúdo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6 p-4 bg-green-500/20 rounded-full border border-green-500/30">
                    <Users className="w-12 h-12 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Mentoria</h2>
                  <p className="text-gray-300 mb-6">
                    Aprenda o método completo para construir seu DLIFE
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 group-hover:bg-white/20 transition-colors">
                    <span className="text-sm">Conhecer programa</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>

            {/* Card Sobre Mim */}
            <a 
              href="/#origem"
              className="group cursor-pointer"
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300">
                <img 
                  src="/images/home.jpeg" 
                  alt="Sobre Mim" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Conteúdo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="mb-6 p-4 bg-blue-500/20 rounded-full border border-blue-500/30">
                    <User className="w-12 h-12 text-blue-500" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
                  <p className="text-gray-300 mb-6">
                    Conheça minha história e transformação
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 group-hover:bg-white/20 transition-colors">
                    <span className="text-sm">Ver história</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Footer Info */}
          <div className="text-center mt-16">
            <p className="text-sm text-gray-500">
              De vendedor de paçoca no sinal para empreendedor digital em 15+ moedas
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

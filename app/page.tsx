"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Globe, TrendingUp, Zap, MapPin, Plane, Coffee, Laptop, Heart, DollarSign, Euro, CreditCard, Wallet, Palmtree, Mountain, Camera, Sparkles } from "lucide-react"

export default function DlifeLanding() {
  const [isVisible, setIsVisible] = useState(false)
  const [counter, setCounter] = useState(0)
  const [countries, setCountries] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Animação de contador de dinheiro
    const moneyInterval = setInterval(() => {
      setCounter(prev => {
        if (prev < 10000) return prev + 147
        clearInterval(moneyInterval)
        return 10000
      })
    }, 30)

    // Animação de contador de países
    const countryInterval = setInterval(() => {
      setCountries(prev => {
        if (prev < 50) return prev + 1
        clearInterval(countryInterval)
        return 50
      })
    }, 80)

    return () => {
      clearInterval(moneyInterval)
      clearInterval(countryInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-white">D</span>
            <span className="text-gray-400">LIFE</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#origem" className="text-gray-400 hover:text-white transition-colors">
              Origem
            </a>
            <a href="#jornada" className="text-gray-400 hover:text-white transition-colors">
              Jornada
            </a>
            <a href="#lifestyle" className="text-gray-400 hover:text-white transition-colors">
              Lifestyle
            </a>
            <a href="#conquistas" className="text-gray-400 hover:text-white transition-colors">
              Conquistas
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8 flex justify-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 bg-gradient-to-br from-gray-800 to-gray-900">
                <img src="/images/home.jpeg" alt="Jota" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm text-gray-300">💼 Empreendedor Digital | Mentor de Negócios Online</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-none">
              <span className="block text-balance">Liberdade</span>
              <span className="block text-balance">Financeira</span>
              <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Digital
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
              Meu nome é Jota. Transformei minha vida através do marketing digital — construindo um lifestyle de{" "}
              <span className="text-white font-semibold">liberdade, renda recorrente e controle total do meu tempo</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full bg-transparent"
              >
                Conhecer Minha História
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      <section id="origem" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-gray-900" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Tudo começou nas <span className="text-gray-400">ruas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto text-balance">
              Antes do DLIFE, antes do digital, havia apenas eu, um sinal vermelho e muita determinação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
                <img
                  src="/images/paçoca.jpeg"
                  alt="Jota vendendo paçoca no sinal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <p className="text-sm text-gray-300 mb-1">2015 - Nas ruas</p>
                  <p className="text-white font-semibold">Vendendo paçoca no sinal</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm text-gray-300">A origem da minha história</span>
              </div>

              <h3 className="text-4xl font-bold mb-6 leading-tight">Vendendo paçoca no sinal para sobreviver</h3>

              <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
                <p>
                  Eu não tinha muito. Acordava cedo, pegava minha caixa de paçocas e ia para o sinal. Sol quente, chuva,
                  frio... não importava. Eu precisava vender.
                </p>
                <p>
                  Cada R$ 1,00 que eu ganhava era uma vitória. Mas eu sabia que queria mais. Não mais dinheiro
                  necessariamente, mas mais <span className="text-white font-semibold">liberdade</span>.
                </p>
                <p>
                  Foi ali, entre um sinal e outro, que eu comecei a sonhar com uma vida diferente. Uma vida onde eu não
                  dependesse do próximo sinal vermelho para ganhar dinheiro.
                </p>
              </div>
            </div>
          </div>

          <div className="relative py-20">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* ANTES */}
              <div className="text-right">
                <div className="inline-block mb-6">
                  <div className="text-sm font-mono text-gray-500 mb-2">2015</div>
                  <h3 className="text-3xl font-bold">Onde Estava</h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-gray-800 to-gray-900 relative">
                      <img
                        src="/images/iDrip_20251112121645.jpg"
                        alt="Vendendo no sinal"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-mono">
                        R$ 50-100/dia
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">Vendendo paçoca no sinal</p>
                  </div>
                </div>
              </div>

              {/* DEPOIS */}
              <div className="text-left">
                <div className="inline-block mb-6">
                  <div className="text-sm font-mono text-gray-500 mb-2">2025</div>
                  <h3 className="text-3xl font-bold">Onde Cheguei</h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-900/50 to-black border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-gray-800 to-gray-900 relative">
                      <img
                        src="/images/iDrip_20251112121807.jpg"
                        alt="Trabalhando de qualquer lugar"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm px-3 py-1 rounded text-xs font-mono flex items-center gap-1">
                        <DollarSign className="w-3 h-3" />
                        <Euro className="w-3 h-3" />
                        USD, EUR, BRL+
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">Trabalhando de resorts, praias e cafés pelo mundo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-20">
            <div className="inline-block p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-bold mb-2">
                De <span className="text-gray-400">R$ 100/dia</span> para{" "}
                <span className="text-white">múltiplas moedas</span>
              </p>
              <p className="text-gray-400">O digital transformou completamente minha realidade</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "6", suffix: "", label: "Figuras de Renda", icon: <DollarSign className="w-5 h-5" />, delay: "0s" },
              { number: "15", suffix: "+", label: "Moedas Operadas", icon: <Globe className="w-5 h-5" />, delay: "0.1s" },
              { number: "7", suffix: "+", label: "Anos de Experiência", icon: <TrendingUp className="w-5 h-5" />, delay: "0.2s" },
              { number: "24", suffix: "/7", label: "Renda Passiva", icon: <Zap className="w-5 h-5" />, delay: "0.3s" },
            ].map((stat, index) => (
              <div key={index} className="text-center" style={{ animationDelay: stat.delay }}>
                <div className="inline-flex items-center justify-center mb-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-gray-300">{stat.icon}</div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Showcase */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">O DLIFE na Prática</h2>
            <p className="text-gray-400">Liberdade para viver do seu jeito</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Lifestyle 1 */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black border border-white/10 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900">
                <img src="/images/iDrip_20251112121922.jpg" alt="Lifestyle Digital" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Trabalho Remoto</h3>
                <p className="text-gray-400 text-sm mb-4">Liberdade para trabalhar de onde quiser, quando quiser.</p>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono">Flexibilidade Total</div>
                </div>
              </div>
            </div>

            {/* Lifestyle 2 */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black border border-white/10 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900">
                <img src="/images/IMG_9683.jpg" alt="Lifestyle Confortável" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Qualidade de Vida</h3>
                <p className="text-gray-400 text-sm mb-4">Tempo para aproveitar os momentos que realmente importam.</p>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono">Equilíbrio</div>
                </div>
              </div>
            </div>

            {/* Lifestyle 3 */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black border border-white/10 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900">
                <img src="/images/IMG_9685.jpg" alt="Renda Recorrente" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Independência Financeira</h3>
                <p className="text-gray-400 text-sm mb-4">Renda recorrente sem depender de horário comercial.</p>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono">Passivo 24/7</div>
                </div>
              </div>
            </div>

            {/* Lifestyle 4 */}
            <div className="bg-gradient-to-br from-gray-900/80 to-black border border-white/10 rounded-lg overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900">
                <img src="/images/IMG_9021.JPG" alt="Aventuras" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Experiências Únicas</h3>
                <p className="text-gray-400 text-sm mb-4">Liberdade para explorar e viver novas experiências.</p>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono">Sem Fronteiras</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="jornada" className="py-32 px-6 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
                Como descobri o marketing digital
              </h2>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                Um dia, cansado do sinal, entrei em uma lan house. Vi pessoas vendendo coisas pela internet e ganhando
                em dólar. Pensei: "Se eles conseguem, eu também consigo."
              </p>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Comecei do zero. Aprendi sozinho, errei muito, mas não desisti. Fiz minha primeira venda online e recebi
                em dólar. Foi ali que tudo mudou. O digital não tinha limites de horário, lugar ou moeda.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Laptop className="w-5 h-5" />, text: "Trabalho de qualquer lugar do mundo" },
                  { icon: <Globe className="w-5 h-5" />, text: "Clientes em mais de 50 países" },
                  { icon: <TrendingUp className="w-5 h-5" />, text: "Renda em múltiplas moedas" },
                  { icon: <Coffee className="w-5 h-5" />, text: "Liberdade total de tempo" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg text-white">{item.icon}</div>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/images/como.jpeg"
                    alt="Jota vivendo o DLIFE"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lifestyle" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Os Pilares do <span className="text-gray-400">DLIFE</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto text-balance">
              Construindo um estilo de vida baseado em liberdade, propósito e resultado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Laptop className="w-6 h-6" />,
                title: "Negócio Escalável",
                description:
                  "Sistema de vendas digitais que funciona 24/7. Produtos que geram receita recorrente sem depender da minha presença constante.",
                image: "/images/iDrip_20251112121629.jpg",
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: "Múltiplas Fontes de Renda",
                description:
                  "Diversificação em diferentes moedas e mercados. Recebendo em USD, EUR, BRL e outras 12 moedas através de canais digitais.",
                image: "/images/iDrip_20251112121807.jpg",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Liberdade de Tempo",
                description:
                  "Controle total da agenda. Trabalho quando quero, de onde quero. O negócio funciona com ou sem minha presença ativa.",
                image: "/images/IMG_7433.jpg",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-b from-gray-900/50 to-black border-white/10 backdrop-blur-sm"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="inline-flex p-3 rounded-lg bg-white/5 border border-white/10 mb-4">
                  <div className="text-gray-300">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="conquistas" className="py-32 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Resultados Reais
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto text-balance">
              De R$ 100/dia vendendo paçoca no sinal para operação em 15 moedas diferentes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/images/paçoca.jpeg",
                title: "Origem Humilde",
                description: "Começando do zero nas ruas",
                metric: "R$ 100/dia",
              },
              {
                image: "/images/como.jpeg",
                title: "Transformação Digital",
                description: "Descobrindo o marketing online",
                metric: "Primeira venda em USD",
              },
              {
                image: "/images/home.jpeg",
                title: "Lifestyle DLIFE",
                description: "Liberdade e renda recorrente",
                metric: "6 figuras/ano",
              },
            ].map((moment, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/80 to-black border border-white/10 rounded-lg overflow-hidden">
                <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{moment.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{moment.description}</p>
                  <div className="inline-flex px-3 py-1 bg-white/5 rounded border border-white/10">
                    <span className="text-sm font-mono text-white">{moment.metric}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
                <img
                  src="/images/IMG_8893.jpg"
                  alt="Jota - Experiência Global"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Diversificação de Renda Global
              </h2>
              <p className="text-xl text-gray-400 mb-6 leading-relaxed">
                Construí um modelo de negócio que opera em 15+ moedas diferentes. Do real ao dólar, euro, libra e outras moedas internacionais.
              </p>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Cada mercado tem suas particularidades. Aprendi a adaptar estratégias para diferentes culturas e economias, criando um sistema robusto e diversificado.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { flag: "🇺🇸", currency: "USD", market: "EUA", amount: "$50k+" },
                  { flag: "🇪🇺", currency: "EUR", market: "Europa", amount: "€30k+" },
                  { flag: "🇧🇷", currency: "BRL", market: "Brasil", amount: "R$200k+" },
                  { flag: "🇦🇪", currency: "AED", market: "Emirados", amount: "40k+" },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <span className="text-2xl">{item.flag}</span>
                    <div className="flex-1">
                      <div className="font-bold text-white text-sm">{item.currency}</div>
                      <div className="text-xs text-gray-500">{item.market}</div>
                    </div>
                    <div className="text-xs font-mono text-gray-400">
                      {item.amount}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Indicador de operação */}
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-400">Operação ativa em 15 moedas</span>
                  </div>
                  <span className="text-xs font-mono text-gray-500">24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Momentos DLIFE */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Vivendo o DLIFE</h2>
            <p className="text-gray-400">O dia a dia de quem tem liberdade para escolher</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              "/images/iDrip_20251112121737.jpg",
              "/images/iDrip_20251112121941.jpg",
              "/images/IMG_8893.jpg",
              "/images/Screenshot_20251112_132011_Video Player.jpg",
              "/images/IMG_9021.JPG",
              "/images/IMG_9683.jpg",
              "/images/IMG_9685.jpg",
              "/images/iDrip_20251112121629.jpg",
            ].map((img, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10"
              >
                <img
                  src={img}
                  alt={`Momento DLIFE ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Resultados */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { icon: <DollarSign className="w-5 h-5" />, number: "15+", label: "Moedas Operadas" },
              { icon: <TrendingUp className="w-5 h-5" />, number: "7+", label: "Anos de Experiência" },
              { icon: <Zap className="w-5 h-5" />, number: "24/7", label: "Renda Passiva" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                <div className="inline-flex items-center justify-center mb-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-gray-400">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance">
            Quer Construir um Negócio Global?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
            Se você viu minha história e pensou "eu quero isso também", saiba que é possível. Eu saí do sinal para o
            mundo. E posso te mostrar o caminho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white hover:text-black text-lg px-12 py-6 rounded-lg bg-transparent group transition-all duration-300"
            >
              Conhecer o Método DLIFE
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Diferenciais */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Laptop className="w-5 h-5" />, text: "Sistema automatizado de vendas" },
              { icon: <DollarSign className="w-5 h-5" />, text: "Renda recorrente em múltiplas moedas" },
              { icon: <Zap className="w-5 h-5" />, text: "Liberdade de tempo e localização" },
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="p-2 bg-white/5 rounded border border-white/10 text-gray-400">
                  {benefit.icon}
                </div>
                <span className="text-sm text-gray-300">{benefit.text}</span>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-gray-500 mt-8">
            Mais de 7 anos de experiência no mercado digital
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">D</span>
                <span className="text-gray-400">LIFE</span>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Negócios digitais sem fronteiras
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sobre</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Minha História
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Lifestyle
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Conquistas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Conteúdo</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Viagens
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Dicas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Conecte-se</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            <p>© 2025 DLIFE. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

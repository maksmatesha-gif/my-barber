import { Phone, MapPin, Zap, ShieldCheck } from 'lucide-react';

const PHONE_HREF = 'tel:+375295700848';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-amber/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-64 w-64 rounded-full bg-amber/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-sm font-semibold text-amber animate-slide-up">
            <Zap className="h-4 w-4" />
            Подача от 15 минут
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-balance animate-slide-up sm:text-5xl md:text-6xl">
            Эвакуатор в <span className="text-amber">вашем городе</span> от{' '}
            <span className="text-amber">60 ₽</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75 animate-slide-up">
            Подача от 15–20 минут. Работаем круглосуточно, без выходных.
            Опытные водители, честные цены и аккуратная погрузка.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 animate-slide-up sm:flex-row sm:justify-center">
            <a
              href={PHONE_HREF}
              className="group relative flex items-center gap-3 rounded-2xl bg-amber px-8 py-5 text-lg font-extrabold text-ink shadow-lg shadow-amber/30 animate-pulse-ring transition-transform hover:scale-105 active:scale-95"
            >
              <Phone className="h-6 w-6" strokeWidth={2.5} />
              Вызвать эвакуатор
            </a>
            <a
              href="#order"
              className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MapPin className="h-5 w-5 text-amber" />
              Оставить заявку
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-amber" />
              Фиксированная цена
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber" />
              Подача 15–20 минут
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-amber" />
              Звонок круглосуточно
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

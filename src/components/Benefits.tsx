import { Zap, ShieldCheck, BadgeCheck } from 'lucide-react';

const BENEFITS = [
  {
    icon: Zap,
    title: 'Быстрая подача',
    text: 'Эвакуатор прибудет на место за 15–20 минут. Диспетчер работает 24 часа без перерывов.',
  },
  {
    icon: BadgeCheck,
    title: 'Опытные водители',
    text: 'Квалифицированные специалисты с многолетним стажем. Аккуратная погрузка любого транспорта.',
  },
  {
    icon: ShieldCheck,
    title: 'Фиксированные цены',
    text: 'Стоимость известна заранее — без скрытых платежей и доплат по прибытии.',
  },
];

export default function Benefits() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Почему выбирают нас
          </h2>
          <p className="mt-3 text-white/60">
            Надёжная помощь на дороге в любое время суток.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group rounded-3xl border border-white/10 bg-ink2 p-7 transition-all hover:border-amber/40 hover:bg-amber/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber/15 text-amber transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-xl font-bold">{b.title}</h3>
                <p className="mt-2 text-white/60 leading-relaxed">{b.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

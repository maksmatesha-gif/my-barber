import { useMemo, useState } from 'react';
import { Car, Calculator, Bike } from 'lucide-react';

type VehicleKey = 'sedan' | 'suv' | 'motorcycle';

const VEHICLES: {
  key: VehicleKey;
  label: string;
  base: number;
  perKm: number;
  icon: typeof Car;
}[] = [
  { key: 'sedan', label: 'Седан', base: 60, perKm: 2, icon: Car },
  { key: 'suv', label: 'Внедорожник', base: 80, perKm: 3, icon: Car },
  { key: 'motorcycle', label: 'Мотоцикл', base: 50, perKm: 2, icon: Bike },
];

export default function PriceCalculator() {
  const [vehicle, setVehicle] = useState<VehicleKey>('sedan');
  const [distance, setDistance] = useState(10);

  const selected = VEHICLES.find((v) => v.key === vehicle)!;
  const price = useMemo(
    () => selected.base + selected.perKm * distance,
    [selected, distance]
  );

  return (
    <section id="calculator" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-amber">
            <Calculator className="h-4 w-4" />
            Калькулятор стоимости
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Рассчитайте цену онлайн
          </h2>
          <p className="mt-3 text-white/60">
            Выберите тип транспорта и укажите расстояние — цена рассчитается мгновенно.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-ink2 p-6 shadow-xl sm:p-8">
          {/* vehicle selector */}
          <div className="grid grid-cols-3 gap-3">
            {VEHICLES.map((v) => {
              const Icon = v.icon;
              const active = v.key === vehicle;
              return (
                <button
                  key={v.key}
                  onClick={() => setVehicle(v.key)}
                  className={`flex flex-col items-center gap-2 rounded-2xl border p-4 transition-all ${
                    active
                      ? 'border-amber bg-amber/15 text-white'
                      : 'border-white/10 bg-white/5 text-white/70 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <Icon
                    className={`h-7 w-7 ${active ? 'text-amber' : 'text-white/60'}`}
                    strokeWidth={2}
                  />
                  <span className="text-sm font-semibold">{v.label}</span>
                </button>
              );
            })}
          </div>

          {/* distance slider */}
          <div className="mt-8">
            <div className="flex items-end justify-between">
              <label htmlFor="distance" className="text-sm font-medium text-white/70">
                Расстояние
              </label>
              <span className="text-lg font-bold text-white">
                {distance} км
              </span>
            </div>
            <input
              id="distance"
              type="range"
              min={1}
              max={100}
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-amber"
            />
            <div className="mt-1 flex justify-between text-xs text-white/40">
              <span>1 км</span>
              <span>100 км</span>
            </div>
          </div>

          {/* price result */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-amber/10 p-6 sm:flex-row">
            <div>
              <p className="text-sm text-white/60">Примерная стоимость</p>
              <p className="mt-1 text-4xl font-extrabold text-amber sm:text-5xl">
                {price.toLocaleString('ru-RU')} ₽
              </p>
            </div>
            <a
              href="#order"
              className="rounded-2xl bg-amber px-6 py-4 text-base font-bold text-ink transition-transform hover:scale-105 active:scale-95"
            >
              Заказать по этой цене
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-white/40">
            * Расчёт предварительный. Точную стоимость назовёт диспетчер.
          </p>
        </div>
      </div>
    </section>
  );
}


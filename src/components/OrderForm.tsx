import { useState } from 'react';
import { Send, CheckCircle2, Loader2, User, Phone, MapPin } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function OrderForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !location.trim()) return;

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('towing_orders').insert({
      name: name.trim(),
      phone: phone.trim(),
      location: location.trim(),
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Не удалось отправить заявку. Позвоните нам по телефону.');
      return;
    }

    setStatus('success');
    setName('');
    setPhone('');
    setLocation('');
  };

  if (status === 'success') {
    return (
      <section id="order" className="py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <div className="animate-scale-in rounded-3xl border border-amber/40 bg-ink2 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber/15 text-amber">
              <CheckCircle2 className="h-9 w-9" strokeWidth={2} />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold">Заявка принята!</h3>
            <p className="mt-2 text-white/70">
              Диспетчер перезвонит вам в течение нескольких минут.
              Спасибо, что выбрали нас.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Отправить ещё одну заявку
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-16 sm:py-20">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Быстрая заявка
          </h2>
          <p className="mt-3 text-white/60">
            Заполните форму — диспетчер перезвонит вам за пару минут.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-3xl border border-white/10 bg-ink2 p-6 shadow-xl sm:p-8"
        >
          <div className="space-y-4">
            <Field icon={User} label="Ваше имя">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как к вам обращаться"
                className="w-full bg-transparent text-white placeholder-white/40 outline-none"
              />
            </Field>

            <Field icon={Phone} label="Телефон">
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+7 (___) ___-__-__"
                className="w-full bg-transparent text-white placeholder-white/40 outline-none"
              />
            </Field>

            <Field icon={MapPin} label="Где находится авто">
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Адрес или ориентир"
                className="w-full bg-transparent text-white placeholder-white/40 outline-none"
              />
            </Field>
          </div>

          {status === 'error' && (
            <p className="mt-4 rounded-xl bg-red-500/15 px-4 py-3 text-sm text-red-300">
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-amber px-6 py-4 text-lg font-extrabold text-ink transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
          >
            {status === 'loading' ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" strokeWidth={2.5} />
            )}
            {status === 'loading' ? 'Отправляем…' : 'Вызвать эвакуатор'}
          </button>
          <p className="mt-3 text-center text-xs text-white/40">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof User;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white/70">
        {label}
      </span>
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 transition-colors focus-within:border-amber">
        <Icon className="h-5 w-5 shrink-0 text-amber" />
        {children}
      </div>
    </label>
  );
}

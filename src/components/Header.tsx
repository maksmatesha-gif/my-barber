import { useState } from 'react';
import { Truck, Clock, Phone, Menu, X } from 'lucide-react';

const PHONE = '+375 (29) 570-08-48';
const PHONE_HREF = 'tel:+375295700848';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber text-ink">
              <Truck className="h-6 w-6" strokeWidth={2.5} />
            </span>
            <span className="text-xl font-extrabold tracking-tight">
              Эвакуатор<span className="text-amber">-24</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 sm:flex">
            <span className="flex items-center gap-1.5 text-sm text-white/70">
              <Clock className="h-4 w-4 text-amber" />
              Круглосуточно, 24/7
            </span>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 rounded-full bg-amber px-5 py-2 text-base font-bold text-ink transition-transform hover:scale-105 active:scale-95"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              {PHONE}
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white sm:hidden"
            aria-label="Меню"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="animate-fade-in border-t border-white/10 py-4 sm:hidden">
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-1.5 text-sm text-white/70">
                <Clock className="h-4 w-4 text-amber" />
                Круглосуточно, 24/7
              </span>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-base font-bold text-ink"
              >
                <Phone className="h-4 w-4" strokeWidth={2.5} />
                {PHONE}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

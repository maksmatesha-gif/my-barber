import { Truck, Send, MessageCircle } from 'lucide-react';

const PHONE_HREF = 'tel:+375295700848';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink2">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber text-ink">
                <Truck className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="text-lg font-extrabold">
                Эвакуатор<span className="text-amber">-24</span>
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-white/50">
              Круглосуточная служба эвакуации автомобилей. Быстрая подача,
              честные цены, опытные водители.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:items-end">
            <a
              href={PHONE_HREF}
              className="text-lg font-bold text-amber transition-opacity hover:opacity-80"
            >
              +375 (29) 570-08-48
            </a>
            <div className="flex items-center gap-3">
              <a
                href={PHONE_HREF}
                aria-label="Позвонить"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-amber hover:text-ink"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/375295700848"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-amber hover:text-ink"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/40 sm:text-left">
            © {new Date().getFullYear()} Эвакуатор-24. Все права защищены.
          </p>
          <p className="mt-2 text-center text-xs text-white/30 sm:text-left">
            Информация на сайте не является публичной офертой. Политика
            конфиденциальности и обработка персональных данных — placeholder.
          </p>
        </div>
      </div>
    </footer>
  );
}

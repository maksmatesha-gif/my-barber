import { Phone } from 'lucide-react';

const PHONE_HREF = 'tel:+375295700848';

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-2 bg-amber py-4 text-base font-extrabold text-ink shadow-[0_-4px_20px_rgba(0,0,0,0.4)]"
      >
        <Phone className="h-5 w-5" strokeWidth={2.5} />
        Позвонить
      </a>
    </div>
  );
}

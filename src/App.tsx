import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PriceCalculator from '@/components/PriceCalculator';
import Benefits from '@/components/Benefits';
import OrderForm from '@/components/OrderForm';
import Footer from '@/components/Footer';
import MobileCallBar from '@/components/MobileCallBar';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main>
        <Hero />
        <PriceCalculator />
        <Benefits />
        <OrderForm />
      </main>
      <Footer />
      <MobileCallBar />
      <div className="h-16 sm:hidden" />
    </div>
  );
}

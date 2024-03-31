import './App.css';
import { SpotlightPreview } from './components/Spotlightp';
import Footer from './components/footer';
import Cpartners from './components/cPartners';

import HeaderComponent from './components/navHeader';

function App() {
  return (
    <div>
      <HeaderComponent />
      <section>
        <SpotlightPreview />

        <Cpartners />
      </section>
      <Footer />
    </div>
  );
}

export default App;

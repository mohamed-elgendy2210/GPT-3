import Navbar from './components/Navbar.jsx';
import Header from './containers/Header.jsx';
import Brand from './containers/Brand.jsx';
import WhatGPT3 from './containers/WhatGPT3.jsx';
import Features from './containers/Features.jsx';
import Possibility from './containers/Possibility.jsx';
import CTA from './containers/CTA.jsx';
import Blog from './containers/Blog.jsx';
import Footer from './containers/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Header />
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

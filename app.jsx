/* app.jsx — assembles the page */

function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Timeline />
        <RagShowcase />
        <BigInput />
        <Marquee />
        <Process />
        <WhyIndia />
        <Faq />
      </main>
      <FooterCta />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

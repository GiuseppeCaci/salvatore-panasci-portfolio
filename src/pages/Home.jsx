import React from "react";
import useTransitionPage from "../useHooks/UseTransitionPage";
const Home = () => {

  const isVisible = useTransitionPage();

  return (
    <>
      <section className="pt-2 pb-2 section-home">
        <div className="container text-start my-5 px-3">
          <h2 className="display-5">
            Promuovere il benessere attraverso l'innovazione digitale
            e l'approccio neuropsicologico
          </h2>
          <p className="lead fw-normal">
            Benvenuti nel futuro della neuropsicologia. Con un forte impegno
            verso la digitalizzazione dell'istruzione, studio per offrire soluzioni per
            migliorare l'apprendimento e il benessere mentale. Integrando
            neuroscienze e nuove tecnologie, come il web 3.0 e piattaforme
            innovative, il mio obiettivo è creare un sistema educativo
            accessibile e inclusivo. Scopri come la tecnologia può diventare
            alleata del tuo benessere cognitivo.
          </p>
        </div>
      </section>
      <section className="py-5 my-4 section-hero1">
        <div className="container text-start my-4 px-3">
          <h1 className="display-5">Scopri chi sono</h1>
          <p className="lead fw-normal">
          Scopri il mio percorso e le competenze che metto al servizio del tuo sviluppo personale.
          </p>
          <div className="d-flex justify-content-center">
            <a href="/about" className="btn button-blue btn-lg mt-3">
             Clicca qui
            </a>
          </div>
        </div>
      </section>
      <section className="py-5 section-hero2">
        <div className="container text-start my-4 px-3">
          <h1 className="display-5">Blog</h1>
          <p className="lead fw-normal">
          Esplora articoli e risorse per rimanere aggiornato su come la neuropsicologia può migliorare la vita quotidiana.
          </p>
          <div className="d-flex justify-content-center">
            <a href="/blog" className="btn button-yellow btn-lg mt-3">
            Clicca qui
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

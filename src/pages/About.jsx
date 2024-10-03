import React from "react";

const About = () => {
  return (
    <>
      <section className="py-5 section-about-hero">
        <div className="container text-start mt-2 mb-1 px-4">
          <h4 className="display-4">Salvatore Panasci</h4>
          <p>Studente di Neuropsicologia</p>
          <p className="lead fw-normal">
            Sono un appassionato di neuroscienze e innovazione educativa,
            impegnato a esplorare come la tecnologia possa migliorare
            l'apprendimento e il benessere mentale. La mia formazione in
            neuropsicologia mi ha fornito una solida base scientifica e pratiche
            per affrontare le sfide cognitive. Scopri di più sulle mie
            competenze, aree di interesse e obiettivi personali nelle sezioni
            sottostanti.
          </p>
        </div>
      </section>
      <section className="py-4 container-yellow">
        <div className="container">
    <h4 className="display-5 pb-3">Formazione</h4>
    <div className="position-relative">
      <div className="row">
        <div className="col-md-6">
          <div className="timeline-item">
            <div className="timeline-date">2024 - In Corso</div>
            <div className="timeline-content">
              <h5>Laurea Magistrale in Psicologia Clinica (Neuropsicologia)</h5>
              <p>Attualmente sto conseguendo la Laurea Magistrale in Psicologia Clinica con specializzazione in Neuropsicologia presso l'Università degli Studi di Palermo.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="timeline-item">
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h5>Laurea in Scienze e Tecniche Psicologiche</h5>
              <p>Ho conseguito la Laurea in Scienze e Tecniche Psicologiche, che mi ha fornito una solida base teorica e pratica nel campo della psicologia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>
      <section className="pt-5 pb-4 section-about-generic">
  <div className="container text-start mb-1 px-4">
    <h4 className="display-4">Competenze</h4>
    <p className="lead fw-normal">
      Ho sviluppato competenze trasversali nel campo della neuropsicologia e dell'educazione, tra cui:
    </p>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Analisi e valutazione delle capacità cognitive.</li>
      <li className="list-group-item">Creazione di strategie di apprendimento personalizzate.</li>
      <li className="list-group-item">Utilizzo di tecnologie educative e piattaforme digitali, come Moodle.</li>
      <li className="list-group-item">Problem solving e pensiero critico nella gestione delle difficoltà cognitive.</li>
      <li className="list-group-item">Empatia e abilità comunicative per il supporto a minori e famiglie.</li>
      <li className="list-group-item">Conoscenza delle neuroscienze applicate all'educazione.</li>
    </ul>
  </div>
</section>

<section className="pb-5 section-about-generic mt-2">
  <div className="container text-start mb-1 px-4">
    <h4 className="display-4">Aree di interesse</h4>
    <p className="lead fw-normal">
      Le mie aree di interesse spaziano dalla neuropsicologia all'educazione digitale. In particolare, mi concentro su:
    </p>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Neuroscienze e apprendimento.</li>
      <li className="list-group-item">Innovazione tecnologica nell'educazione.</li>
      <li className="list-group-item">Strategie di supporto per disturbi cognitivi.</li>
      <li className="list-group-item">Integrazione delle neuroscienze con metodologie didattiche.</li>
      <li className="list-group-item">Accessibilità e inclusione nel sistema educativo.</li>
      <li className="list-group-item">Progetti di digitalizzazione dell'istruzione.</li>
    </ul>
    <div className="d-flex justify-content-center mt-4">
      <a href="#services" className="btn btn-lg mt-4">
        Contattami
      </a>
    </div>
  </div>
</section>
<section className="py-5 container-blue">
  <div className="container text-start my-1 px-4">
    <h4 className="display-4 pb-3">Obiettivi personali</h4>
    <p className="lead fw-normal">
      I miei obiettivi personali si concentrano sul miglioramento continuo delle mie competenze in neuropsicologia e sull'innovazione educativa. Aspiro a:
    </p>
    <ul>
      <li>Ampliare la mia conoscenza delle neuroscienze per sviluppare strategie didattiche più efficaci.</li>
      <li>Promuovere l'uso della tecnologia per migliorare l'apprendimento e il benessere mentale.</li>
      <li>Contribuire a progetti di digitalizzazione dell'istruzione per garantire un'educazione accessibile a tutti.</li>
      <li>Collaborare con professionisti del settore per condividere esperienze e buone pratiche.</li>
      <li>Continuare a formarmi e a partecipare a seminari e corsi di aggiornamento nel campo della neuropsicologia.</li>
    </ul>
    <div className="d-flex justify-content-center mt-4">
      <a href="/blog" className="btn btn-lg mt-4">
        Scopri il mio Blog
      </a>
    </div>
  </div>
</section>
    </>
  );
};

export default About;

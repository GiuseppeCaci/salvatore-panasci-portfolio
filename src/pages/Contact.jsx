import React from "react";

const Contact = () => {
  return (
    <>
      <div className="h-base">
        <section className="py-5 section-contact">
          <div className="container text-center my-5 px-3">
            <h1 className="display-4">Contatti</h1>
            <p className="lead fw-normal">
              Per qualsiasi domanda, richiesta di informazioni o collaborazioni,
              non esitare a scrivermi. Sarò felice di risponderti il prima
              possibile.
            </p>
            <ul className="list-group list-group-flush mt-4">
              <li className="list-group-item">
                <i className="bi bi-envelope-fill fs-5"></i> <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>Mandami un Email</a>
              </li>
              <li className="list-group-item">
                <i className="bi bi-linkedin fs-5"></i><a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" > Visita il mio Linkedin</a>
              </li>
              <li className="list-group-item">
                <i className="bi bi-file-earmark-person-fill fs-5"></i> <a href={import.meta.env.VITE_CV_URL} download="curriculum-panasci.pdf">Scarica il mio Curriculum</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

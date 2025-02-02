export function About() {
    return (
        <div className="p-4 pt-5 d-lg-flex about">
          <div className="me-info">
              <p>Hi, my name is</p>
              <h1>Alexia Chan.</h1>
              <p className="pt-4 pb-2 summary">I am studying Informatics at the University of Washington with a concentration in Software Development. My interests include Front-End Development and UX Design.</p>
              <a href="#projects" className="text-decoration-none checkOutWork">Check out my work!</a>
          </div>
          <div className="d-none d-lg-block me-pic">
              <img src="/img/me.jpeg" alt="me at the beach :0" className="rounded-circle"/>
          </div>
        </div>
    )
}
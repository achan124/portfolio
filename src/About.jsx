export function About() {
    return (
        <div className="about">
          <div className="me-info">
              <p>Hi, my name is</p>
              <h1>Alexia Chan.</h1>
              <p className="summary">I am studying Informatics at the University of Washington with a concentration in Software Development. My interests include Front-End Development and UX Design.</p>
              <button className="checkOutButton"><a href="#projects">Check out my work!</a></button>
          </div>
          <div className="me-pic">
              <img src="/img/me.jpeg" alt="me at the beach :0" />
              {/* <img src="img/cartoonMe.png" alt="me if i was a cartoon" /> */}
          </div>
        </div>
    )
}
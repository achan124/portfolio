export function ContactForm() {
    return (
        <div className="contactForm" id="contact">
          <h2>Send me a Message!</h2>
          <form action="mail.php" method="POST">
              <div className="formInputs">
                  <div className="visitorContactInfo">
                      <div className="name">
                          <label htmlFor="nameInput">Name</label>
                          <input type="text" id="nameInput" name="name" />
                      </div>
                      <div className="email">
                          <label htmlFor="emailInput">Email</label>
                          <input type="email" id="emailInput" name="email" />
                      </div>
                  </div>

                  <div>
                      <label htmlFor="subjectInput">Subject</label>
                      <input type="text" id="subjectInput" name="subject" />

                      <label htmlFor="messageInput">Message</label>
                      <textarea id="messageInput" name="message" rows="12"></textarea>
                  </div>
                  <div className="submitForm">
                      <button type="submit">Submit</button>
                  </div>
              </div>

          </form>
      </div>
    )
}
export function ContactForm() {
    return (
        <div className="d-none d-lg-block m-auto rounded-5 mb-5 contactForm" id="contact">
          <h2 className="pt-5">Send me a Message!</h2>
          <form action="mail.php" method="POST">
              <div className="pb-5 formInputs">
                  <div className="d-flex flex-grow-2 gap-5 mb-4">
                      <div className="w-100">
                          <label htmlFor="nameInput">Name</label>
                          <input type="text" id="nameInput" name="name" className="w-100 rounded-4 border-0 p-1"/>
                      </div>
                      <div className="w-100">
                          <label htmlFor="emailInput">Email</label>
                          <input type="email" id="emailInput" name="email" className="w-100 rounded-4 border-0 p-1"/>
                      </div>
                  </div>

                  <div>
                      <label htmlFor="subjectInput">Subject</label>
                      <input type="text" id="subjectInput" name="subject" className="w-100 rounded-4 border-0 mb-4 p-1"/>

                      <label htmlFor="messageInput">Message</label>
                      <textarea id="messageInput" name="message" rows="8" className="w-100 rounded-4 border-0 mb-4"></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                      <button type="submit">Submit</button>
                  </div>
              </div>

          </form>
      </div>
    )
}
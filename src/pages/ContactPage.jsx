import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";

export function ContactPage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody d-md-flex gap-5 justify-content-center">

                <div className="contact-form-container mt-5 p-5">
                    <h2 className="contact-header">Contact Me</h2>
                    <p className="form-label pt-3 mb-3 me-5">
                        Have a question? An open position? Want to give me feedback? Send an email!
                    </p>

                    <div className="d-flex gap-3 align-items-center">
                        <span className="material-symbols-outlined">mail</span>
                        <p className="contact-email pt-3">Email</p>
                    </div>
                    <p className="form-label">alexiachan24@gmail.com</p>
                    
                    <div className="d-flex gap-3 mt-md-5 pt-5">
                        {/* GitHub */}
                        <a href="https://github.com/achan124" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                        </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/alexiachan1" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#4071B0" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                        </a>
                    </div>
                </div>

                <div className="contact-form-container mt-5 p-5" style={{backgroundColor: "white"}}>
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}

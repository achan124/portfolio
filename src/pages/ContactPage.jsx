import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";

export function ContactPage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody d-xl-flex justify-content-center">
                <div className="contact-form-container mt-5 p-5">
                    <h2 className="contact-header">Contact</h2>
                    <p className="pt-3 mb-3 me-5">
                        Have a question? An open position? Want to give me feedback? Send an email!
                    </p>

                    <div className="d-flex gap-3 align-items-center">
                        <span className="material-symbols-outlined">mail</span>
                        <p className="pt-3" style={{fontWeight: "600"}}>alexiachan24@gmail.com</p>
                    </div>
                </div>

                <div className="contact-form-container p-5 m-xl-5" style={{backgroundColor: "white"}}>
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}

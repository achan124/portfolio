import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";

export function ContactPage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody">
                <div className="mt-5 pt-5">
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}

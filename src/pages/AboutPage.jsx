import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function AboutPage() {
    return (
        <div>
            <Navbar />
            <div className="contentBody">
                <h1 style={{fontSize: 50}} className="text-center">About me</h1>
            </div>
            <Footer />
        </div>
    )
}

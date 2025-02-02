export function Experience() {
    const experienceInfo = [
        {
            role: "Seasonal Specialist",
            location: "Bellevue, WA",
            company: "Apple",
            dates: "July 2024 - Jan 2025",
            desc: ["Identify and address customer needs by offering personalized solutions, guiding them through product selection, and facilitating setup.",
                   "Conduct Vision Pro demonstrations, effectively showcasing advanced product features and capabilities to enhance their understanding and experience.",
                   "Manage various responsibilities such as visual merchandising and team support, while staying informed about new products and initiatives."]
        },
        {
            role: "Hostess, Server",
            location: "Bellevue, WA",
            company: "Supreme Dumplings",
            dates: "May 2023 - Aug 2024",
            desc: ["Manage Yelp reservation system as hostess, attending to customer needs and ensuring efficient table turnover.",
                   "Regulate a high-volume section as server, communicating with kitchen staff to confirm timely and accurate delivery of orders, establishing guest satisfaction.",
                   "Address guest concerns and complaints promptly and effectively, creating positive customer experiences."]
        },
        {
            role: "Post-Liver Transplant Student Assistant",
            location: "Seattle, WA",
            company: "UW Medical Center",
            dates: "Feb 2022 - May 2023",
            desc: ["Entered Post-Liver Transplant lab data into Epic for physician review, and coordinated with external laboratories to expedite the location and input of pending results, ensuring accurate and timely documentation.",
                   "Managed immunosuppression review reports and followed up with patients to address overdue lab tests and ensure adherence to UW care standards.",
                   "Educated patients on lab protocols and dose change procedures, effectively conveying physician’s results notes and providing guidance on scheduling future bloodwork."]
        },
        {
            role: "Brand Ambassador",
            location: "Tukwila, WA",
            company: "Old Navy",
            dates: "Jul 2020 - Jul 2021",
            desc: ["Operated as the main cashier, efficiently handling customer transactions, online orders, and returns.",
                   "Contributed to an average of 40% of the daily credit card applications.",
                   "Ensured store cleanliness, organized and folded clothes, managed fitting rooms, and implemented thorough COVID safety measures, while assisting customers with product information and inquiries."]
        }
    ]

    return (
        <>
            <h2 id="experience">Experience</h2>
            <div className="d-flex flex-column align-items-center gap-4 mb-5 experience">
                {experienceInfo.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience}/>
                ))}
            </div>
        </>
    )
}

function ExperienceCard({ experience }) {
    return (
        <div className="d-flex flex-column bg-white rounded-5 p-4 exCard">
            <div className="pt-3 d-lg-flex justify-content-lg-between">
                <h4>{experience.role}</h4>
                <p>{experience.location}</p>
            </div>
            <div className="d-lg-flex justify-content-lg-between">
                <h3>{experience.company}</h3>
                <p>{experience.dates}</p>
            </div>
            <ul className="pt-4 ps-3">
                {experience.desc.map((info, index) => (
                    <li key={index}className="ps-2"><span className="jobDesc">{info}</span></li>
                ))}
            </ul>
        </div>
    )
}
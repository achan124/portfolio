export function Experience() {
    const experienceInfo = [
        {
            role: "Seasonal Specialist",
            location: "Bellevue, WA",
            company: "Apple",
            dates: "July 2024 - Jan 2025",
            desc: ["Helped offer personalized solutions and guidance through product selection.",
                   "Facilitated device setup and troubleshooted issues",
                   "Conducted Vision Pro demonstrations, showcasing features and capabilities"]
        },
        {
            role: "Hostess & Server",
            location: "Bellevue, WA",
            company: "Supreme Dumplings",
            dates: "May 2023 - Aug 2024",
            desc: ["Managed reservation system and served guests, ensuring efficient table turnover and guest satisfaction"]
        },
        {
            role: "Post-Liver Transplant Student Assistant",
            location: "Seattle, WA",
            company: "UW Medical Center",
            dates: "Feb 2022 - May 2023",
            desc: ["Entered transplant lab data into Epic for physician review and coordinated with external laboratories to locate and input pending results.",
                   "Managed immunosuppression review reports and followed up with patients regarding overdue labs, ensuring adherence to UW care standards.",
                   "Educated patients on lab protocols and dose change procedures, conveying physician’s results notes, and providing guidance on bloodwork scheduling."]
        },
        {
            role: "Brand Ambassador",
            location: "Tukwila, WA",
            company: "Old Navy",
            dates: "Jul 2020 - Jul 2021",
            desc: ["Operated as cashier, handling customer transactions, online orders, and returns.",
                   "Contributed to an average of 40% of the daily credit card applications."]
        }
    ]

    return (
        <>
            <h2 id="experience" className="mt-5 pt-5">Experience</h2>
            <div className="mb-5 pb-5">
                {experienceInfo.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience}/>
                ))}
                <div className="d-flex justify-content-end mt-3">
                    <a href='/files/RESUME.pdf' target="_blank">See full resume</a>
                </div>
            </div>
        </>
    )
}

function ExperienceCard({ experience }) {
    return (
        <div className="mt-4 p-4 experienceCard">
            <div >
                <h4 className="role">{experience.role}</h4>
            </div>
            <div className="d-xxl-flex justify-content-between">
                <h3>{experience.company}</h3>
                <p>{experience.dates}</p>
            </div>
            <div className="pt-3">
                {experience.desc.map((info, index) => (
                    <p key={index}>{info}</p>
                ))}
            </div>
        </div>
    )
}
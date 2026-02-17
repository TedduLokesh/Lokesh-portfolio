function Contact() {
    return (
        <section id="contact" className="py-20 bg-black text-white text-center px-6">

            <h2 className="text-3xl font-bold text-blue-400 mb-8">
                Contact Me
            </h2>

            <p className="text-gray-400 mb-8">
                I'm actively seeking entry-level Software Engineering opportunities.
                Feel free to reach out through email or connect with me on LinkedIn.
            </p>

            <div className="space-y-4">

                {/* Email */}
                <p>
                    {" "}
                    <a
                        href="mailto:tedduloki@gmail.com"
                        className="text-blue-400 hover:underline"
                    >
                        tedduloki@gmail.com
                    </a>
                </p>

                {/* LinkedIn */}
                <p>
                    {" "}
                    <a
                        href="https://www.linkedin.com/in/lokesh-teddu-662ba235a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        LinkedIn
                    </a>
                </p>

                {/* GitHub */}
                <p>
                    {" "}
                    <a
                        href="https://github.com/TedduLokesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        GitHub
                    </a>
                </p>

            </div>

        </section>
    )
}

export default Contact

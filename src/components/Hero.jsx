function Hero() {
    return (
        <section className="min-h-screen flex items-center bg-black text-white px-6">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">

                {/* Left Side - Text */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I'm <span className="text-blue-400">Teddu Lokesh</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
                        Full Stack Developer | Java & MERN Stack
                    </h2>

                    <p className="text-gray-400 mb-8">
                        Passionate developer focused on building scalable web applications
                        and solving real-world problems using modern technologies.
                        Actively seeking entry-level software engineering opportunities.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="/resume.pdf"
                            className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
                        >
                            Download Resume
                        </a>

                        <a
                            href="https://github.com/TedduLokesh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-black transition"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center">
                    <img
                        src="/profile.jpg"
                        alt="Teddu Lokesh"
                        className="w-72 h-72 rounded-full object-cover border-4 border-blue-400"
                    />
                </div>

            </div>

        </section>
    )
}

export default Hero

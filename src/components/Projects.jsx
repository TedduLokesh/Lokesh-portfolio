function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-black text-white">
            <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
                Projects
            </h2>

            <div className="max-w-5xl mx-auto space-y-8">

                {/* Major Project */}
                <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-3">
                        NextGen Traffic Surveillance and Control System
                    </h3>
                    <p className="text-gray-300 mb-4">
                        AI-powered traffic management system using YOLO,
                        OpenCV and Deep Learning for accident detection,
                        e-challan generation and adaptive signal control.
                    </p>
                </div>

                {/* Minor Project */}
                <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-3">
                        Air Quality & Hazardous Gas Detection using IoT
                    </h3>
                    <p className="text-gray-300 mb-4">
                        IoT-based real-time gas monitoring system using
                        ESP32, MQ135 and MQ2 sensors with PPM tracking
                        and safety alerts.
                    </p>
                </div>

                {/* Third Project with GitHub Button */}
                <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-semibold mb-3">
                        Zithara Task Project
                    </h3>
                    <p className="text-gray-300 mb-4">
                        Full-stack web application built as part of a
                        technical assignment demonstrating frontend and
                        backend integration skills.
                    </p>

                    <a
                        href="https://github.com/TedduLokesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-500 transition"
                    >
                        View on GitHub
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Projects

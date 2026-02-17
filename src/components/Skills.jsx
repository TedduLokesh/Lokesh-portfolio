function Skills() {
    return (
        <section id="skills" className="py-20 px-6 bg-black text-white">
            <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
                Skills
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">

                {/* Core Programming */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Core Programming</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-gray-800 px-4 py-2 rounded">Java</span>
                        <span className="bg-gray-800 px-4 py-2 rounded">JavaScript</span>
                    </div>
                </div>

                {/* Frontend */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-gray-800 px-4 py-2 rounded">React.js</span>
                        <span className="bg-gray-800 px-4 py-2 rounded">HTML</span>
                        <span className="bg-gray-800 px-4 py-2 rounded">CSS</span>
                    </div>
                </div>

                {/* Backend */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-gray-800 px-4 py-2 rounded">Node.js</span>
                        <span className="bg-gray-800 px-4 py-2 rounded">Express.js</span>
                        <span className="bg-gray-800 px-4 py-2 rounded">MongoDB</span>
                        <span className="bg-gray-800 px-4 py-2 rounded">REST APIs</span>
                    </div>
                </div>

                {/* Tools */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Tools</h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="bg-gray-800 px-4 py-2 rounded">Git</span>
                        <span className="bg-gray-800 px-4 py-2 rounded">VS Code</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills

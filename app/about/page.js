/**
 *  This page:
 *      - Has information about me and my research
 *      - Uses the "prose" class from the typography plugin for nice formatting
 *      - Includes contact information
 */

export default function About() {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">About This Research</h1>

            <div className="prose max-w-none">
                <p>
                    Welcome to my research blog focused on learning and developing machine learning
                    solutions for early detection of neurological disorders.
                </p>

                <h2>Research Goals</h2>
                <p>
                    My primary goal is to develop open-source machine learning models that can identify
                    early signs of neurological disorderse before they become clinically apparent.
                    Early detection can lead to earlier interventions, better outcomes, and improved
                    quality of life for those affected.
                </p>

                <h2>Open Source Commitment</h2>
                <p>
                    All research, code, and findings shared on this blog are open-source and freely
                    available. I believe in collaborative science and the power of shared knowledge
                    to accelerate progress in critical fields like neurology and machine learning.
                </p>

                <h2>Contact</h2>
                <p>
                    Feel free to reach out with questions, collaboration proposals, or feedback at:
                    <br />
                    <a href="mailto:cameronbrady1527@gmail.com" className="text-indigo-600 hover:text-indigo-800">
                        cameronbrady1527@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}
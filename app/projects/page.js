/**
 *  This page:
 *      - Displays a list of my research projects
 *      - Shows status badges for each project
 *      - Links to GitHub repositories
 */

import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "EEG Signal Analysis for Seizure Prediction",
      description: "An ML pipeline for processing EEG signals to detect patterns that may precede seizure activity.",
      githubUrl: "https://github.com/yourusername/eeg-seizure-prediction",
      status: "In Progress"
    },
    {
      title: "Neuroimaging Dataset Preprocessor",
      description: "Tools for cleaning and preparing neuroimaging data for ML model training.",
      githubUrl: "https://github.com/yourusername/neuro-preprocessor",
      status: "Completed"
    },
    {
      title: "Parkinson's Motor Symptom Detector",
      description: "Computer vision system to detect subtle motor symptoms associated with early Parkinson's disease.",
      githubUrl: "https://github.com/yourusername/parkinsons-cv-detector",
      status: "Planning"
    }
  ];
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Research Projects</h1>
      <p className="text-lg text-gray-700 mb-8">
        A collection of open-source projects related to neurological disorder detection.
        All code and documentation is freely available on GitHub.
      </p>
      
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <span className={`px-3 py-1 text-sm rounded-full ${
                project.status === "Completed" ? "bg-green-100 text-green-800" :
                project.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                "bg-yellow-100 text-yellow-800"
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
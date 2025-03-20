"use client";

/**
 *  This component:
 *      - Is marked as "use client" because its interactive
 *      - Uses Recharts to create data visualizations
 *      - Has default data but can accept data as props
 *      - Shows both a line chart and a bar chat
 */

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const MLVisualizationDemo = ({ data }) => {
    const performanceData = data?.performance || [
        { name: 'Day 1', accuracy: 0.65, precision: 0.61, recall: 0.58 },
        { name: 'Day 5', accuracy: 0.72, precision: 0.69, recall: 0.67 },
        { name: 'Day 10', accuracy: 0.78, precision: 0.75, recall: 0.74 },
        { name: 'Day 15', accuracy: 0.83, precision: 0.81, recall: 0.79 },
        { name: 'Day 20', accuracy: 0.87, precision: 0.84, recall: 0.85 },
        { name: 'Day 25', accuracy: 0.89, precision: 0.87, recall: 0.86 },
        { name: 'Day 30', accuracy: 0.91, precision: 0.89, recall: 0.88 },
    ];

    // Sample data for different neurological conditions
    const conditionData = data?.conditions || [
        { name: 'Alzheimer\'s', accuracy: 0.88, samples: 240 },
        { name: 'Parkinson\'s', accuracy: 0.85, samples: 180 },
        { name: 'Multiple Sclerosis', accuracy: 0.82, samples: 150 },
        { name: 'Epilepsy', accuracy: 0.91, samples: 200 },
        { name: 'Stroke', accuracy: 0.87, samples: 220 },
    ];
    
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Model Performance Over Time</h2>
                <p className="text-gray-600 mb-4">
                    Tracking the improvement of out early detection model as we refine our approach and incorporate more training data.
                </p>

                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={performanceData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0.5, 1]} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="accuracy" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="precision" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="recall" stroke="#ffc658" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-4">Detection Accuracy by Condition</h2>
                <p className="text-gray-600 mb-4">
                Comparing our model's performance across different neurological conditions.
                </p>
                
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={conditionData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis domain={[0.7, 1]} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="accuracy" fill="#8884d8" name="Detection Accuracy" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <h3 className="font-semibold mb-2">Key Findings</h3>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Model performance shows steady improvement over the 30-day training period</li>
                    <li>Best accuracy achieved for Epilepsy detection (91%)</li>
                    <li>Multiple Sclerosis remains the most challenging condition to detect</li>
                    <li>Further training with specialized EEG datasets may improve results for MS</li>
                </ul>
            </div>
        </div>
    );
};

export default MLVisualizationDemo;

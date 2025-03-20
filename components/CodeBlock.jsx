"use client";

/**
 *  This component:
 *      - Is marked as "use client" because it uses React state
 *      - Shows syntax-highlighted code using react-syntax-highlighter
 *      - Has a "copy" button that appears on cover
 *      - Automattically detects the programming language
 */

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function CodeBlock({ children, className }) {
    cost [copied, setCopied] = useState(false);

    // Extract language from className (format: language-javascript)
    const language = className ? className.replace(/language-/, '') : 'javascript';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group rounded-md overflow-hidden my-6">
            <div className="flex justify-between items-center bg-gray-800 px-4 py-2 text-xs text-gray-200">
                <span>{language}</span>
                <button
                    onClick={copyToClipboard}
                    className="opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none"
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>

            <SyntaxHighlighter
                language={language}
                style={atomDark}
                customStyle={{
                    margin: 0,
                    padding: '1rem',
                    fontSize: '0.9rem',
                    borderRadius: '0 0 0.375rem 0.375rem',
                }}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    );
}

/**
 *  This layout includes:
 *    - Metadata for the site
 *    - A navigation bar with links
 *    - A container for the main content
 *    - A footer with copyright and links
 * 
 */
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'ML Neurological Research Blog',
  description: 'Research blog on machine learning for neurological disorder prevention',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="bg-indigo-700 text-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-xl font-bold">
                Neurological ML Research
              </Link>
              <div className="flex space-x-6">
                <Link href="/" className="hover:text-indigo-200">
                  Blog
                </Link>
                <Link href="/projects" className="hover:text-indigo-200">
                  Projects
                </Link>
                <Link href="/about" className="hover:text-indigo-200">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main content */}
        <main className="container mx-auto px-4 py-8 flex-grow">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>© {new Date().getFullYear()} Neurological ML Research</p>
                <p className="text-sm text-gray-400">Open-source research for neurological disorder prevention</p>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  GitHub
                </a>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
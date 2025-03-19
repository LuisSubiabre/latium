import React, { useState, useEffect } from 'react';
import { Code2, ChevronDown, Globe, Cpu, Layers, Sun, Moon } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Software Web";
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <div className="min-h-screen relative flex flex-col">
        <nav className="absolute top-0 w-full p-6">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Latium</span>
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Servicios</a>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Nosotros</a>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contacto</a>
              </div>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Desarrollo de
              <span className="block text-indigo-600 dark:text-indigo-400 mt-2 min-h-[1.2em]">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Transformamos ideas en soluciones digitales innovadoras y escalables
            </p>
            <button className="bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors">
              Comenzar Proyecto
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400 dark:text-gray-500" />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Globe className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Aplicaciones Web</h3>
                <p className="text-gray-600 dark:text-gray-300">Soluciones web modernas y responsivas</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Cpu className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">APIs Robustas</h3>
                <p className="text-gray-600 dark:text-gray-300">Servicios backend escalables y seguros</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <Layers className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Arquitectura Moderna</h3>
                <p className="text-gray-600 dark:text-gray-300">Diseño de sistemas optimizados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
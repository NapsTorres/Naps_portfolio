import { MapPin, Mail, BadgeCheck, Coffee, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImageDark from "@/assets/Naps-dark.jpg";
import profileImageLight from "@/assets/Naps-white.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <section className="animate-fade-in">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Profile Image */}
        <div className="shrink-0">
          <img
            src={isDarkMode ? profileImageDark : profileImageLight}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-lg ring-2 ring-primary/10"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-4">
          <div>
            {/* Name with badge inline */}
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-4xl md:text-2xl font-bold tracking-tight flex items-center gap-2 dark:text-white">
                Napoleon R. Torres
                <BadgeCheck className="w-5 h-5 text-white fill-blue-500 stroke-white" />
              </h1>
              {/* Dark Mode Toggle Switch */}
              <button
                onClick={toggleDarkMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border-2 ${
                  isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-between px-1">
                  <Sun className={`w-3 h-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <Moon className={`w-3 h-3 ${isDarkMode ? 'text-white' : 'text-gray-400'}`} />
                </div>
              </button>
            </div>

            <div className="flex items-center gap-2 text-black-foreground dark:text-gray-300 mb-3">
              <MapPin className="w-4 h-4" />
              <span>Calabanga, Camarines Sur, Philippines</span>
            </div>

            <p className="text-l font-bold text-foreground/80 dark:text-gray-300">
              Data Engineer | Data Analyst | IT & Network Specialist | Web Developer
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=napoleontorres5@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-gray-800 text-white dark:bg-white dark:text-black hover:-translate-y-1 transition-all duration-200"
            >
              <Mail className="w-3 h-3" />
              <span className="font-semibold text-xs">Send Email</span>
            </a>
            <a
              href="https://buymeacoffee.com/ntorres"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-600 hover:-translate-y-1 transition-all duration-200"
            >
              <Coffee className="w-3 h-3" />
              <span className="font-semibold text-xs text-black dark:text-white">Buy me a coffee</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

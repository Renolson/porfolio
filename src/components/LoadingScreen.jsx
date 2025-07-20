import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import your profile picture
import profilePic from '/headshot.png'; // Ensure this path is correct

const LoadingScreen = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  const loadingTexts = [
    'Initializing Quantum Processors...',
    'Calibrating Neural Networks...',
    'Establishing Secure Connections...',
    'Compiling Core Modules...',
    'Synthesizing Reality Streams...',
    'System Online. Welcome.'
  ];

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0, transition: { duration: 1, ease: "easeOut" } },
    pulsate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0px rgba(59, 130, 246, 0)",
        "0 0 15px rgba(59, 130, 246, 0.6)",
        "0 0 0px rgba(59, 130, 246, 0)"
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  useEffect(() => {
    let progressInterval;
    const totalDurationMs = 3500; // 5 seconds total duration for the entire loading process
    const progressUpdateInterval = 50; // Update progress every 50ms (for smooth animation)
    const totalSteps = 100; // Progress goes from 0 to 100
    const delayBeforeFadeOut = 800; // How long to stay at 100% before fading out

    // Calculate how much progress to make per interval
    const progressIncrement = (100 / (totalDurationMs - delayBeforeFadeOut)) * progressUpdateInterval;

    const startLoading = () => {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + progressIncrement;
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            // Ensure progress is exactly 100 before setting timeout
            setProgress(100);
            setTimeout(() => {
              setShowLoadingScreen(false);
              if (onLoaded) onLoaded();
            }, delayBeforeFadeOut); // This is the fixed delay after 100%
            return 100; // Ensure it caps at 100
          }
          return newProgress;
        });
      }, progressUpdateInterval);
    };

    startLoading();

    return () => {
      clearInterval(progressInterval);
    };
  }, [onLoaded]);

  // Sync current text to progress
  useEffect(() => {
    const calculatedIndex = Math.floor((progress / 100) * loadingTexts.length);
    setCurrentTextIndex(Math.min(calculatedIndex, loadingTexts.length - 1));
  }, [progress, loadingTexts.length]);


  return (
    <AnimatePresence>
      {showLoadingScreen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-gray-950 to-purple-950 font-mono text-white overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          {/* Animated Matrix/Circuit Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Horizontal lines */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`h-line-${i}`}
                className="absolute left-0 w-full h-[1px] bg-blue-500/30 opacity-30"
                style={{ top: `${i * 5}%` }}
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 9 + i * 0.5, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
              />
            ))}
            {/* Vertical lines */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`v-line-${i}`}
                className="absolute top-0 h-full w-[1px] bg-purple-500/30 opacity-50"
                style={{ left: `${i * 5}%` }}
                initial={{ y: '-100%' }}
                animate={{ y: '100%' }}
                transition={{ duration: 12 + i * 0.01, repeat: Infinity, ease: "linear", delay: i * 0.005 }}
              />
            ))}
          </div>

          <div className="relative z-20 text-center flex flex-col items-center">
            {/* Main Logo/Icon Animation - now contains your picture */}
            <motion.div
              className="w-40 h-40 mx-auto mb-6 relative flex items-center justify-center rounded-full bg-blue-800/20"
              variants={logoVariants}
              initial="hidden"
              animate={progress < 100 ? ["visible", "pulsate"] : "visible"}
            >
              <motion.div
                className="absolute inset-0 border-4 border-blue-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 border-2 border-purple-400 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
              {/* Replaced 'SR' text with your profile picture */}
              <motion.div
                className="w-35 h-35 rounded-full overflow-hidden flex items-center justify-center" // Smaller inner div to show border
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <img
                  src={profilePic}
                  alt="Sahayanathan Renolson"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </motion.div>

            {/* Name Animation */}
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2 drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Sahayanathan Renolson
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-300 mb-12 tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              Electrical & Electronic Engineer
            </motion.p>

            {/* Progress Bar */}
            <div className="w-96 mx-auto mb-6 bg-gray-800 rounded-full h-3 relative shadow-inner">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-md"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-white z-10">
                {Math.round(progress)}% {/* Use Math.round to display whole numbers */}
              </span>
            </div>

            {/* Dynamic Loading Text */}
            <motion.p
              className="text-lg md:text-xl text-blue-300 h-8 overflow-hidden"
              key={loadingTexts[currentTextIndex]}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {loadingTexts[currentTextIndex]}
            </motion.p>

            {/* Small subtle dots near the text, trailing */}
            <div className="flex gap-1 mt-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{ opacity: [0, 1, 0], y: [0, -5, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 * i }}
                />
              ))}
            </div>
          </div>

          {/* Glitch Overlay (Subtle) */}
          <motion.div
            className="absolute inset-0 bg-transparent opacity-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.05, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 + Math.random() * 5 }}
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,255,255,0.05) 1px, rgba(0,255,255,0.05) 2px)',
              backgroundSize: '100% 10px'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
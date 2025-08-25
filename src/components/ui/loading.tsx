import { motion } from 'framer-motion';

export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Enhanced loading spinner */}
        <div className="relative mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-4 border-gradient-to-r from-blue-500 to-purple-600 border-t-transparent rounded-full mx-auto"
            style={{
              background: 'conic-gradient(from 0deg, transparent, #3b82f6, #8b5cf6, transparent)',
              borderRadius: '50%',
              padding: '2px'
            }}
          />

          {/* Enhanced logo in center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute inset-0.5 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>

              {/* Logo text */}
              <span className="text-white font-bold text-lg tracking-tight relative z-10 drop-shadow-sm">AS</span>

              {/* Animated pulse effect */}
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl"
              />
            </div>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-slate-600 dark:text-slate-400 mt-2"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}

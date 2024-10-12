'use client';
import { Users } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Add this for smooth animations

function Form() {
  const [variant, setVariant] = useState('Login');

  // Toggle between Login and Signup
  const toggleVariant = () => {
    setVariant(prevVariant =>
      prevVariant === 'Login' ? 'Signup' : 'Login'
    );
  };

  // Framer Motion animation variants for smooth transitions
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      variants={formVariants}
      className="flex flex-col  items-center gap-[2.5rem] p-4 "
    >
      {/* Animated Logo */}
      <motion.div
        className="flex justify-center items-center bg-[#2aa7e1] rounded-full w-16 h-16"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Users className="w-10 h-10 text-gray-800" />
      </motion.div>

      <div className="flex flex-col gap-2">
        {variant === 'Signup' && (
          <input
            type="text"
            className="input-field"
            placeholder="Username"
          />
        )}

        <input
          type="text"
          className="input-field"
          placeholder="Email"
        />
        <input
          type="password"
          className="input-field"
          placeholder="Password"
        />
      </div>

      <div>
        <button className="submit-button">
          {variant === 'Login' ? 'Login' : 'Sign up'}
        </button>

        <motion.p
          className="mt-2 text-sm text-center transition duration-300 cursor-pointer text-white/40 hover:text-white/60"
          onClick={toggleVariant}
          whileHover={{ scale: 1.05 }}
        >
          {variant === 'Login'
            ? 'Don’t have an Account? Signup'
            : 'Already have an Account? Login'}
        </motion.p>
      </div>
    </motion.form>
  );
}

export default Form;

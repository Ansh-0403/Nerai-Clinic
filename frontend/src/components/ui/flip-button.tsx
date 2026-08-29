import { useState } from 'react'
import { motion } from 'framer-motion'

export function FlipButton({ text1, text2, onClick, type = "button", disabled = false }:{text1: string, text2: string, onClick?: () => void, type?: "button" | "submit" | "reset", disabled?: boolean}) {
  const [show, setShow] = useState(false)
  const flipVariants = {
    one: {
      rotateX: 0,
      backgroundColor: '#354A38', // primary
      color: '#B68D40', // tertiary gold
    },
    two: {
      rotateX: 180,
      backgroundColor: '#F6F4E8', // surface
      color: '#354A38', // primary text
    },
  }

  const handleClick = () => {
    if (disabled) return;
    setShow(!show);
    if (onClick) onClick();
  };

  return (
      <div className="w-full max-w-[300px]">
        <motion.button
          type={type}
          disabled={disabled}
          className="w-full cursor-pointer px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest border border-primary relative overflow-hidden"
          style={{
            borderRadius: 999,
          }}
          onClick={handleClick}
          animate={show ? 'two' : 'one'}
          variants={flipVariants}
          transition={{ duration: 0.6, type: 'spring' }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ backfaceVisibility: "hidden" }}>
            {text1}
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}>
            {text2}
          </div>
          {/* Invisible placeholder to give button size */}
          <div className="opacity-0">
            {text1}
          </div>
        </motion.button>
      </div>
  );
};

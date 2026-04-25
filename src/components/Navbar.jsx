import { motion } from 'framer-motion';
import { useState } from 'react';
import PillNav from './PillNav';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center w-full relative z-[1000]">
      <PillNav
        logoAlt="JZP"
        items={[
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Education', href: '#education' },
          { label: 'Portfolio', href: '#experience' },
          { label: 'Contact', href: '#contact' }
        ]}
        baseColor="var(--color-primary)"
        pillColor="var(--color-accent)"
        hoveredPillTextColor="var(--color-primary)"
        pillTextColor="var(--color-primary)"
      />
    </div>
  );
};


export default Navbar;

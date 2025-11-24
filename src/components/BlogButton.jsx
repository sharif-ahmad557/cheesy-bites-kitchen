import React from 'react';

const BlogButton = () => {
  
  const hoverColorClass = 'bg-amber-700'; 
  const borderColor = 'border-amber-700';

  return (
    <button 
      className={`
        relative 
        px-8 py-4 
        text-sm font-medium tracking-widest uppercase 
        text-amber-700 ${borderColor} border 
        bg-black 
        overflow-hidden 
        transition-colors duration-300 
        group 
        hover:text-black 
        focus:outline-none
      `}
    >
      
      <span 
        className={`
          absolute 
          inset-0 
          w-full h-full 
          ${hoverColorClass} 
          transform origin-top scale-y-0 
          group-hover:scale-y-100 
          transition-transform duration-500 
          ease-out
        `}
        aria-hidden="true"
      ></span>
      
      
      <span className="relative z-20">
        VIEW OUR BLOG
      </span>
    </button>
  );
};

export default BlogButton;
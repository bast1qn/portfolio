import { useState } from 'react';

const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute ${positionClasses[position]} px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-50 pointer-events-none`}
          style={{ minWidth: 'max-content' }}
        >
          {content}
          {/* Arrow */}
          <span className={`absolute ${
            position === 'top' ? 'top-full left-1/2 transform -translate-x-1/2 -mt-1' :
            position === 'bottom' ? 'bottom-full left-1/2 transform -translate-x-1/2 -mb-1' :
            position === 'left' ? 'left-full top-1/2 transform -translate-y-1/2 -ml-1' :
            'right-full top-1/2 transform -translate-y-1/2 -mr-1'
          } w-2 h-2 bg-gray-800 rotate-45`}></span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;

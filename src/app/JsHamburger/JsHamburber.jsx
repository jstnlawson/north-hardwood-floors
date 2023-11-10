import React, { useState } from 'react';

export default function JsHamburger() {
  const [isOpen, setIsOpen] = useState(false);

  
  const handleClick = () => {
      setIsOpen(!isOpen);
  };

return(
    
  <button onClick={handleClick} 
  className="flex flex-col justify-center items-center">
    <span className={`bg-northBeige block transition-all duration-300 ease-out 
                    h-1 w-[35px] rounded-sm ${isOpen ? 
                    'rotate-45 translate-y-1' : '-translate-y-[5px]'
                    }`} >
    </span>
    <span className={`bg-northBeige block transition-all duration-300 ease-out 
                    h-1 w-[35px] rounded-sm my-[ ${isOpen ? 
                    'opacity-0' : 'opacity-100'
                    }`} >
    </span>
    <span className={`bg-northBeige block transition-all duration-300 ease-out 
                    h-1 w-[35px] rounded-sm ${isOpen ? 
                    '-rotate-45 -translate-y-1' : 'translate-y-[5px]'
                    }`} >
    </span>    

  </button>
  
)
};
// hooks/useToggle.ts
import { useState } from 'react';

const useToggle = (): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState(false);

  const showSideBar = () => setIsOpen(!isOpen);

  return [isOpen, showSideBar];
};

export default useToggle;

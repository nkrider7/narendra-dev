import { useContext, createContext, useState } from "react";

const Switch = createContext();

const SwitchContext = ({ children }) => { 
    const [isdesign, setIsDesign] = useState(false)
    return (
        <Switch.Provider
          value={{
            isdesign, setIsDesign
          }}
        >
          {children}
        </Switch.Provider>
      );
    };

export default SwitchContext;

export const UseSwitch = () => {
    return useContext(Switch);
  };
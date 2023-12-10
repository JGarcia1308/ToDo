// ValorContext.js

import React, { createContext, useContext, useState } from 'react';

const ValorContext = createContext();

export const useValor = () => {
  return useContext(ValorContext);
};

export const ValorProvider = ({ children }) => {
  const [valor, setValor] = useState('');

  const actualizarValor = (nuevoValor) => {
    setValor(nuevoValor);
  };

  return (
    <ValorContext.Provider value={{ valor, actualizarValor }}>
      {children}
    </ValorContext.Provider>
  );
};

export default ValorContext;
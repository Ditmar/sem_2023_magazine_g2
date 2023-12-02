// context/SelectedContext.tsx
'use client';
import React, { createContext, useContext, useState } from 'react';

interface SelectedContextProps {
  selectedItem: string | null;
  setSelectedItem: (item: string | null) => void;
}

const SelectedContext = createContext<SelectedContextProps | undefined>(
  undefined
);

export const SelectedProvider: React.FC = ({}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <SelectedContext.Provider
      value={{ selectedItem, setSelectedItem }}
    ></SelectedContext.Provider>
  );
};

export const useSelectedContext = () => {
  const context = useContext(SelectedContext);

  if (!context) {
    throw new Error(
      'useSelectedContext must be used within a SelectedProvider'
    );
  }

  return context;
};

"use client";

import React, { useState, createContext, useContext, ReactNode } from "react";

interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (time: number) => void;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

interface ActiveSectionProviderProps {
  children: ReactNode;
}

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionProviderProps) {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}

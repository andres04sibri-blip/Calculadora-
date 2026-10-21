import React, { ReactNode } from 'react';

interface RejillaProps {
  children?: ReactNode;
}

export const Rejilla: React.FC<RejillaProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-2 w-full max-w-xs p-4 bg-slate-900 rounded-2xl shadow-xl">
      {children}
    </div>
  );
};

export default Rejilla;
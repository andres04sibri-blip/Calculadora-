import React from 'react';

interface BotonesProps {
  onButtonClick?: (val: string) => void;
}

export const Botones: React.FC<BotonesProps> = ({ onButtonClick }) => {
  const handleClick = (val: string) => {
    if (onButtonClick) onButtonClick(val);
  };

  return (
    <>
      {/* Fila 1 */}
      <button onClick={() => handleClick('C')} className="p-4 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 text-white rounded-xl font-semibold text-xl transition">C</button>
      <button onClick={() => handleClick('±')} className="p-4 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 text-white rounded-xl font-semibold text-xl transition">±</button>
      <button onClick={() => handleClick('%')} className="p-4 bg-slate-700 hover:bg-slate-600 active:bg-slate-500 text-white rounded-xl font-semibold text-xl transition">%</button>
      <button onClick={() => handleClick('÷')} className="p-4 bg-amber-600 hover:bg-amber-500 active:bg-amber-400 text-white rounded-xl font-semibold text-xl transition">÷</button>

      {/* Fila 2 */}
      <button onClick={() => handleClick('7')} className="p-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white rounded-xl font-semibold text-xl transition">7</button>
      <button onClick={() => handleClick('8')} className="p-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white rounded-xl font-semibold text-xl transition">8</button>
      <button onClick={() => handleClick('9')} className="p-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white rounded-xl font-semibold text-xl transition">9</button>
      <button onClick={() => handleClick('×')} className="p-4 bg-amber-600 hover:bg-amber-500 active:bg-amber-400 text-white rounded-xl font-semibold text-xl transition">×</button>

      {/* Fila 3 */}
      <button onClick={() => handleClick('4')} className="p-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white rounded-xl font-semibold text-xl transition">4</button>
      <button onClick={() => handleClick('5')} className="p-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white rounded-xl font-semibold text-xl transition">5</button>
      <button onClick={() => handleClick('6')} className="p-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white rounded-xl font-semibold text-xl transition">6</button>
      <button onClick={() => handleClick('-')} className="p-4 bg-amber-600 hover:bg-amber-500 active:bg-amber-400 text-white rounded-xl font-semibold text-xl transition">-</button>

      {/* Fila 4 */}
      <button onClick={() => handleClick('1')} className="p-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white rounded-xl font-semibold text-xl transition">1</button>
      <button onClick={() => handleClick('2')} className="p-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white rounded-xl font-semibold text-xl transition">2</button>
      <button onClick={() => handleClick('3')} className="p-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white rounded-xl font-semibold text-xl transition">3</button>
      <button onClick={() => handleClick('+')} className="p-4 bg-amber-600 hover:bg-amber-500 active:bg-amber-400 text-white rounded-xl font-semibold text-xl transition">+</button>

      {/* Fila 5 */}
      <button onClick={() => handleClick('0')} className="p-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white rounded-xl font-semibold text-xl transition col-span-2">0</button>
      <button onClick={() => handleClick('.')} className="p-4 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white rounded-xl font-semibold text-xl transition">.</button>
      <button onClick={() => handleClick('=')} className="p-4 bg-amber-600 hover:bg-amber-500 active:bg-amber-400 text-white rounded-xl font-semibold text-xl transition">=</button>
    </>
  );
};

export default Botones;
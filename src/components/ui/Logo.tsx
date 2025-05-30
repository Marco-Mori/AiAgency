import React from 'react';
// L'import di CircuitBoard può essere rimosso se non è più utilizzato.
// import { CircuitBoard } from 'lucide-react'; 

export const Logo = () => {
  return (
    <div className="flex items-center">
      <img src="../../../../Immagini/Logo.png" alt="Black AI Agency Logo" className="h-24" /> {/* Ajusta h-10 o altre classi Tailwind per lo stile desiderato */}
      {/* Se il tuo logo include già il nome dell'agenzia, puoi commentare o rimuovere lo span sottostante */}
      {/* <span className="text-xl font-bold text-white">Black AI Agency</span> */}
    </div>
  );
};
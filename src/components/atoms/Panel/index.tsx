import React from 'react';

export interface PanelProps {
  children: React.ReactNode;
}

export function Panel({ children }: PanelProps) {
  return (
    <section className="flex flex-col mb-10 p-5 w-full md:w-[500px] gap-1 bg-slate-800 rounded-3xl">
      {children}
    </section>
  );
}

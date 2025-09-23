"use client";

export function AppBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50" />
      <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-48 -right-40 w-[40rem] h-[40rem] rounded-full bg-indigo-200/40 blur-3xl" />
    </div>
  );
}

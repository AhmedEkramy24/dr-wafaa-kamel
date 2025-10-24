export default function Title({ children }: { children: string }) {
  return (
    <h1 className="md:text-3xl text-xl font-bold mb-4 text-slate-100 md:py-5 py-3 text-center title">
      {children}
    </h1>
  );
}

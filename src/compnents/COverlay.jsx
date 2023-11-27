export function COverlay({children}) {
  return (
    <>
      <div className={`absolute top-0 left-0 w-screen h-screen bg-black opacity-70 z-50`}>
        {children}
      </div>
    </>
  );
}

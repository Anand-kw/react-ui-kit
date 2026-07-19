

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-[3fr_1fr]">
      <img
        src="/images/loginImage.jpg"
        alt="Login"
        className="w-full h-screen object-cover"
      />
      <div className="flex flex-col gap-4 justify-center items-center h-screen w-full p-4">
        {children}
      </div>
    </div>
  );
}

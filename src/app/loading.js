export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gray-950">
      <div className="relative flex justify-center items-center">
        {/* Outer Ring */}
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-amber-700"></div>

        {/* Inner Ring */}
        <div className="absolute animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-amber-500 animation-delay-200"></div>

        {/* Center Logo or Dot */}
        <div className="rounded-full h-5 w-5 bg-amber-600 animate-pulse"></div>
      </div>
    </div>
  );
}

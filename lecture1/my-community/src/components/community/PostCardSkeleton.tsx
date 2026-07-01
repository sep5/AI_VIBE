export default function PostCardSkeleton() {
  return (
    <div className="bg-[#FDF4F6] border border-[#E8D8DC] rounded-2xl overflow-hidden animate-pulse">
      <div className="bg-[#E8DFC8]" style={{ aspectRatio: '4/3' }} />
      <div className="p-4 md:p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-[#E8DFC8]" />
          <div className="h-3 w-16 rounded-full bg-[#E8DFC8]" />
        </div>
        <div className="h-4 w-full rounded-full bg-[#E8DFC8] mb-2" />
        <div className="h-4 w-3/4 rounded-full bg-[#E8DFC8] mb-4" />
        <div className="flex gap-4">
          <div className="h-3 w-10 rounded-full bg-[#E8DFC8]" />
          <div className="h-3 w-10 rounded-full bg-[#E8DFC8]" />
        </div>
      </div>
    </div>
  );
}

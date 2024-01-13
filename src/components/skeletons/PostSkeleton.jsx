
const PostSkeleton = () => {
  return (
    <>
      <div className="flex flex-row gap-8 mb-12">
        <div className="skeleton h-60 w-2/6"></div>
        <div className="flex flex-col gap-6 w-3/6">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>

      <div className="flex flex-row gap-8 mb-12">
        <div className="skeleton h-60 w-2/6"></div>
        <div className="flex flex-col gap-6 w-3/6">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>

      <div className="flex flex-row gap-8 mb-12">
        <div className="skeleton h-60 w-2/6"></div>
        <div className="flex flex-col gap-6 w-3/6">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    </>
  );
};

export default PostSkeleton;
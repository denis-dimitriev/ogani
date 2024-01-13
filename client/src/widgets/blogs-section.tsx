import PostCard from "@shared/ui/post-card.tsx";

function BlogsSection() {
  return (
    <div className="flex h-full w-full flex-col items-center gap-[20px]">
      <h2>Our Blog Posts</h2>
      <div className="flex h-full w-full items-center justify-center gap-[24px]">
        <div className="col-md">
          <PostCard />
        </div>
        <div className="col-md">
          <PostCard />
        </div>
        <div className="col-md">
          <PostCard />
        </div>
      </div>
    </div>
  );
}

export default BlogsSection;

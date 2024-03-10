import Skeleton from "react-loading-skeleton";

function ProductCardSkeleton() {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded pb-3">
      <Skeleton className="h-[200px] min-w-[200px]" />
      <Skeleton className="mt-3 min-w-[180px]" />
      <Skeleton className="mt-2 h-2 min-w-[120px]" />
      <Skeleton className="mt-2 h-2 min-w-[90px]" count={2} />
    </div>
  );
}

export default ProductCardSkeleton;

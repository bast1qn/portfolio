const Skeleton = ({ className, variant = 'default' }) => {
  const baseClasses = 'animate-pulse bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%]';

  const variantClasses = {
    default: 'rounded',
    circular: 'rounded-full',
    text: 'h-4 rounded',
    title: 'h-8 rounded',
    card: 'rounded-xl',
    button: 'rounded-lg'
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className || ''}`}
      style={{
        animation: 'shimmer 1.5s infinite'
      }}
    />
  );
};

export const CardSkeleton = () => (
  <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
    <div className="h-48 bg-gray-700">
      <Skeleton className="w-full h-full" variant="card" />
    </div>
    <div className="p-6 space-y-4">
      <Skeleton className="h-8 w-3/4" variant="title" />
      <Skeleton className="h-4 w-full" variant="text" />
      <Skeleton className="h-4 w-full" variant="text" />
      <Skeleton className="h-4 w-2/3" variant="text" />
      <div className="flex gap-2 pt-4">
        <Skeleton className="h-8 w-16" variant="button" />
        <Skeleton className="h-8 w-16" variant="button" />
        <Skeleton className="h-8 w-16" variant="button" />
      </div>
    </div>
  </div>
);

export const TextSkeleton = ({ lines = 3 }) => (
  <div className="space-y-3">
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton key={i} className="h-4 w-full" variant="text" />
    ))}
  </div>
);

export default Skeleton;

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

export const ProjectSkeleton = () => (
  <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
    <div className="h-48">
      <Skeleton className="w-full h-full" variant="card" />
    </div>
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-3/4" variant="title" />
        <Skeleton className="h-8 w-8 rounded-full" variant="circular" />
      </div>
      <TextSkeleton lines={3} />
      <div className="flex gap-2 pt-4">
        <Skeleton className="h-6 w-20" variant="button" />
        <Skeleton className="h-6 w-24" variant="button" />
        <Skeleton className="h-6 w-16" variant="button" />
      </div>
    </div>
  </div>
);

export const ServiceSkeleton = () => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
    <div className="w-12 h-12 mb-4">
      <Skeleton className="w-full h-full rounded-full" variant="circular" />
    </div>
    <Skeleton className="h-6 w-1/2 mb-4" variant="title" />
    <TextSkeleton lines={2} />
  </div>
);

export const StatsSkeleton = () => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
    <div className="flex items-center gap-4">
      <Skeleton className="w-16 h-16 rounded-full" variant="circular" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-8 w-20" variant="title" />
        <Skeleton className="h-4 w-32" variant="text" />
      </div>
    </div>
  </div>
);

export const TestimonialSkeleton = () => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
    <div className="flex items-start gap-4 mb-4">
      <Skeleton className="w-12 h-12 rounded-full" variant="circular" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-5 w-1/2" variant="title" />
        <Skeleton className="h-4 w-1/3" variant="text" />
      </div>
    </div>
    <TextSkeleton lines={4} />
  </div>
);

export const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
      <div className="flex justify-center mb-8">
        <Skeleton className="w-32 h-32 rounded-full" variant="circular" />
      </div>
      <Skeleton className="h-16 w-3/4 mx-auto" variant="title" />
      <Skeleton className="h-8 w-1/2 mx-auto" variant="title" />
      <TextSkeleton lines={3} />
      <div className="flex gap-4 justify-center pt-8">
        <Skeleton className="h-12 w-32" variant="button" />
        <Skeleton className="h-12 w-32" variant="button" />
      </div>
    </div>
  </div>
);

export default Skeleton;

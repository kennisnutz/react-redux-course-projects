import classNames from 'classnames';

function SkeletonLoader({ times, className }) {
  const outerClassNames = classNames(
    'relative',
    'overflow-hidden',
    'bg-gray-200',
    'rounded',
    'm-2.5',
    className
  );
  const innerClassNames = classNames(
    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-white',
    'to-gray-200'
  );
  const renderedBoxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });
  return renderedBoxes;
}

export default SkeletonLoader;

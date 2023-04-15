import classNames from 'classnames';

function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    'border p-3 rounded shadow bg-white w-full',
    className
  );
  return (
    <div className={finalClassNames} {...rest}>
      {children}
    </div>
  );
}

export default Panel;

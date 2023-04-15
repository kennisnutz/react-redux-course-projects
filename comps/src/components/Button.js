// import PropTypes from 'prop-types';
import classNames from 'classnames';
// import {} from 'react-icons'

function Button({
  children,
  outlined,
  rounded,
  primary,
  secondary,
  success,
  warning,
  danger,

  ...rest
}) {
  //   Button.propTypes = {
  //     checkColorVariations: ({
  //       primary,
  //       secondary,
  //       success,
  //       warning,
  //       danger,
  //     }) => {
  //       const count =
  //         Number(!!primary) +
  //         Number(!!secondary) +
  //         Number(!!warning) +
  //         Number(!!success) +
  //         Number(!!danger);

  //       if (count > 1) {
  //         return new Error(
  //           'Only one of primary,secondary, success, warning or danger can be true!'
  //         );
  //       }
  //     },
  //   };

  const finalClassName = classNames(
    rest.className,
    'flex items-center gap-4 px-3 py-1.5 border',
    {
      'border-blue-600 bg-blue-500 text-white': primary,
      'border-green-600 bg-green-500 text-white': success,
      'border-purple-600 bg-purple-500 text-white': secondary,
      'border-red-600 bg-red-500 text-white': danger,
      'border-yellow-600 bg-yellow-500 text-white': warning,
      'rounded-full': rounded,
      'bg-white': outlined,
      'text-blue-800': outlined && primary,
      'text-green-800': outlined && success,
      'text-purple-800': outlined && secondary,
      'text-red-800': outlined && danger,
      'text-yellow-800': outlined && warning,
    }
  );
  return (
    <button {...rest} className={finalClassName}>
      {children}
    </button>
  );
}

export default Button;

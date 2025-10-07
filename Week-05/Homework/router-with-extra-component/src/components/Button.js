import cx from 'classnames'
import { twMerge } from 'tailwind-merge'

const Button = (props) => {

  // ...otherProps must be last or I'll get an error
  const {children, primary, secondary, success, warning, danger, rounded, outline, ...otherProps} = props;

  const count =
    Number(!!primary) +
    Number(!!secondary) +
    Number(!!success) +
    Number(!!warning) +
    Number(!!danger)

  if (count > 1) {
    console.warn('Foolish mortal... Only one of primary, secondary, success, warning, danger can be True')
    return;
  }
  
  // console.log(otherProps.className)
  // otherProps.className will be undefined if it isn't passed in
  const baseClass = 'flex items-center px-8 py-3 border'
  const classes = twMerge(cx(baseClass, otherProps.className, {
          'bg-blue-500 border-blue-500 text-white': primary,
          'bg-gray-900 border-gray-900 text-white': secondary,
          'bg-green-500 border-green-500 text-white': success,
          'bg-orange-400 border-orange-500 text-white': warning,
          'bg-red-600 border-red-600 text-white': danger,

          'rounded-full': rounded,
          'bg-white': outline,
          'text-blue-500': outline && primary,
          'text-gray-900': outline && secondary,
          'text-green-500': outline && success,
          'text-orange-400': outline && warning,
          'text-red-600': outline && danger,
        }))

  return (
    // otherProps might have a className field (if it was passed in), but it's overwritten by classes. This is fine since otherProps.className in included in classes
    // If a className was passed in, two className values are passed below, but the latest (classes) overwrites otherProps.className. There is no merging of the className strings
    <button {...otherProps} className={classes}>{children}</button>
  )
}

export default Button

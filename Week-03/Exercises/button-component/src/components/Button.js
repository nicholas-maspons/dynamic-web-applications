import cx from 'classnames'
import PropTypes from 'prop-types';
import {twMerge} from 'tailwind-merge'

function Button(props) {

    // there might be a primary, secondary, danger, etc.
    const {children, primary, secondary, success, warning, danger, rounded, outline} = props;
    
    const count =
        /*
        I already tested all of this myself using console.log

        If I pass in a prop without a value assigned to it, the prop is implicitly equal to true
        Example: <Button primary>Buy Now</Button> is shorthand for <Button primary={true}>Buy Now</Button> 
        
        If a prop is not passed in, primary for example, primary = undefined 
        This case is the reason we use !!
        Number(undefined) = nan, but Number(!!undefined) = 0
        Number(true) = 1, and Number(!!true) = 1
        */
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger)

    if (count > 1) {
        // Imagine we are a new dev and didn't know we had to use only one of the class-deciding props 
        console.warn('Foolish mortal... Only one of primary, secondary, success, warning, danger can be True')
        return;  // Prevents rendering since the rule one line above was broken. This instance of <Button/> in App.js will not appear in the browser. If I allow it to render, we get confusing behavior
    }
    
    const baseClass = 'flex items-center px-8 py-3 border'  // I want these styles on all buttons
    return (
        <button className={twMerge(cx(baseClass, {
            /*
            Applies the key (class), if the value is true
            If a prop is undefined, it is falsy
            
            cx is looping through each key-value pair and checking if it should apply a class based on whether or not the value is true
            The order I pass the props in the component does not matter (regardless of if I'm using twMerge or not)
            
            The order of the classes below makes a difference when it comes to the order they appear in the HTML class attribute
            However, this does not matter visually, as it is the order that the classes appear inside of the generated CSS file that does matter. But this order is unpredictable.
            
            This is where tailwind merge comes in, which ensures that the last of the conflicting styles inside the class attribute string seen in the HTML is chosen (they conflict if the property (ex:text color) and specifity are the same)
            Now that I'm using twMerge, the order I list the classes below does matter now... 
            */

            // color variants (pick one)
            'bg-blue-500 border-blue-500 text-white': primary,
            'bg-gray-900 border-gray-900 text-white': secondary,
            'bg-green-500 border-green-500 text-white': success,
            'bg-orange-400 border-orange-500 text-white': warning,
            'bg-red-600 border-red-600 text-white': danger,

            // outline and rounded additional style props
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary,
            'text-green-500': outline && success,
            'text-orange-400': outline && warning,
            'text-red-600': outline && danger,
        }))}>{children}</button>
    )
}

// validating props by type, this is the most common reason for using this library
// TS is also used for this 
Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  rounded: PropTypes.bool,
  outline: PropTypes.bool,
}
// propTypes isn't showing warnings in console when I do bad things like primary="test". I'm pretty sure this is all set up correctly though
export default Button;

import React from "react";
import Toggle from "../components/Toggle";

const TogglePage = () => {

    // I get a warning for not using this, but it does serve a purpose
    // Tailwind adds a class to the CSS as long as its name appears somewhere in my source files. Link to more info in README

    /*
    I could comment this object out and it would still work. If you test this, what you see might not add up to what I'm saying because the
    browser might be remembering the CSS or something. But if you shut off the server (probably a few times), you'll see what I mean eventually
    'Disable cache' in dev tools helps. But even that isn't going to work first try. Idk I was playing around with this a lot and I know my comments are true
    Also try hard refreshing. Once the buttons start going invisible (when toggled on) due to the object below being deleted. You will see that I'm
    right, after you repaste the object here and then toggles are suddenly working. Okay? Isn't it crazy how I'll never read this comment again? If anyone is reading this, hi >_<

    99.9% GUARANTEED STEPS TO SEE WHAT IM TALKING ABOUT:
    1. Make sure the toggles are working and displaying the colors when on. Make sure that the colors object is below.
    2. Copy and delete (or cut) the object, so that the Tailwind classes now no longer appear anywhere in the src folder, since they aren't anywhere else. 
    3. Save to refresh. The toggles will still function even though the classes aren't mentioned anywhere in the src anymore.
    4. Check 'Disable cache' in Network tab of dev tools.
    5. Shut down server then refresh browser so that you see the :(
    6. Then start server again and observe how the toggles don't work as they should
    7. Paste the object back here and comment you can even comment it out before saving and still see how the toggles work now
    */
    const colors = {
        'red' : 'bg-red-500',
        'orange' : 'bg-orange-500',
        'yellow' : 'bg-yellow-500',
        'green' : 'bg-green-500',
        'blue' : 'bg-blue-500',
        'purple' : 'bg-purple-500'
    }
    
    return (
        <>
            <h1>Welcome to the Toggle Page</h1>
            <Toggle color="green"/>
            <Toggle color="blue"/>
            <Toggle color="red"/>
            <Toggle color="purple"/>
        </>
    )
}

export default TogglePage;

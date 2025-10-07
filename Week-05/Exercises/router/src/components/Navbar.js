import Panel from "./Panel"
import {NavLink, Link} from 'react-router-dom' // I only use one at a time. I'm just showing both ways

const Navbar = () => {    
    // return (
    //     <Panel className='sticky top-0 flex flex-col item-start'>
    //         <Link to='/' className="text-blue-500">Buttons</Link>
    //         <Link to='/accordion' className="text-blue-500">Accordion</Link>
    //         <Link to='/dropdown' className="text-blue-500">Dropdown</Link>
    //     </Panel>
    // )    

    const activeClass = 'text-blue-500 font-bold underline'
    const pendingClass = 'text-red-500'

    return (
        <Panel className='sticky top-0 flex flex-col item-start'>
            {/* You'll never see the pendingClass style, it's applied for such a brief moment */}
            {/* When I define a function in NavLink, React Router automatically passes in an object, which has the two keys used below. I am destructuring */}
            <NavLink to='/' className={({ isActive, isPending }) => isPending ? pendingClass : isActive ? activeClass : 'text-blue-500'}>Buttons</NavLink>
            <NavLink to='/accordion' className={({ isActive, isPending }) => isPending ? pendingClass : isActive ? activeClass : 'text-blue-500'}>Accordion</NavLink>
            <NavLink to='/dropdown' className={({ isActive, isPending }) => isPending ? pendingClass : isActive ? activeClass : 'text-blue-500'}>Dropdown</NavLink>
            {/* <NavLink to='/toggle' className={({ isActive, isPending }) => isPending ? pendingClass : isActive ? activeClass : 'text-blue-500'}>Toggle</NavLink> */}
        </Panel>
    )
}

export default Navbar
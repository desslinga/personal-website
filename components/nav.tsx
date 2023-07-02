import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import NavBurgerComponent from "./nav-burger"

export default function NavComponent() {

    const router = useRouter()
    const [ navBurgerClicked, setNavBurgerClicked ] = useState(false)
    const isBreakpoint = useMediaQuery({ query: `(max-width: 700px)` })

    const navItems = [{
        name: 'Home',
        link: '/home'
    }, {
        name: 'About',
        link: '/about'
    }, {
        name: 'Work',
        link: '/work'
    }]

    const linkClickHandler = (navItem: any): void => {
        setNavBurgerClicked(false)
        router.push(navItem.link);
    }

    const navClickHandler = () => {
        setNavBurgerClicked(!navBurgerClicked)
    }

    useEffect(() => {
        if (!isBreakpoint) {
            setNavBurgerClicked(false)
        }
    })

    return (  
      <header className={navBurgerClicked ? `collapsedNavBarClicked` : ``}>
        <div className={`navBar ${isBreakpoint ? `collapsedNavBar` : ``}`}>
            <div className={'navBarLogo'}></div>
            <div className={'navBarItems'}>
                <ul>
                    { !isBreakpoint && navItems.map(navItem => (
                        <li key={navItem.name}>
                            <button onClick={() => linkClickHandler(navItem)}>{navItem.name}</button>
                        </li>
                    ))}
                    { isBreakpoint && (
                        <NavBurgerComponent 
                            clickHandler={navClickHandler}
                            classNames={navBurgerClicked ? `navBarBurgerClicked` : ``}>         
                        </NavBurgerComponent>
                    )}
                </ul>
            </div>
            { isBreakpoint && navBurgerClicked && (
                <div className={'navBarItemsResponsive'}>
                    <ul>
                        { navItems.map(navItem => (
                            <li key={navItem.name}>
                                <button onClick={() => linkClickHandler(navItem)}>{navItem.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
      </header>
    )
}  
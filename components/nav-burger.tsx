export default function NavBurgerComponent(props: any) {
    return (
        <div className={`navBarBurger ${props.classNames}`} onClick={() => props.clickHandler()}>
            <div className={'barTop'}></div>
            <div className={'barMiddle'}></div>
            <div className={'barBottom'}></div>
        </div>
    )
}
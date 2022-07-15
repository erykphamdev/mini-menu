import './menuItem.scss'
function MenuItem({id, img, title, desc, price}) {
    return <div className="menu-item">
        <div className="menu-item__img" style={{backgroundImage: `url(${img})`}}></div>
        <div className="menu-item__info">
            <header className="menu-item__header">
                <h3 className="menu-item__heading">{title}</h3>
                <span className="menu-item__price">{price}</span>
            </header>
            <div className="menu-item__desc">{desc}</div>
        </div>
    </div>
}
export default MenuItem
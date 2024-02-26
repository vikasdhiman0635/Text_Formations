import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title} 😎</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" to="about">{props.aboutus}</Link> */}
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <div className={`form-check form-switch text-${props.mode === 'green' ? 'light' : props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" onChange={props.changeModeInGreen} type="checkbox" checked={props.mode === 'green' ? true : false} role="switch" id="flexSwitchCheck" />
                            <label className="form-check-label" htmlFor="flexSwitchCheck">Enable green mode</label>
                        </div>

                        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" onChange={props.changeMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"
                                checked={props.mode === 'dark' ? true : false} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutus: PropTypes.string.isRequired
// }

// Navbar.defaultProps = {
//     title: "Enter your logo",
//     aboutus: "About"
// }
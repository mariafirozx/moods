export default function Navbar(props) {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
            <div className="container-md">
                <a className="navbar-brand ">{props.title}</a>

            <button className="login-button">LOGIN</button>
            </div>

        </nav>
        
        </>
    )

}
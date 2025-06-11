export default function Navbar(props) {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
            <div className="container-md">
                <a className="navbar-brand lead">{props.title}</a>

            </div>

        </nav>
        
        </>
    )

}
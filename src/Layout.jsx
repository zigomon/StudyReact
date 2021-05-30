import Navbar from './Navbar'
import './Layout.css'

const Layout = (props) => {

    return (
        <div className="layout">
            <header className="header">
                <Navbar onChangeContent={props.onChangeContent} />
            </header>
            <div id="mainContent">
                {props.content}
            </div>
            <footer className="footer myfooter">
                <p>COPYRIGHT Zigoro.</p>
            </footer>
        </div>

    );
}

export default Layout

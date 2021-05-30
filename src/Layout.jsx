import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import Navbar from './Navbar'
import './Layout.css'

const Layout = (props) => {
    return (
        <div className="layout">
            <header className="header">
                <Navbar />
                <section className="hero myHero">
                    <div className="hero-body">
                        <p className="title titleText">
                            Study React
                        </p>
                        <p className="subtitle titleText">
                            Study React sub title
                        </p>
                    </div>
                </section>
            </header>
            <div className="mainContent">
                <LeftPanel />
                <RightPanel />
            </div>
            <footer className="footer">
                Footer
            </footer>
        </div>
    );
}

export default Layout

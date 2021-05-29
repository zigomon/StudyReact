import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import './Layout.css'

const Layout = (props) => {
    return (
        <div className="layout">
            <header className="header">
                Header
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

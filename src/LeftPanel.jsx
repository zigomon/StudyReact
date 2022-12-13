import './LeftPanel.css'

const LeftPanel = (props) => {
    return (
        <div className="leftPanel">
            <aside className="menu">
                <p className="menu-label">
                    General
                </p>
                <ul className="menu-list">
                    <li>Dashboard</li>
                    <li>Customers</li>
                </ul>
                <p className="menu-label">
                    Administration
                </p>
                <ul className="menu-list">
                    <li>Team Settings</li>
                    <li>Manage Your Team
                        <ul>
                            <li>Members</li>
                            <li>Plugins</li>
                            <li>Add a member</li>
                        </ul>
                    </li>
                    <li>Invitations</li>
                    <li>Cloud Storage Environment Settings</li>
                    <li>Authentication</li>
                </ul>
                <p className="menu-label">
                    Transactions
                </p>
                <ul className="menu-list">
                    <li>Payments</li>
                    <li>Transfers</li>
                    <li>Balance 2</li>
                </ul>
            </aside>        
        </div>
    );
}

export default LeftPanel

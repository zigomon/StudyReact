import './LeftPanel.css'

const LeftPanel = (props) => {
    return (
        <div className="leftPanel">
            <aside class="menu">
                <p class="menu-label">
                    General
                </p>
                <ul class="menu-list">
                    <li>Dashboard</li>
                    <li>Customers</li>
                </ul>
                <p class="menu-label">
                    Administration
                </p>
                <ul class="menu-list">
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
                <p class="menu-label">
                    Transactions
                </p>
                <ul class="menu-list">
                    <li>Payments</li>
                    <li>Transfers</li>
                    <li>Balance</li>
                </ul>
            </aside>        
        </div>
    );
}

export default LeftPanel

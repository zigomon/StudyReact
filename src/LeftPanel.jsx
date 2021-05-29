import './LeftPanel.css'

const LeftPanel = (props) => {
    return (
        <div className="leftPanel">
            <aside class="menu">
                <p class="menu-label">
                    General
                </p>
                <ul class="menu-list">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Customers</a></li>
                </ul>
                <p class="menu-label">
                    Administration
                </p>
                <ul class="menu-list">
                    <li><a href="#">Team Settings</a></li>
                    <li>
                        <a class="is-active">Manage Your Team</a>
                        <ul>
                            <li><a href="#">Members</a></li>
                            <li><a href="#">Plugins</a></li>
                            <li><a href="#">Add a member</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Invitations</a></li>
                    <li><a href="#">Cloud Storage Environment Settings</a></li>
                    <li><a href="#">Authentication</a></li>
                </ul>
                <p class="menu-label">
                    Transactions
                </p>
                <ul class="menu-list">
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Transfers</a></li>
                    <li><a href="#">Balance</a></li>
                </ul>
            </aside>        
        </div>
    );
}

export default LeftPanel

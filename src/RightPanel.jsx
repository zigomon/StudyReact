import './RightPanel.css'

const RightPanel = (props) => {
    return (
        <div className="rightPanel">
            <article className="panel is-link">
                <p className="panel-heading">
                    Link
                </p>
                <p className="panel-tabs">
                    <a className="is-active" href="/">All</a>
                    <a href="/">Public</a>
                    <a href="/">Private</a>
                    <a href="/">Sources</a>
                    <a href="/">Forks</a>
                </p>
            <div className="panel-block">
                <p className="control has-icons-left">
                    <input className="input is-link" type="text" placeholder="Search" />
                    <span className="icon is-left">
                        <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                </p>
            </div>
            <a className="panel-block is-active" href="/">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                bulma
            </a>
            <a className="panel-block" href="/">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                marksheet
            </a>
            <a className="panel-block" href="/">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                minireset.css
            </a>
            <a className="panel-block" href="/">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                jgthms.github.io
            </a>
            </article>            
        </div>
    );
}

export default RightPanel

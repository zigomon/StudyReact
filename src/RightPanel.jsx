import './RightPanel.css'

const RightPanel = (props) => {
    return (
        <div className="rightPanel">
            <article class="panel is-link">
                <p class="panel-heading">
                    Link
                </p>
                <p class="panel-tabs">
                    <a class="is-active" href="/">All</a>
                    <a href="/">Public</a>
                    <a href="/">Private</a>
                    <a href="/">Sources</a>
                    <a href="/">Forks</a>
                </p>
            <div class="panel-block">
                <p class="control has-icons-left">
                    <input class="input is-link" type="text" placeholder="Search" />
                    <span class="icon is-left">
                        <i class="fas fa-search" aria-hidden="true"></i>
                    </span>
                </p>
            </div>
            <a class="panel-block is-active" href="/">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                bulma
            </a>
            <a class="panel-block" href="/">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                marksheet
            </a>
            <a class="panel-block" href="/">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                minireset.css
            </a>
            <a class="panel-block" href="/">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                jgthms.github.io
            </a>
            </article>            
        </div>
    );
}

export default RightPanel

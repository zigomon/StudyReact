import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import './MainContent.css'

const MainContent = (props) => {

    console.log("===" + props)

    return (
        <>
            <section className="hero myHero">
                <div className="hero-body">
                    <p className="title titleText">
                        Study React
                        {props.Title}
                    </p>
                    <p className="subtitle titleText">
                        Study React sub title
                    </p>
                </div>
            </section>

            <div className="mainContent">
                <LeftPanel content={props.content} />
                <RightPanel content={props.content} />
            </div>
        </>
    );
}



export default MainContent

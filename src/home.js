import wilay from './images/wilay.jpeg';
export default function Home(){
    return <div className="section_home section" id="home">
        <div className="section_container">
            <div className="name_side">
                <h5>My Name?</h5>
                <h2 className="myname">Williams</h2>
                <div className="name_wid">
                    <h5>React js</h5>
                    <h5>Backend Developer</h5>
                    <h5>Software Developer</h5>
                </div>
            </div>
            <div className="home_pr">
                <img src={wilay} className="home_img"/>
            </div>
            <div className="home_footer">
                <div className="home_fgh home_fmh">
                    Check My CV
                </div>
                <div className="home_fgh home_fmm">
                    Contact Me
                </div>
            </div>
        </div>
    </div>
}
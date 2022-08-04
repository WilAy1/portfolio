import image from './images/about_me.jpg';
export default function About(){
    return <div className="section_about section" id="about">
    <div className="section_container">
        <div className="about_head">
            <h5>About Me?</h5>
            <div className="ssse4">
                <div className="aboutImage">
                    <img src={image} alt="Minion"></img>
                </div>
                <p>Hello, I'm <b>WILLIAMS</b>, somewhat of a Fullstack Developer (wouldn't call my self that 😅)
                    <br />
                    I love to create new sh*t and fix problems. I'm always looking out for new stuffs to get used to.
                    <br/>
                 Currently learning ML algorithms. Reach out to me for a full insight.
                </p>
            </div>
            <div className='rrrr'>
                Reach Out to Me
            </div>
        </div>
    </div>
</div>
}
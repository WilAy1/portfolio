export default function Experience(){
    return <div className="section_exp section" id="exp">
    <div className="section_container">
    <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
            <div style={{ width: "95%" }}>
                <div style={{ textAlign: "left" }}>
                    <div style={{ padding: "0px 0px" }}>
                        <h3>Complete Registration for Foodlr App</h3>
                    </div>
                    <p style={{ fontFamily: "sans-serif", fontSize: "13px" }}>
                        Click the link below to verify your email and finish your Foodlr App Registration
                    </p>
                    <div style={{ margin: "30px 0px"}}><a href="http://192.168.105.170:3000/" style={{ 
                        border: "1px solid #252942",
                        backgroundColor: "transparent",
                        padding: "14px 40px",
                        borderRadius: "6px",
                        margin: "0px 9px",
                        cursor: "pointer",
                        fontSize: "13px",
                        boxShadow: "0.2px 0.2px 1px 1px #252942",
                        width: "fit-content",
                        margin: "auto",
                        textDecoration: "none",
                        color: "black",
                        fontFamily: "serif"
                    }}>Verify Email</a></div>
                    <p style={{ margin: "30px 0px", fontSize: "13px" }}>If the button below doesn't work , paste this link <a href="http://192.168.105.170:3000/">the link</a> into your browser to confirm your email</p>
                </div>
                <div style={{ padding: "40px 0px 0px 0px", display: "flex", flexDirection: "column", "alignItems": "center"}}>
                    image container
                    <p style={{ margin: "10px 0px", fontSize: "12px", color: "#0d0d0d" }}> If you did not make this request, you can safely ignore this email</p>
                    <hr style={{ width: "90%", marginTop: "5px"}} />
                        <div style={{ margin: "20px 0px" }}>
                            <div style={{ fontSize: "14px", fontWeight: "bold" }}>Reach Us</div>
                            <div style={{ display: "flex", padding: "20px 0px 0px 0px" }}>
                                <a href="https://twitter.com/foodlr_app" style={{ color: "black", textDecoration: "none", fontSize: "12px", padding: "0px 10px"}}>Twitter</a>
                                <a href="https://instagram.com/foodlrapp" style={{ color: "black", textDecoration: "none", fontSize: "12px", padding: "0px 10px"}}>Instagram</a>
                                <a href="http://192.168.105.170:3000/" style={{ color: "black", textDecoration: "none", fontSize: "12px", padding: "0px 10px"}}>Support</a>
                            </div>
                        </div>
                    <hr style={{ width: "90%"}} />
                </div>
                <footer>

                </footer>
            </div>
        </div>
    </div>
</div>
}
import React from "react";
import "../App.css";

function Resume() {
    // CSS styles for better alignment and visual appeal
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        width: '60%', // Width adjusted for better visibility
        padding: '20px', // Padding for aesthetics
        borderRadius: '10px', // Rounded corners
        backgroundColor: '#fff', // White background for better contrast
        marginTop: '100px'
    };

    return (
        <>
            <div id="resume" style={styles} className="RES">
                <div style={{ 
                    gap: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transform: 'translateY(20px)'}} className="resume_content">
                    <h1>Resume</h1>
                    <a style={{ textDecoration: 'none', color: '#fff', backgroundColor: '', padding: '10px 20px', borderRadius: '5px', marginTop: '20px' }} className="CV_button" href={require("./KhyleCV24.pdf")} download="KhyleDhananiCV">Click here to download my CV</a>
                </div>
                <img src="khylecv24_.jpg" alt="Resume" style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px', marginTop: '20px' }} />
            </div>
        </>
    );
}

export default Resume;

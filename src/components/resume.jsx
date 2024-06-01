import React, { useEffect, useState } from "react";
import "../App.css";

function Resume() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 1000);
        };

        // Set initial state
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    const buttonStyles = {
        display: 'inline-block',
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: '#333',
        padding: '10px 20px',
        borderRadius: '5px',
        marginTop: '20px',
        textAlign: 'center'
    };

    return (
        <div id="resume" style={styles} className="RES">
            <div style={{ 
                gap: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transform: 'translateY(20px)'}} className="resume_content">
                <h1>Resume</h1>
                {!isSmallScreen && (
                    <a 
                        style={buttonStyles} 
                        className="CV_button" 
                        href={require("./KhyleCV24.pdf")} 
                        download="KhyleDhananiCV"
                    >
                        Click here to download my CV
                    </a>
                )}
            </div>
            <img src={"/kdp.png"} alt="Resume" style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px', marginTop: '20px' }} />
        </div>
    );
}

export default Resume;

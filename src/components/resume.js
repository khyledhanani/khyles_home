import React from "react";
import "../App.css";

function Resume() {
    // Improved CSS styles for better alignment and visual appeal
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        width: '60%', // Slightly wider for better visibility
        padding: '20px', // Increased padding for aesthetics
        borderRadius: '10px', // Rounded corners
        backgroundColor: '#fff', // Background color for contrast
        marginTop: '100px'
    };

    return (
        <div id="resume"  style={styles} className="RES">
            <h1 style={{ textAlign: 'center', marginTop:'100:px' ,marginBottom: '40px' }}>Resume</h1>
            <img src="/khylecv24.jpg" alt="Resume" style={{ maxWidth: '800%', height:'auto',borderRadius: '5px' }} />
        </div>
    );
}

export default Resume;

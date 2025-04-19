// "use client"

const Dashboard: React.FC = () => {
    // const a = window.location.href("https://xmind.ai/SyMHBd6l");
    return (
        <div>

            <iframe srcDoc="
    <style>
        .iframe-container {
            position: relative;
            width: 100%;
            height: 100vh;
        }
        
        .overlay {
            position: absolute;
            width: 100%;
            height: 60px;
            background: white;
            z-index: 1000;
        }

        .top-overlay {
            top: 0;
        }

        .bottom-overlay {
            bottom: 0;
        }

        iframe {
            width: 100%;
            height: 100vh;
            border: none;
        }
    </style>

    <div class='iframe-container'>
        <div class='overlay top-overlay'></div>
        <iframe src='https://xmind.ai/embed/SyMHBd6l?sheet-id=54f01f9c-75da-42b4-8331-af5761e811de' scrolling='no' allow='fullscreen'></iframe>
        <div class='overlay bottom-overlay'></div>
    </div>
" width="100%" height="720px" scrolling="no" frameBorder="0"></iframe>
        </div>
    );
};

export default Dashboard;
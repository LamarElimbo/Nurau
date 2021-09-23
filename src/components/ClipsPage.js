import ingridThumbnail from '../images/ingridThumbnail.jpg';
import ingridVideo from '../images/ingridVideo.jpg';

const ChatPage = () => {
    return (
        <div style={{ marginBottom: "70px" }}>
            <h1 style={{ marginBottom: "50px", fontSize: "40px" }}>Your Clips</h1>
            <ClipsSection />
            <ClipsSection />
            <ClipsSection />
        </div>
    )
}

const ClipsSection = () => {
    return (
        <div style={{ display: "flex", marginBottom: "100px" }}>
            <div style={{ flex: "1" }}></div>
            <div style={{ backgroundColor: "rgb(254 107 96)", padding: "30px", position: "relative", borderRadius: "25px", flex: "6" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: "1" }}>
                        <ThumbnailVideo />
                    </div>
                    <div style={{ flex: "6" }}>
                        <TakeawayClips />
                    </div>
                </div>
                <VideoClips />
            </div>
        </div>
    )
}

const ThumbnailVideo = () => {
    return (
        <div style={{ height: "475px", width: "600px", borderRadius: "25px", boxShadow: "0px 4px 15px 5px rgba(0, 0, 0, 0.25)", position: "relative", top: "-50px", left: "-75px", }}>
            <img src={ingridThumbnail} style={{ height: "475px", width: "600px", borderRadius: "25px", objectFit: "cover" }} />
        </div>
    )
}

const TakeawayClips = () => {
    return (
        <>
            <h1 style={{ marginBottom: "30px", color: "white" }}>A chat with Ingrid Fetell Lee</h1>
            <p style={{ fontWeight: "300", marginBottom: "10px", color: "white", textTransform: "uppercase" }}>Your Takeaways</p>
            <div style={{ fontWeight: "500", marginBottom: "30px", borderLeft: "2px solid white", paddingLeft: "5px", lineHeight: "150%", color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div style={{ fontWeight: "500", marginBottom: "30px", borderLeft: "2px solid white", paddingLeft: "5px", lineHeight: "150%", color: "white" }}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <p style={{ fontWeight: "300", marginBottom: "10px", color: "white", textTransform: "uppercase" }}>Your Clipped Resources</p>
            <div style={{ fontWeight: "500", marginBottom: "30px", borderLeft: "2px solid white", paddingLeft: "5px", lineHeight: "150%", color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        </>
    )
}

const VideoClips = () => {
    return (
        <>
            <p style={{ fontWeight: "300", marginBottom: "10px", color: "white", textTransform: "uppercase" }}>Your Video Clips</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
                <img src={ingridVideo} style={{ height: "200px", width: "260px", borderRadius: "25px", objectFit: "cover", marginRight: "20px" }} />
                <img src={ingridVideo} style={{ height: "200px", width: "260px", borderRadius: "25px", objectFit: "cover", marginRight: "20px" }} />
                <img src={ingridVideo} style={{ height: "200px", width: "260px", borderRadius: "25px", objectFit: "cover", marginRight: "20px" }} />
            </div>
        </>
    )
}

export default ChatPage
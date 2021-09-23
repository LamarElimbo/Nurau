import ingridThumbnail from '../images/ingridThumbnail.jpg';

const ChatPage = () => {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: "1" }}></div>
            <div style={{ backgroundColor: "rgb(254 107 96)", padding: "30px", position: "relative", borderRadius: "25px", flex: "6" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: "1" }}>
                        <ThumbnailVideo />
                        <ClipButtons />
                    </div>
                    <div style={{ flex: "6" }}>
                        <RoomInfo />
                        <ChatInfo />
                    </div>
                </div>
                <MessageInput />
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

const ClipButtons = () => {
    return null
}

const RoomInfo = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ textTransform: "uppercase", color: "white" }}>Starts at 11:30 AM</p>
            <p style={{ textTransform: "uppercase", color: "white" }}>15 in the room</p>
        </div>
    )
}

const ChatInfo = () => {
    return (
        <>
            <h1 style={{ marginBottom: "30px", color: "white" }}>A chat with Ingrid Fetell Lee</h1>
            <p style={{ fontWeight: "500", marginBottom: "30px", lineHeight: "150%", color: "white" }}>Best selling author, Ingrid Fetell Lee is live for a 15 minute chat about how you can use strategies from the current research on environmental psychology in order to bring more joy into your home office.</p>
        </>
    )
}

const MessageInput = () => {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
            <textarea style={{ borderRadius: "25px", border: "none", lineHeight: "150%", backgroundColor: "white", width: "100%", height: "100px", padding: "20px", fontSize: "16px" }} placeholder="Type in any thoughts or questions you’d like to address"></textarea>
            <button style={{ backgroundColor: "rgb(254 107 96)", border: "none", borderRadius: "25px", padding: "20px 50px", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", fontSize: "18px", boxShadow: "0px 4px 15px 5px rgba(0, 0, 0, 0.25)", position: "absolute", right: "10px", bottom: "-10px", color: "white" }}>Send</button>
        </div>
    )
}

export default ChatPage
import { Link } from "react-router-dom";
import lamar from '../images/lamar.jpg';
import laurent from '../images/laurent.jpg';
import clip from '../images/clip.png';

const EmployeeHomePage = () => {
    return (
        <div style={{ marginBottom: "70px" }}>
            <h1 style={{ marginBottom: "50px", fontSize: "40px" }}>Welcome Laurent</h1>
            <div style={{ display: "flex" }}>
                <div style={{ flex: "2", marginRight: "50px" }}>
                    <UpcomingEventSection />
                    <PastEventSection />
                </div>
                <ClipsSection />
            </div>
        </div>
    )
}


const UpcomingEventSection = () => {
    return (
        <div style={{ backgroundColor: "rgba(255, 191, 0, 0.2)", borderRadius: "25px", padding: "30px", marginBottom: "30px" }}>
            <h2 style={{ marginBottom: "30px" }}>You have 1 upcoming event!</h2>
            <p style={{ fontWeight: "700", marginBottom: "30px", lineHeight: "150%" }}>Join best selling author, Ingrid Fetell Lee for a live 15 minute chat about how you can use strategies from the current research on environmental psychology in order to bring more joy into your home office.</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Link to="/chat" style={{ backgroundColor: "rgba(255, 191, 0, 0.3)", border: "none", borderRadius: "25px", padding: "20px 25px", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", fontSize: "14px", color: "black", textDecoration: "none" }}>Join the live chat</Link>
                <p style={{ textTransform: "uppercase" }}>Starts at 11:30 AM</p>
            </div>
        </div>
    )
}

const PastEventSection = () => {
    return (
        <div style={{ backgroundColor: "rgba(0, 56, 255, 0.2)", borderRadius: "25px", padding: "30px" }}>
            <h2 style={{ marginBottom: "30px" }}>Revisit some recent chats you might have missed</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <PastEvent />
            </div>
        </div>
    )
}


const PastEvent = () => {
    const pastEvents = [
        {
            description: "Revisit our resident self quantification enthusiast, Lamar Elimbo for a 15 minute chat about the personal data you can track to incorporate more reflection and positive thinking into your everyday life.",
            image: lamar
        },
        {
            description: "Revisit our remote working warrior, Laurent Parenteau for a 15 minute chat about how to thrive in a remote position by creating balance and maintaining harmony between your work and home lives.",
            image: laurent
        }
    ]

    return (
        <>
            {pastEvents.map(event =>
                <div style={{ backgroundColor: "rgba(0, 56, 255, 0.2)", borderRadius: "25px", marginRight: "30px", width: "50%", boxShadow: "0px 4px 15px 5px rgba(0, 0, 0, 0.25)" }}>
                    <img src={event.image} style={{ height: "250px", width: "100%", borderTopLeftRadius: "25px", borderTopRightRadius: "25px", objectFit: "cover" }} />
                    <div style={{ padding: "30px" }}>
                        <p style={{ fontWeight: "700", marginBottom: "30px", lineHeight: "150%" }}>{event.description}</p>
                        <button style={{ backgroundColor: "rgba(0, 56, 255, 0.3)", border: "none", borderRadius: "25px", padding: "20px 25px", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", fontSize: "14px" }}>Watch the chat</button>
                    </div>
                </div>
            )
            }
        </>
    )
}


const ClipsSection = () => {
    return (
        <div style={{ flex: "1" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "black", textDecoration: "none" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={clip} alt="clip" style={{ height: "25px", marginRight: "10px" }} />
                    <h2>Your clips</h2>
                </div>
                <Link to="/clips" style={{ textTransform: "uppercase", color: "black", textDecoration: "none" }}>See all</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Clip />
            </div>
        </div>
    )
}


const Clip = () => {
    return (
        <>
            <div style={{ marginBottom: "15px", backgroundColor: "rgb(254 107 96)", borderRadius: "25px", padding: "10px 20px" }}>
                <p style={{ color: "white" }}>From A chat with Ingrid Fetell Lee:</p>
                <p style={{ color: "white", paddingLeft: "20px" }}>You clipped 3 video segments</p>
                <p style={{ color: "white", paddingLeft: "20px" }}>You clipped 1 resource</p>
                <p style={{ color: "white", paddingLeft: "20px" }}>You clipped 2 takeaways</p>
            </div>
            <div style={{ marginBottom: "15px", backgroundColor: "rgb(254 107 96)", borderRadius: "25px", padding: "10px 20px" }}>
                <p style={{ color: "white" }}>From A Chat with Lamar Elimbo:</p>
                <p style={{ color: "white", paddingLeft: "20px" }}>You clipped 4 video segments</p>
                <p style={{ color: "white", paddingLeft: "20px" }}>You clipped 3 takeaways</p>
            </div>
            <div style={{ marginBottom: "15px", backgroundColor: "rgb(254 107 96)", borderRadius: "25px", borderBottom: "white 1px solid", padding: "10px 20px" }}>
                <p style={{ color: "white" }}>From the Resources section:</p>
                <p style={{ color: "white", paddingLeft: "20px" }}>You clipped 5 links</p>
            </div>
        </>
    )
}

export default EmployeeHomePage
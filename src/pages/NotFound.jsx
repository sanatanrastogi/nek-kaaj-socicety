import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        // Redirect to home after 10 seconds
        const redirectTimer = setTimeout(() => {
            navigate("/");
        }, 10000);

        // Countdown time every second
        const countdownTimer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => {
            clearTimeout(redirectTimer);
            clearInterval(countdownTimer);
        }
    }, [navigate]);

    return (
        <div style={{ textAlign: "center", padding: "100px 20px" }}>
            <h1 style={{ fontSize: "80px", color: "#8c3027", marginBottom: "10px" }}>404</h1>
            <h2>Page Not Found</h2>
            <p style={{ marginTop: "10px", color: "#555" }}>The page you are looking for does not exist.</p>
            <p style={{ marginTop: "10px", color: "#777" }}> Redirecting to the home page in <strong>{countdown}</strong> seconds...</p>
            <Link
                to="/"
                style={{
                    display: "inline-block",
                    marginTop: "25px",
                    padding: "10px 20px",
                    background: "#db8435",
                    color: "#fff",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "bold"
                }}>
                Go Back Home
            </Link>
            <div style={{ fontSize: "80px", marginBottom: "20px" }}>
                🙏
            </div>
        </div>
    );
};

export default NotFound;
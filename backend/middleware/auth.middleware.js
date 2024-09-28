import jwt from "jsonwebtoken";

// Middleware function to verify the user authentication token
const verifyUser = (req, res, next) => {

    // Retrieve the token from the "authToken" header in the request
    const token = req.header("auth-token");

    // If no token is provided, return a 400 Bad Request response with an error message
    if (!token) return res.status(400).json({ message: "Authenticate using valid Token" });

    try {
        // Verify the token using the JWT_SECRET from the environment variables
        // There is a typo here; the correct variable should be process.env.JWT_SECRET (not process.env,JWT_SECERET)
        const data = jwt.verify(token, process.env.JWT_SECRET); 

        // Attach the user data from the decoded token to the request object
        req.user = data.user;

        // Call the next middleware or controller function
        next();

    } catch (error) {
        // If there's an error in token verification (like invalid/expired token), log the error message
        // It's recommended to send a response indicating token verification failure
        console.log(error.message);

        // Optionally, you can return a 401 Unauthorized response to the client indicating invalid token
        return res.status(401).json({ message: "Invalid Token" });
    }
}

// Export the middleware function so it can be used in other parts of the application
export default verifyUser;

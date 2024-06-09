import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {   //generates a JSON Web Token (JWT) and sets it as a cookie in an HTTP response
        expiresIn: '15d'   // token expires in 15 days
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // ms format cookie expires in 15 days
        httpOnly: true,    //prevent XSS attacks -> cross-site scripting attacks this meansw cookie is not accessible via js
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development"  // it will be secure only in production environment, cookie is only sent over HTTPS in production environments. In development (when NODE_ENV is set to "development"), it allows HTTP for ease of development.
    });
};

export default generateTokenAndSetCookie;
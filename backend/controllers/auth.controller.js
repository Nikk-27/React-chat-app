import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if(password != confirmPassword) {
            return res.status(400).json({error: "Passwords don't match"})
        }
        const user = await User.findOne({username});

        if(user) {
            return res.status(400).json({error:"Username already exists"})
        }

        
        // https://avatar-placeholder.iran.liara.run/

        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
        })


    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
};

export const login = (req, res) => {
    res.send("Login Route");
    console.log("loginUser");
};

export const logout = (req, res) => {
    res.send("Logout Route");
    console.log("logoutUser");
};
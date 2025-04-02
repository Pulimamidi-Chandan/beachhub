// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const register = async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = new User({ username, email, password: hashedPassword });
//         await user.save();
//         res.status(201).json({ message: "User registered successfully" });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (!user || !(await bcrypt.compare(password, user.password))) {
//             return res.status(401).json({ message: "Invalid credentials" });
//         }
//         const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
//         res.json({ token,user });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
// module.exports = { register, login };
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User
const register = async (req, res) => {
    try {
        const { username, email, password, phone, about } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword, phone, about });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Login User
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get User Profile
const getUserProfile = async (req, res) => {
    try {
        const userId = req.params.id; // Get user ID from request parameters
        const user = await User.findById(userId); // Find user by ID

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching profile", error: error.message });
    }
};

// Update User Profile
const updateUserProfile = async (req, res) => {
    try {
        const { username, phone, dob, gender, nationality, city, state } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, // Using req.params.id instead of req.user.id
            { username, phone, dob, gender, nationality, city, state },
            { new: true, select: "-password" } // Exclude password from response
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = { register, login, getUserProfile, updateUserProfile };

// for using local json data
const users = require("../data/users.json");
const fs = require("fs");
const path = require("path");

// Login
exports.login = (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if(!email || !password) {
    return res.status(400).json({ message: "Email and Password required."});
  }

  // Find user
  const user = users.find((user) => user.email === email && user.password === password);

  // Invalid credentials
  if(!user) {
    return res.status(401).json({ message: "Invalid credentials"});
  }

  // Success response (no pwd !!)
  return res.json({
    message: "Login successful",
    user: {
      id: user.id,
      email: user.email,
      name: user.name
    }
  })

}

// Register
const usersFilePath = path.join(__dirname, "../data/users.json");

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  // Validate input
  if(!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Read existing users
  const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

  // Check if user already exists
  const existingUser = users.find((user) => user.email === email);
  if(existingUser) {
    return res.status(409).json({ message: "User already exits"});
  }

  // Create new user object
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password
  };

  // Save user
  users.push(newUser);
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  // Respond success
  return res.status(201).json({
    "success": true,
    "message": "User registered successfully"
  });
}
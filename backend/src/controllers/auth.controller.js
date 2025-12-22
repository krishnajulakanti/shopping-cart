const { message } = require("antd");
const users = require("../data/users.json");

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
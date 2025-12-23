// for connecting to postgres db
const pool = require("../db/db");

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if(!email || !password) {
    return res.status(400).json({ message: "Email and Password required."});
  }

  try {
    const result = await pool.query(
      "SELECT id, name, email, password FROM users WHERE email = $1",
      [email]
    );
    
    if(result.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const user = result.rows[0];

    if(user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials."
      });
    }

    return res.json({
      success: true,
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }

}

// Register
exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate input
  if(!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if user already exists
    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if(existingUser.rows.length > 0) {
      return res.status(409).json({
        success: false,
        message: "User already exists"
      });
    }

    // Insert new user
    await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      [name, email, password]
    );

    return res.status(201).json({
      success: true,
      message: "User registered successfully on DB."
    })

  } catch(err) {
    console.error(err);
    return res.status(500).json({
      success: true,
      message: "Server error."
    });
  }
}

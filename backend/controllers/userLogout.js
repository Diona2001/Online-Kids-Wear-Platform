async function UserLogout(req, res) {
    try {
      // Clear the token cookie
      res.clearCookie('token');
  
      res.json({
        message: 'Logged out successfully',
        error: false,
        success: true,
        data: []
      });
    } catch (err) {
      res.json({
        message: err.message || err,
        error: true,
        success: false,
      });
    }
  }
  
  module.exports = { UserLogout };
  
// File: middlewares/authMiddleware.js
//function authenticateUser(req, res, next) {
    // Lakukan logika autentikasi di sini
   // if (!req.session.user) {
       // return res.redirect('/login');
   // }
   // next(); // Panggil next() untuk melanjutkan ke middleware atau handler berikutnya
//}

//module.exports = authenticateUser;
module.exports = (req, res, next) => {
    if (req.isAuthenticated && req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/login');
    }
  };
  
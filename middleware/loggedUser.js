const loggedUser = (req, res, next) => {      //Valida que exista un usuario logueado en la sesión
    if (req.session.user != undefined) {
        next();
    } else {
        res.redirect("/login");
    }
};

module.exports = loggedUser;
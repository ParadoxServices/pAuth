var settings = JSON.parse(require('../../settings.json'))
if (settings['mysql'].use == true) {
    var databse = "mysql";
    var username = settings['mysql'].username;
    var password = settings['mysql'].password;
    var host = settings['mysql'].host;
}

exports.login = function(req, res) {
    var token = req.query.token;
}
const identifyUser = (req, res, next) => {
	console.log("user in middleware ", req.body);
	next();
};
module.exports = identifyUser;

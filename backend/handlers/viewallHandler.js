const { getUsers } = require("../infrastructure/mongo");

async function viewallHandler(req, res) {
	console.log("xxxxxx");
	const users = await getUsers();

	if (!users) {
		res.json({ error: "Users not found", status: 404 });
		return;
	}
	res.json(users);
}

module.exports = {
	viewallHandler,
};

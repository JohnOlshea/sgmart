import db from '../../utils/db';
export default function handler(req, res) {
	db.connectDb();
	res.status(200).json({name: "John"});
}

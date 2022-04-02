import bcrypt from 'bcryptjs'

const users = [
	// Admin user
	{
		name: 'john Doe',
		email: 'john@eg.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
		isAdmin: true,
	},
	// Standard users
	{
		name: 'Kane',
		email: 'k.w.services12@gmail.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
	},
	{
		name: 'Mike Doe',
		email: 'mike@eg.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
	},
]

export default users

// routes**
// app.get
// app.use
// app.listen
// app.post
// this piece of middleware allows us to read the body of post requests
//^ app.use(express.urlencode({extended: true}));

const express = require (`express`)
const app = express();

const users = [
	{ userId: 1, name: 'Harcourt' },
	{ userId: 2, name: 'Steve' },
	{ userId: 3, name: 'Bill' },
	{ userId: 4, name: 'Harry' },
	{ userId: 5, name: 'Jessica' },
	{ userId: 6, name: 'Gina' },
	{ userId: 7, name: 'Tim' }
];


// lists all endpoints
app.get('/api', (req, res) => {
	res.end(
		JSON.stringify([
			{ method: 'GET', endpoint: '/api/users', description: 'lists all users' },
			{ method: 'GET', endpoint: '/api/users/:userId', description: 'get user by user id' },
			{ method: 'GET', endpoint: '/api/users/:name', description: 'get user by name' },
			{ method: 'POST', endpoint: '/api/users/add', description: 'add a user' },
			{ method: 'DELETE', endpoint: '/api/users/delete/:userId', description: 'delete a user by user id' }
		]);

        // allows us to read json datas
        app.use(express.json());

// get all users
app.get(`api/user`, (req, res) => {
    res.end(JSON.stringify(users));
});

// get users by Id
app.get(`/users/:userId`, (req, res) => {
    const {userId} = req.params;
    const user = users.filter(user =>{
        if (user.userId === userId) {
            return user
        }
    });
    res.end (JSON.stringify(user));
});


// get users by name
app.get(`/api/users/name/:name`, (req,res) => {
    const {name} = req.params;
    for (const users of users) {
        if(user.name == name) {
            res.end(JSON.stringify(user));
        }
    }
});

// add a new user
app.post(`/api/users/add`, (req, res) => {
    users.push(req.body);
    res.end(`user added`);
});

// delete a user 
app.delete(`/api/users/delete/:userId`, (req, res => {
    const {userId} = req.params;
    const userIndex = users.findIndex((user, index) => {
        return user.userId == userId
    })
    users.splice(userIndex, 1);
    res.end(`user deleted`);
}));

app.listen(3000, () => {
    console.log(`>>>SERVER STARTED <<<`)
});


import express from "express"
import 'dotenv/config';
const app = express()
import morgan from "morgan";
const port = process.env.PORT;

app.use(morgan('dev'));

const githubData =
{
    "login": "Santosh-Pal-dev4u",
    "id": 117199886,
    "node_id": "U_kgDOBvxUDg",
    "avatar_url": "https://avatars.githubusercontent.com/u/117199886?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Santosh-Pal-dev4u",
    "html_url": "https://github.com/Santosh-Pal-dev4u",
    "followers_url": "https://api.github.com/users/Santosh-Pal-dev4u/followers",
    "following_url": "https://api.github.com/users/Santosh-Pal-dev4u/following{/other_user}",
    "gists_url": "https://api.github.com/users/Santosh-Pal-dev4u/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Santosh-Pal-dev4u/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Santosh-Pal-dev4u/subscriptions",
    "organizations_url": "https://api.github.com/users/Santosh-Pal-dev4u/orgs",
    "repos_url": "https://api.github.com/users/Santosh-Pal-dev4u/repos",
    "events_url": "https://api.github.com/users/Santosh-Pal-dev4u/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Santosh-Pal-dev4u/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Santosh Pal",
    "company": null,
    "blog": "Linkedin : linkedin.com/in/santosh-pal-712360229",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Sophomore @nsut || Android && Flutter App developer ",
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 4,
    "created_at": "2022-11-01T16:49:55Z",
    "updated_at": "2024-02-11T18:49:59Z"
}

const jokes = [
    {
        id: 1,
        title: "first jokes",
        content: "This is first joke!"
    },
    {
        id: 2,
        title: "second jokes",
        content: "This is second joke!"
    }, {
        id: 3,
        title: "third jokes",
        content: "This is third joke!"
    }, {
        id: 4,
        title: "forth jokes",
        content: "This is forth joke!"
    }, {
        id: 5,
        title: "fifth jokes",
        content: "This is fifth joke!"
    },
]



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/jokes', (req, res) => {
    res.send(jokes);
})

app.get('/git', (req, res) => {
    res.json(githubData);
})

app.get('/login', (req, res) => {
    res.send('<h1>please login </h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
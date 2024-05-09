
# WishperWave chat app

This is the backend part of the Whisper Wave website. It is built using Express.js and MongoDB as the database.

## Live Link
[https://wishper-wave.vercel.app/](https://wishper-wave.vercel.app/)


## Installation



```bash
  git clone https://github.com/dev-moinislam/wishper-wave-backend.git
  cd server
  npm i nstall
```
    
## Development

To run this server 

```bash
  npm start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`URI`

`TOKEN_SECRET`



## Tech Stack

**Server:** Node, Express,Socket.io

**Database:** MongoDB


## Dependencies
```json
"dependencies": {
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.0.3",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^3.0.2",
    "socket.io": "^4.7.5"
  }
  ```


## Folder structure


```bash
  server/
|_ controller/
|  |_ userCtrl.js
|  |_ conversationCtrl.js
|  |_ msgCtrl.js
|  |_ imageCtrl.js
|
|_ models/
|  |_ userModel.js
|  |_ conversationModel.js
|  |_ msgModel.js
|
|_ database/
|  |_ db.js
|
|_ config/
|  |_ generatedToken.js
|
|_ middleware/
|  |_ upload.js
|
|_ routes/
|  |_ Router.js
|
|_ socket/
|  |_ socket.js
|
|_ .env
|_ index.js
|_ package.json
|_ README.md

```
## Endpoints

### Authentication

- **POST /signup**: Register a new user.
- **POST /signin**: Sign in with existing credentials.
- **GET /all_users**: Get all users.
- **POST /google_login**: Sign in with Google.


### Conversation

- **POST /conversation/add**: Create a new conversation.
- **POST /conversation/get**: Get a conversation by ID.

### Messages

- **POST /message/add**: Add a new message to a conversation.
- **GET /message/get/:id**: Get messages of a conversation by its ID.


### File Upload

- **POST /file/upload**: Upload a file. (Uses multer middleware).



## Contributing

Pull requests are welcome! Feel free to modify or extend WishperWave's functionalities based on your needs.

## Feedback

If you have any feedback, please reach out to me at [moinislam667@gmail.com](mailto:moinislam667@gmail.com)
or ![LinkedIn Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/15px-LinkedIn_logo_initials.png)[Moin Islam](https://www.linkedin.com/in/moin-islam)







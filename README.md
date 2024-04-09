## Chat API Version 1
A simple Chat API with MongoDB communication and storage.

## Client

Socket.io client for Chat API can be found [here](https://github.com/InternetKungen/chat-API-http-chat)

## Installation

Installation can be done using npm:

```bash
npm install
```

## Usage

To run the chat client, use the following command:

```bash
npm run dev
```

### Endpoints & syntax:



## Auth


### Login - _retrurns token_

**Metod:** POST

**URL:** http://localhost:3000/auth/login

**Body:** JSON

```json
{
  "username": "User",
  "password": "Password"
}
```

<br>

### Register - _Register username and password_

**Metod:** POST

**URL:** http://localhost:3000/auth/register

**Body:** JSON

```json
{
  "username": "User",
  "password": "Password"
}
```

<br>

## Broadcast

### Get messages from broadcast

**Metod:** GET

**URL:** http://localhost:3000/broadcast

<br>

### Create message in broadcast

**Metod:** POST

**URL:** http://localhost:3000/broadcast

**Body:** JSON


```json
{
  "message": "Broadcast message"
}
```

<br>

## Channels (Need login - Bearer token)

### Get all channels _(No login needed)_

**Metod:** GET

**URL:** http://localhost:3000/channel

<br>

### Create new channel

**Metod:** PUT

**URL:** http://localhost:3000/channel

**Body:** JSON

```json
{
  "channelName": "New channel",
  "description": "About channel",
  "messages": []
}
```

<br>

### Get all messages from specific channel

**Metod:** GET

**URL:** http://localhost:3000/channel/:id

<br>

### Create new message in specific channel

**Metod:** POST

**URL:** http://localhost:3000/channel/:id

**Body:** JSON


```json
{
  "message": "A new message"
}
```

<br>

### Remove channel

**Metod:** DELETE

**URL:** http://localhost:3000/channel/:id

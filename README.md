## Chatt API Version 1

### Endpoints och syntax:



## Auth


### Login - _ger tillbaka token_

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

### Register - _Registrerar användare och lösenord_

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

### Hämta meddelanden från broadcast

**Metod:** GET

**URL:** http://localhost:3000/broadcast

<br>

### Skapa meddelande på broadcast

**Metod:** POST

**URL:** http://localhost:3000/broadcast

**Body:** JSON


```json
{
  "message": "Broadcast message"
}
```

<br>

## Channels (Kräver inloggning - Bearer token)

### Hämta alla kanaler _(Kräver inte inloggning)_

**Metod:** GET

**URL:** http://localhost:3000/channel

<br>

### Skapa ny kanal

**Metod:** PUT

**URL:** http://localhost:3000/channel

**Body:** JSON

```json
{
  "channelName": "Nya kanalen",
  "description": "Ta bort mig",
  "messages": []
}
```

<br>

### Hämta alla meddelanden i specifik kanal

**Metod:** GET

**URL:** http://localhost:3000/channel/:id

<br>

### Skapa ett nytt meddelande i specifik kanal

**Metod:** POST

**URL:** http://localhost:3000/channel/:id

**Body:** JSON


```json
{
  "message": "Ett nytt meddelande"
}
```

<br>

### Ta bort kanal

**Metod:** DELETE

**URL:** http://localhost:3000/channel/:id

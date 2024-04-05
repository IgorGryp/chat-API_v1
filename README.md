## Chatt API Version 1

### Endpoints och syntax:

#### Auth

##### _Login_ - Ger tillbaka en token

**Metod:** POST

**URL:** http://localhost:3000/auth/login

**Body:** JSON

```json
{
  "username": "User",
  "password": "Password"
}
```

##### Register - Registrerar användare och lösenord

**Metod:** POST

**URL:** http://localhost:3000/auth/register

**Body:** JSON

```json
{
  "username": "User",
  "password": "Password"
}
```

Broadcast
Hämta meddelanden från broadcast
Metod: GET
URL: http://localhost:3000/broadcast

Skapa meddelande på broadcast
Metod: POST
URL: http://localhost:3000/broadcast
Body: JSON

json
Copy code
{
  "message": "Broadcast message"
}
Channels (Kräver inloggning - Bearer token)
Hämta alla kanaler (Kräver inte inloggning)
Metod: GET
URL: http://localhost:3000/channel

Skapa ny kanal
Metod: PUT
URL: http://localhost:3000/channel
Body: JSON

json
Copy code
{
  "channelName": "Nya kanalen",
  "description": "Ta bort mig",
  "messages": []
}
Hämta alla meddelanden i specifik kanal
Metod: GET
URL: http://localhost:3000/channel/:id

Skapa ett nytt meddelande i specifik kanal
Metod: POST
URL: http://localhost:3000/channel/:id
Body: JSON

json
Copy code
{
  "message": "Ett nytt meddelande"
}
Ta bort kanal
Metod: DELETE
URL: http://localhost:3000/channel/:id

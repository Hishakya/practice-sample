npm start
docker-compose up --build

<!-- receiver-service -->
curl --location 'http://localhost:4000/receiver' \
--header 'Content-Type: application/json' \
--data-raw '{
    "user": "Rohan",
    "class": "CS",
    "age": 22,
    "email": "rohan@potter.com"
}'

<!-- listenr-service -->
curl --location 'http://localhost:3000/listener/get-listener' \
--header 'Content-Type: application/json'

# ENV
MONGO_URI = "mongodb+srv://abc:abc.456@cluster0.abc.mongodb.net/abcDB"
REDIS_HOST=localhost
REDIS_PORT=6379
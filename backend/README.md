# Instruction
To install package: npm install

To run app: npm start

# Connect to DB

## To connect using the mongo shell:

mongo ds017636.mlab.com:17636/teamspot -u <dbuser> -p <dbpassword>

## To connect using a driver via the standard MongoDB URI:

mongodb://<dbuser>:<dbpassword>@ds017636.mlab.com:17636/teamspot

## DB account:
dbuser: test
 dbpassword: a123456

# REST API
POST http://localhost:3000/posts
``` json
Sample Body:
{
    "title": "Title1",
    "description": "My description",
    "tags": [
        "Backend",
        "Frontend"
    ],
    "status": {
        "remaining": 2,
        "total": 5
    }
}
```

GET http://localhost:3000/posts

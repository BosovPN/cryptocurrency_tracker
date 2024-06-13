# Cryptocurrency_tracker

### Cloning the repository

Clone the repository using the command below :
```bash
git clone https://github.com/BosovPN/cryptocurrency_tracker.git
```

### Running the server side App

Move into the backend directory where we have the project files : 
```bash
cd .\cryptocurrency_tracker\backend
```

Create a file .env inside backend folder and write your coinmarketcap api key in it :
```bash
CMC_API_KEY=<your api key>
```

Creating a docker image
```bash
docker build . --tag fastapi_app
```

Running docker image
```bash
docker run -p 8000:8000 fastapi_app
```

### Running the client side App

Move into the frontend directory where we have the project files : 
```bash
cd .\cryptocurrency_tracker\frontend\
```

Creating a docker image
```bash
docker build . --tag reactapp
```

Running docker image
```bash
docker run -p 3000:3000 reactapp
```

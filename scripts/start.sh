
#!/bin/bash

# Data Directory - MongoDB will store its data
data_dir="../data"

# Mongodb server port
port=27017

# Database name
db_name="users"

# Collection name
collection_name="users"

# path to bin folder obtained
mongod_command="../mongodb-macos-aarch64-7.0.5/bin/mongod"

$mongod_command --dbpath "$data_dir" --port $port --bind_ip 127.0.0.1 & 



# Spin up backend
cd ../backend

echo "Current working directory: $(pwd)"

npm start &


# start frontend

sleep 5

cd ../frontend

npm start
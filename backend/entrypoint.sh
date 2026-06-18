#!/bin/bash
set -e

echo "Waiting for Postgres..."
./wait-for-it.sh $POSTGRES_HOST:$POSTGRES_PORT --timeout=30 --strict --
echo "Postgress Conection Ready!"

echo "Doing migrations..."
yarn migration:run

echo "Running application..."
yarn start:dev

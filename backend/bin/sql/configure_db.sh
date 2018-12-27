#!/bin/bash

echo "configuring dragonstack db"

dropdb -U ubuntu dragonstackdb
createdb -U ubuntu dragonstackdb

psql -U ubuntu dragonstackdb < ./bin/sql/generation.sql
psql -U ubuntu dragonstackdb < ./bin/sql/dragon.sql

echo "dragonstack was configured"
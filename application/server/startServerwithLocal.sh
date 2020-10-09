#!/bin/bash
set -e
IAM=$USER
#echo $IAM
source exportVariablesLocal.sh
./exportVariablesLocal.sh

env | grep FABRIC 
env | grep PLATFORM

node server.js

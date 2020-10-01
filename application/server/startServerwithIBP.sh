#!/bin/bash
set -e
IAM=$USER
#echo $IAM
source exportVariables.sh
./exportVariables.sh

env | grep FABRIC 
env | grep PLATFORM

node server.js
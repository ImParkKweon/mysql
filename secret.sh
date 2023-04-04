#!/bin/bash

kubectl create secret generic database-creds \
  --from-literal=username='capstone' \
  --from-literal=password='zoqtmxhs'
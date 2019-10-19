#!/bin/bash

npm run build
echo "Deploying to Google Cloud with Project ID"
config="$(gcloud config configurations list | grep artofthemoon | awk '{print $1}')"
gcloud config configurations list | grep artofthemoon
gcloud config configurations activate ${config}
gcloud app deploy --project=artofthemoon --quiet
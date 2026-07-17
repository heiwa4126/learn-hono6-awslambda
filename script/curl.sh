#!/bin/bash
set -euo pipefail

OUTPUTS_JSON="$(dirname "$0")/../outputs.json"
API_URL=$(jq -r '.LearnHono6AwsLambdaStack.apiurl' "$OUTPUTS_JSON")

curl -s "${API_URL}date" | jq .

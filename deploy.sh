#!/bin/bash
# deploys built index.html to a remove server and creates
# a gzipped index.html.gz for nginx.

if ! test -f dist/index.html ; then
  echo Error: run \'yarn build\' to generate dist/index.html
  exit 1
fi
if ! source .env 2>/dev/null ; then
  echo Error: must define DEPLOY_HOST and DEPLOY_PATH in .env
  exit 1
fi
if [[ -z $DEPLOY_HOST || -z $DEPLOY_PATH  ]]; then
  echo Error: must define DEPLOY_HOST and DEPLOY_PATH in .env
  exit 1
fi

cmd="rsync -avzP ./dist/ $DEPLOY_HOST:$DEPLOY_PATH"
echo $cmd
$cmd
echo "Creating gzipped index.html.gz ..."
ssh $DEPLOY_HOST "cd $DEPLOY_PATH && gzip -c9 index.html > index.html.gz"

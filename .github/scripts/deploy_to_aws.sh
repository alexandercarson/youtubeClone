echo 'Starting Deployment...'

`
rm -r build
git checkout master &&
git fetch --all &&
git reset --hard origin/master &&
git pull origin master &&
cp build/. -r /var/www/html
rm -r build
`

echo 'Deployment completed successfully'

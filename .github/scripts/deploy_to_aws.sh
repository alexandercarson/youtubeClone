echo 'Starting Deployment...'
ssh -o StrictHostKeyChecking=no -i /home/${USERNAME}/.ssh/github_action ${USERNAME}@${HOST}
            # Now we have got the access of EC2 and we will start the deploy .
          ` 
            ls
            # git checkout master &&
            # git fetch --all &&
            # git reset --hard origin/master &&
            # git pull origin master &&
            # cp build/. -r /var/www/html
          `
echo 'Deployment completed successfully'
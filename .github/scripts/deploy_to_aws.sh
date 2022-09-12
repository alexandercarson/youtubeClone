echo 'Starting Deployment...'
ssh -o StrictHostKeyChecking=no -i /home/${USERNAME}/.ssh/github_action ${USERNAME}@${HOST_DNS}
            # Now we have got the access of EC2 and we will start the deploy .
          ` 
            cd /home/${USERNAME}/youtubeClone &&
            git checkout master &&
            git fetch --all &&
            git reset --hard origin/master &&
            git pull origin master &&
            cp build/. var/www/html
          `
echo 'Deployment completed successfully'
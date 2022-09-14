echo 'Starting to Deploy....'
    sudo apt-get update && sudo apt-get install -y sshpass
    echo "$SSH_PASSWORD" > pass_file && chmod 0400 pass_file

    sshpass -f pass_file ssh ec2-user@ec2-34-206-162-117.compute-1.amazonaws.com "rm -rf /home/ec2-user/youtubeClone"
    # sshpass -f pass_file scp -o StrictHostKeyChecking=no -r $GITHUB_WORKSPACE ec2-user@ec2-34-206-162-117.compute-1.amazonaws.com:/home/ec2-user
    # sshpass -f pass_file ssh ec2-user@ec2-34-206-162-117.compute-1.amazonaws.com rm -rf /var/www/html/
    # sshpass -f pass_file ssh ec2-user@ec2-34-206-162-117.compute-1.amazonaws.com cp -rf /home/ec2-user/youtubeClone/build /var/www/html
echo 'Deployment completed successfully'
pipeline {
    agent any

    parameters {
        string(name:'project_name', defaultValue:'verdi', description:'Project name')
        string(name:'project_path', defaultValue:'/var/www/apis/verdi_front', description:'Project path')
        string(name:'user_ip', defaultValue:'ubuntu@3.138.205.220', description:'User and ip of the remote server')
    }

    stages {
        stage('Get Project on Github') {
            steps {
                git branch: 'qa', credentialsId: 'jenkins-ssh', url: 'git@github.com:AntPack-dev/verdi-front.git'
            }
        }

        stage('Install packages') {
            steps {
                sh 'yarn install'
            }
        }

        // stage('Test') {
        //     steps {
        //         sh 'yarn test'
        //     }
        // }

        stage('Build Image') {
            steps {
                script {
                    try {
                        sh 'yarn deploy:dev'
                    } catch (Exception e) {
                        echo 'Exception occurred: ' + e.toString()
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['key-0d6fd19ee66cd2a5c']) {
                    sh '''
                        ssh ${user_ip} "
                            cd ${project_path}
                            sudo docker-compose pull
                            sudo docker-compose up -d
                        "
                    '''

                    sh 'sleep 5'

                    sh '''
                        ssh ${user_ip} "
                            bash cleanImages.sh '${project_name}'
                        "
                    '''
                }
            }
        }
    }

    post {
        always {
            sh 'cd ~ && bash cleanImages.sh ${project_name}'
        }
    }
}

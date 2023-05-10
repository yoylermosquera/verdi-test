pipeline {
    agent any

    parameters {
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
                    sh 'ssh ${user_ip} sudo docker-compose -f ${project_path}/docker-compose.yml pull'
                    sh 'ssh ${user_ip} sudo docker-compose -f ${project_path}/docker-compose.yml up -d'
                }
            }
        }
    }
}

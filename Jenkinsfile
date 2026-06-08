pipeline {
    agent any

    tools {
        nodejs 'NodeJS18'
    }

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Test') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
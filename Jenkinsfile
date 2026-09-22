
pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Getting project from GitHub...'
            }
        }

        stage('Check Files') {
            steps {
                bat 'dir'
            }
        }

        stage('HTML Check') {
            steps {
                echo 'Checking HTML files...'
                bat 'dir *.html'
            }
        }

        stage('CSS Check') {
            steps {
                echo 'Checking CSS files...'
                bat 'dir *.css'
            }
        }

        stage('JavaScript Check') {
            steps {
                echo 'Checking JavaScript files...'
                bat 'dir *.js'
            }
        }
    }

    post {
        success {
            echo 'HTML/CSS/JavaScript project pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}


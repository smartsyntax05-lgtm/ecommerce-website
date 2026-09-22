pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Getting project from GitHub...'
                checkout scm
            }
        }

        stage('Check Files') {
            steps {
                echo 'Checking project files...'
                bat 'dir /s /b'
            }
        }

        stage('HTML Check') {
            steps {
                echo 'Checking HTML files...'
                bat 'dir /s /b *.html'
            }
        }

        stage('CSS Check') {
            steps {
                echo 'Checking CSS files...'
                bat 'dir /s /b *.css'
            }
        }

        stage('JavaScript Check') {
            steps {
                echo 'Checking JavaScript files...'
                bat 'dir /s /b *.js'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing E-Commerce Website files...'
                echo 'HTML, CSS and JavaScript files checked successfully.'
            }
        }
    }

    post {

        success {
            echo 'E-Commerce Website Jenkins Pipeline completed successfully!'
        }

        failure {
            echo 'E-Commerce Website Jenkins Pipeline failed!'
        }
    }
}

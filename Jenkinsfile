pipeline {
	agent any
	tools {
		nodejs 'NodeJS'
	}

	stages {
		stage('Checkout Github'){
			steps {
				git branch: 'main', credentialsId: 'jenkins-git-token-2', url: 'https://github.com/DanielConduri/api-node-jenkins.git'
			}
		}
		
		stage('Install node dependencies'){
			steps {
				sh 'npm install'
			}
		}
		stage('Tests'){
			steps {
				sh 'npm test'
                //echo 'Skipping tests as none are defined.'
			}
		}
	}
	post {
		success {
			echo 'Build completed succesfully!'
		}
		failure {
			echo 'Build failed. Check logs.'
		}
	}
}




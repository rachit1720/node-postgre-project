pipeline {

    agent any

         stages {

             stage('checkout') {

                steps {
                   checkout scm
                }
               
           }
              stage('install dependencies') {
 
                 steps {
                  sh  'npm install'
               }
           }

               stage('test') {
            
               sh  steps 'npm test'
               }
        
           }
       
       }

}
     
 



                                       

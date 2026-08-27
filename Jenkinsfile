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
         }
     }
 



                                       

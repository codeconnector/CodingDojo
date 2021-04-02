#!/bin/bash

javac -d out -cp lib/junit-platform-console-standalone-1.8.0-M1.jar \
	src/main/java/io/codeconnector/codedojo/InterveningVerbiage.java \
	src/test/java/io/codeconnector/codedojo/InterveningVerbiageTest.java 
	
java -jar lib/junit-platform-console-standalone-1.8.0-M1.jar \
     --class-path out \
     --scan-class-path \
     --details=tree



#!/bin/bash

# Compile the source and test files for this challenge, put the *.class files
# in the 'out/' folder. Include the JUnit standalone .jar in the classpath.
javac -d out -cp lib/junit-platform-console-standalone-1.8.0-M1.jar \
	src/main/java/io/codeconnector/codedojo/InterveningVerbiage.java \
	src/test/java/io/codeconnector/codedojo/InterveningVerbiageTest.java 
	
# Run the standalone JUnit testrunner with desired options, on the *.class files
# in the 'out/' folder.
java -jar lib/junit-platform-console-standalone-1.8.0-M1.jar \
     --class-path out \
     --scan-class-path \
     --details=tree



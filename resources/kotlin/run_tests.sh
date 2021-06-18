#!/bin/bash

../../resources/kotlin/gradlew test --info
ln -s build/reports/tests/test/index.html test_report.html
echo "You can also view test results in the 'test_report.html' file."

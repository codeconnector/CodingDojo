#!/bin/bash

g./../resources/kotlin/gradlew test --info
ln -s build/reports/tests/test/index.html test_report.html

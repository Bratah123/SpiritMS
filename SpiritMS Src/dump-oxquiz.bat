@echo off
@title Dump
set CLASSPATH=.;dist\*
java -server -Dwzpath=wz\ tools.wztosql.DumpOxQuizData
pause
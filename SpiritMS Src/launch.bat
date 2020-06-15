@echo off
@title Amoria v146.1
Color 0C
set CLASSPATH=.;dist\*
java -client -Dwzpath=wz server.Start
pause
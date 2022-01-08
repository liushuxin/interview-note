## 1、5 忽略已经在版本控制系统中的文件

git update-index --assume-unchanged test.js

## git reflog

查看历史操作，用于不下心删除某个分支，或者误操作，可以找回对应分支

## 分支移植操作

git rebase master --onto release1

## 捡取

git cherry-pick gitId

## 查看 Git 源

git remote --verbose

## 跟踪日志

git log --walk-reflogs main

Input:: {
 "watchOptions": {
  "watchFile": "UseFsEvents"
 },
 "compileOnSave": false
}
Result: WatchOptions::
{
 "watchFile": 4
}
Result: Errors::

Input:: {
 "watchOptions": {
  "watchDirectory": "UseFsEvents"
 },
 "compileOnSave": false
}
Result: WatchOptions::
{
 "watchDirectory": 0
}
Result: Errors::

Input:: {
 "watchOptions": {
  "fallbackPolling": "DynamicPriority"
 },
 "compileOnSave": false
}
Result: WatchOptions::
{
 "fallbackPolling": 2
}
Result: Errors::

Input:: {
 "watchOptions": {
  "synchronousWatchDirectory": true
 },
 "compileOnSave": false
}
Result: WatchOptions::
{
 "synchronousWatchDirectory": true
}
Result: Errors::

Input:: {
 "watchOptions": {
  "excludeDirectories": [
   "**/temp"
  ]
 },
 "compileOnSave": false
}
Result: WatchOptions::
{
 "excludeDirectories": [
  "/**/temp"
 ]
}
Result: Errors::

Input:: {
 "watchOptions": {
  "excludeFiles": [
   "**/temp/*.ts"
  ]
 },
 "compileOnSave": false
}
Result: WatchOptions::
{
 "excludeFiles": [
  "/**/temp/*.ts"
 ]
}
Result: Errors::

Input:: {
 "watchOptions": {
  "excludeDirectories": [
   "**/../*"
  ]
 },
 "compileOnSave": false
}
Result: WatchOptions::
{
 "excludeDirectories": []
}
Result: Errors::
[91merror[0m[90m TS5065: [0mFile specification cannot contain a parent directory ('..') that appears after a recursive directory wildcard ('**'): '**/../*'.

Input:: {
 "watchOptions": {
  "excludeFiles": [
   "**/../*"
  ]
 },
 "compileOnSave": false
}
Result: WatchOptions::
{
 "excludeFiles": []
}
Result: Errors::
[91merror[0m[90m TS5065: [0mFile specification cannot contain a parent directory ('..') that appears after a recursive directory wildcard ('**'): '**/../*'.

Input:: {
 "watchOptions": {
  "watchFactory": "somefactory"
 },
 "compileOnSave": false
}
Result: WatchOptions::
{
 "watchFactory": "somefactory"
}
Result: Errors::

Input:: {
 "watchOptions": {
  "watchFactory": "somefactory/../malicious"
 },
 "compileOnSave": false
}
Result: WatchOptions::
{}
Result: Errors::
[91merror[0m[90m TS5109: [0m'watchFactory' name can only be a package name.

Input:: {
 "watchOptions": {
  "watchFactory": {
   "name": "somefactory",
   "myconfig": "somethingelse"
  }
 },
 "compileOnSave": false
}
Result: WatchOptions::
{
 "watchFactory": {
  "name": "somefactory",
  "myconfig": "somethingelse"
 }
}
Result: Errors::

Input:: {
 "watchOptions": {
  "watchFactory": {
   "name": "somefactory/../malicious"
  }
 },
 "compileOnSave": false
}
Result: WatchOptions::
{}
Result: Errors::
[91merror[0m[90m TS5109: [0m'watchFactory' name can only be a package name.

/*
Node.js path module is used for handling and transforming file paths.

This module can be imported using the following syntax.
var path = require("path")

Methods:
path.normalize(p)                   - Normalize a string path, taking care of '..' and '.' parts.

path.join([path1][, path2][, ...])  - Join all the arguments together and normalize the resulting path.

path.resolve([from ...], to)        - Resolves to an absolute path.

path.isAbsolute(path)               - Determines whether the path is an absolute path.
                                    An absolute path will always resolve to the same location,
                                    regardless of the working directory.

path.relative(from, to)             - Solve the relative path from from to to.

path.basename(p[, ext])             - Return the last portion of a path. Similar to the Unix basename command.

path.dirname(p)                     - Return the directory name of a path. Similar to the Unix dirname command.

path.extname(p)                     - Return the extension of the path,
                                    from the last '.' to end of string in the last portion of the path.
                                    If there is no '.' in the last portion of the path or the first character of it is '.',
                                    then it returns an empty string. It can be used to check on file types in a directory

path.parse(pathString)              - Returns an object from a path string.

Properties:
path.sep                            - The platform-specific file separator. '\\' or '/'.

path.delimiter                      - The platform-specific path delimiter,
                                    ; or ':'

path.posix                          - Provide access to aforementioned path methods but always interact in a posix compatible way.

path.win32                          - Provide access to aforementioned path methods but always interact in a win32 compatible way.

 */

const path = require('path')

console.log('Normalization of strings making : /test/test1//2slashes/1slash/tab/.. to readable path', path.normalize('/test/test1//2slashes/1slash/tab/..'))
console.log('joint path: /test1, test2 and /test3///3slashes/tab/.. to', path.join('/test1', 'test2', '/test3///3slashes/tab/..'))
console.log('resolve: ', path.resolve('osModule.js'), '\n')

console.log('isAbsolute path: with osModule.js', path.isAbsolute('osModule.js'))
console.log('isAbsolute path: with C:\\Users\\lc_admin.JangS\\Desktop\\node test\\11\\osModule.js', path.isAbsolute('C:\\Users\\lc_admin.JangS\\Desktop\\node test\\11\\osModule.js'), '\n')

console.log('relative path from osModule.js to globalObject.js in sibling folder', path.relative('osModule.js', 'globalObject.js'), '\n')

console.log('Return the file extension of the last portion of a path: \'/foo/bar/baz/asdf/quux.html\', returns to', path.basename('/foo/bar/baz/asdf/quux.html'))
console.log('Return the last portion of a path (without file extemsion): \'/foo/bar/baz/asdf/quux.html\', \'.html\', returns to', path.basename('/foo/bar/baz/asdf/quux.html', '.html'), '\n')

console.log('Return the directory name of a path: C:\\Users\\lc_admin.JangS\\Desktop\\node test\, returns to', path.dirname('C:\\Users\\lc_admin.JangS\\Desktop\\node test'))
console.log('Return the directory name of a path: gotcha/osModule.js, returns to', path.dirname('gotcha/osModule.js'), '\n')

console.log('Return extension name of someDirectory/main.js: ', path.extname('someDirectory/main.js'), '\n')

console.log('Returns object from a path string: someDirectory/main.js to:', path.parse('someDirectory/main.js'))

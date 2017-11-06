To reproduce, run the following:

```
$ yarn
$ npx mocha
```

The output should be:

```
$ npx mocha


  testFunc
    ✓ return with a promise
(node:28519) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error
(node:28519) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
    return with a promise that
      ✓ is rejected when no parameters are passed to it


  2 passing (29ms)
```

The bug lies in that `UnhandledPromiseRejectionWarning` are being written to the terminal, when they shouldn't be there.

The solution is to add the following:

```
process.on('unhandledRejection', (reason, promise) => throw promise);
```

This fix is underway at [#2640](https://github.com/mochajs/mocha/issues/2640).

A similar issue was filed at [#2797](https://github.com/mochajs/mocha/issues/2797), but this provides a minimal, reproducable repository that can be downloaded and ran.

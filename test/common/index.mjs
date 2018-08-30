/*<replacement>*/
      require('babel-polyfill');
      var util = require('util');
      for (var i in util) exports[i] = util[i];
      /*</replacement>*/// Flags: --experimental-modules
/* eslint-disable node-core/required-modules */
import common from './index.js';

const {
  isMainThread,
  isWindows,
  isWOW64,
  isAIX,
  isLinuxPPCBE,
  isSunOS,
  isFreeBSD,
  isOpenBSD,
  isLinux,
  isOSX,
  isGlibc,
  enoughTestMem,
  enoughTestCpu,
  rootDir,
  buildType,
  localIPv6Hosts,
  opensslCli,
  PIPE,
  hasIPv6,
  childShouldThrowAndAbort,
  ddCommand,
  spawnPwd,
  spawnSyncPwd,
  platformTimeout,
  allowGlobals,
  leakedGlobals,
  mustCall,
  mustCallAtLeast,
  mustCallAsync,
  hasMultiLocalhost,
  skipIfEslintMissing,
  canCreateSymLink,
  getCallSite,
  mustNotCall,
  printSkipMessage,
  skip,
  ArrayStream,
  nodeProcessAborted,
  busyLoop,
  isAlive,
  noWarnCode,
  expectWarning,
  expectsError,
  skipIfInspectorDisabled,
  skipIf32Bits,
  getArrayBufferViews,
  getBufferSources,
  disableCrashOnUnhandledRejection,
  getTTYfd,
  runWithInvalidFD,
  hijackStdout,
  hijackStderr,
  restoreStdout,
  restoreStderr,
  isCPPSymbolsNotMapped
} = common;

export {
  isMainThread,
  isWindows,
  isWOW64,
  isAIX,
  isLinuxPPCBE,
  isSunOS,
  isFreeBSD,
  isOpenBSD,
  isLinux,
  isOSX,
  isGlibc,
  enoughTestMem,
  enoughTestCpu,
  rootDir,
  buildType,
  localIPv6Hosts,
  opensslCli,
  PIPE,
  hasIPv6,
  childShouldThrowAndAbort,
  ddCommand,
  spawnPwd,
  spawnSyncPwd,
  platformTimeout,
  allowGlobals,
  leakedGlobals,
  mustCall,
  mustCallAtLeast,
  mustCallAsync,
  hasMultiLocalhost,
  skipIfEslintMissing,
  canCreateSymLink,
  getCallSite,
  mustNotCall,
  printSkipMessage,
  skip,
  ArrayStream,
  nodeProcessAborted,
  busyLoop,
  isAlive,
  noWarnCode,
  expectWarning,
  expectsError,
  skipIfInspectorDisabled,
  skipIf32Bits,
  getArrayBufferViews,
  getBufferSources,
  disableCrashOnUnhandledRejection,
  getTTYfd,
  runWithInvalidFD,
  hijackStdout,
  hijackStderr,
  restoreStdout,
  restoreStderr,
  isCPPSymbolsNotMapped
};

function forEach (xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}
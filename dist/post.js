const { execFileSync } = require('child_process');
const path = require('path');
const archMap = { x64: 'amd64', arm64: 'arm64' };
const arch = archMap[process.arch] || process.arch;
const ext = process.platform === 'win32' ? '.exe' : '';
const bin = path.join(__dirname, '..', 'bin', `monkci-cleanup-${process.platform}-${arch}${ext}`);
try {
  execFileSync(bin, { stdio: 'inherit', env: process.env });
} catch (err) {
  console.error(`MonkCI cleanup warning: ${err.message}`);
}

const fs = require('fs');
console.log('🧪 Running tests...');

const requiredFiles = ['index.html', 'styles.css', 'script.js'];
let allTestsPassed = true;

requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file} exists`);
    } else {
        console.log(`❌ ${file} missing`);
        allTestsPassed = false;
    }
});

if (allTestsPassed) {
    console.log('🎉 All tests passed!');
    process.exit(0);
} else {
    console.log('💥 Some tests failed!');
    process.exit(1);
}

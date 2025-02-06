require('dotenv').config({ path: '.env.local' });
console.log('All env variables:', process.env);
console.log('GitHub Token:', process.env.GITHUB_TOKEN);
import shelljs from 'shelljs';
import { writeFileSync } from 'fs';

writeFileSync('dist/CNAME', 'nmilan.com');

console.log('CNAME file created successfully');

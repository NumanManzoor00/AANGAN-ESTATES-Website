import {build} from 'esbuild';
await build({entryPoints:['src/App.jsx'],bundle:true,minify:true,jsx:'automatic',outfile:'dist/assets/app.js',define:{'process.env.NODE_ENV':'"production"'},loader:{'.js':'jsx'}});
console.log('React application built successfully.');

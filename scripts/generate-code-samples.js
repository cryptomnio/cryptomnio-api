#!/usr/bin/node
'use strict'
require('shelljs/global');
var fs = require('fs')
var SwaggerParser = require("swagger-parser");
var stringifyObject = require('stringify-object');
var SwaggerSnippet = require('swagger-snippet');

var SwaggerFile = require('../web_deploy/openapi.json'); //this wants a double dot

// Snippet library has issue with basic auth, so we'll remove it for generation
SwaggerFile.security = [];

async function run() {
	try {
		var results = SwaggerSnippet.getSwaggerSnippets(SwaggerFile,
			[
				'c', //(default)
				'csharp', //(default)
				'go', //(default)
				//'java_okhttp',
				'java', //(default)
				//'javascript_jquery',
				'javascript', //(default)
				'node', //(default)
				//'node_request',
				//'node_unirest',
				'objc', //(default)
				'ocaml', //(default)
				'php', //(default)
				//'php_http1',
				//'php_http2',
				'python', //(default)
				//'python_requests',
				'ruby', //(default)
				'shell', //(default)
				//'shell_httpie',
				//'shell_wget',
				'swift' //(default)
			]);

		let api = await SwaggerParser.validate(SwaggerFile);

		results.forEach(function(result) {
			var path = result.url.substring(api.servers[0].url.length + 1).replace(/\//g,'@');
				console.log(path)
				const pretty = stringifyObject(result.snippets, { indent: '  ', singleQuotes: false });
				result.snippets.forEach(function(snippet)
					{
						// Fixing issue with URL parameters
						snippet.content = snippet.content.replace(/%7B/g, '{');
						snippet.content = snippet.content.replace(/%7D/g, '}');

						var ext = '.txt';
						var lang = snippet.id;
						lang = lang.replace(/csharp/g, 'c#');
						lang = lang[0].toUpperCase() + lang.substring(1); //uppercase first letter
						if(lang.substring(0,2) == 'C_') { ext = '.c'; }
						if(lang.substring(0,3) == 'Go_') { ext = '.go'; }
						if(lang.substring(0,5) == 'Shell') { ext = '.sh'; }
						if(lang.substring(0,4) == 'Perl') { ext = '.pl'; }
						if(lang.substring(0,6) == 'Python') { ext = '.py'; }
						if(lang.substring(0,3) == 'Php') { ext = '.php'; }
						if(lang.substring(0,10) == 'Javascript') { ext = '.js'; }
						if(lang.substring(0,4) == 'Node') { ext = '.js'; }
						lang = lang.replace(/_/, ' ');
						var dir = 'spec/code_samples/' + lang + '/' + path + '/';
						mkdir('-p',dir);
						fs.writeFile(dir + result.method.toLowerCase() + ext,snippet.content, (err) => {
							if (err) 
							{
								console.log('ERROR WRITING: ' + dir + result.method.toLowerCase() + ext);
								console.log(err);
								console.log(process.cwd());
							}
						});
					});
		})
	} catch(err) {
		console.error(err);
	}

}

run();

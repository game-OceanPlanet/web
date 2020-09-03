; (function () {
	'use strict';
	var total = 0;
	var paths = [];
	var isLoading = false;
	var verDic;
	var defaultVer = 1;
	var resVersion;
	var list = [];

	var mainGameJsName = "js/main-game.min.js";

	function $loadStart() {
		var cfg = window["GAME_CONFIG"];
		resVersion = cfg.resVersion;
		
		if(resVersion == 1000){
			list = [
				"js/egret.libs.min.js",
				"js/egret.login.js"
			];
			total = list.length;
			$loadVerCfg();
		} else {
			// $import("scripts/");
			var xhr = new XMLHttpRequest();
			xhr.open('GET', './manifest.json?v=' + Math.random(), true);
			xhr.addEventListener("load", function ()
			{
				var manifest = JSON.parse(xhr.response);
				var lst = manifest.initial.concat(manifest.game);
				list = list.concat(lst);
				total = list.length;
				$loadVerCfg();
			});
			xhr.send(null);
		}
	};

	function $loadVerCfg(){
		var verDicPath = "ver/" + resVersion + "/version.json?_t=" + (new Date() - 0);
		var xhr = new XMLHttpRequest();
		xhr.open('GET', verDicPath, true);
		xhr.addEventListener("load", function ()
		{
			var vers = JSON.parse(xhr.response);
			window["verJson"] = vers;
			verDic = vers.verDic;
			defaultVer = vers.defaultVer;
			var finalJsFilePath;

			var ln = list.length;
			var jsVer;
			for (var i = 0; i < ln; i++)
			{
				var jsFilePath = list[i];
				jsVer = defaultVer;
				if (verDic[jsFilePath])
				{
					jsVer = verDic[jsFilePath];
				}
				finalJsFilePath = "ver/" + jsVer + "/" + jsFilePath;
				paths.push(finalJsFilePath);
			}
			
			$nextImport();
		});
		xhr.send(null);
	};

	function $import(url) {
		var index = paths.indexOf(url);
		if (index < 0) {
			total++;
			paths.push(url);
			$nextImport();
		}
		else {
			console.error("重复导入：" + url);
		}
	};
	function $nextImport() {
		if (isLoading) {
			return;
		}
		isLoading = true;
		var count = 0;
		var index = 0;
		var len = paths.length;
		while (index < len && count < 10) {
			var url = paths.shift();
			index++;
			count++;
			loadScript(url, function () {
				index--;
				if (index < 1) {
					isLoading = false;
					$importLoaded();
				}
			});
		}
	};
	
	function loadScript(url, callback) {
		var onLoaded = function () {
			script.parentNode.removeChild(script);
			script.removeEventListener('load', onLoaded, false);
			callback();
		};
		var script = document.createElement('script');
		script.language = "javascript";
		script.type = "text/javascript";
		script.async = false;
		script.src = url + "?_t=" + (new Date() - 0);
		// script.src = url;// + "?_t=" + (new Date() - 0);
		script.addEventListener('load', onLoaded, false);
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(script);
	};

	function $importLoaded() {
		if (paths.length < 1) {
			// loadSplash();
			gameRun();
		}
		else {
			$nextImport();
		}
	};

	function loadSplash() {
		var shell = document.createElement('script');
		shell.src = "splash.js?_t=" + (new Date() - 0);
		// shell.src = "splash.js";
		var shellLoaded = function () {
		  if (shell.parentNode) {
			shell.parentNode.removeChild(shell);
		  }
		  shell.removeEventListener('load', shellLoaded, false);
		};

		shell.addEventListener('load', shellLoaded, false);
		document.body.appendChild(shell);
	  };

	function gameRun(){
		egret.runEgret({
			renderMode: "webgl", audioType: 0, calculateCanvasScaleFactor: function (context)
			{
				var backingStore = context.backingStorePixelRatio ||
					context.webkitBackingStorePixelRatio ||
					context.mozBackingStorePixelRatio ||
					context.msBackingStorePixelRatio ||
					context.oBackingStorePixelRatio ||
					context.backingStorePixelRatio || 1;
				return (window.devicePixelRatio || 1) / backingStore;
			}
		});
	}
	window.$import = $import;
	$loadStart();
})();

; (function () {
	'use strict';
	var total = 0;
	var list = [];
	var paths = [];
	var isLoading = false;

	var platformId;
	var platformDebug = getQueryString('platformDebug');
	var rv = Math.round(Date.parse(new Date()) / 1000 / 60 / 2); //每隔2分钟会变更一次版本号
	var routePath;
	var version = 1;
	var gonggao;
	var isAutoShowGg;
	var platformParas = {};

	function $loadStart() {
		if(window["platformId"]){
			platformId = window["platformId"];
		} else {
			platformId = 13;
		}
		
		routePath = "platform/" + platformId + "/route.json?v=" + rv;
		window["enterGame"] = enterGame;
		showPreLoading("初始化版本控制...");
		if(platformId == 13){
			//这里加载程序文件，直接写死
			list = [
				"js/egret.libs.min.js",
				"js/egret.login.js"
			];
			total = list.length;
			loadRouteCfg();
		} else {
			$import("scripts/");
			var xhr = new XMLHttpRequest();
			xhr.open('GET', './manifest.json?v=' + Math.random(), true);
			xhr.addEventListener("load", function ()
			{
				var manifest = JSON.parse(xhr.response);
				var lst = manifest.initial.concat(manifest.game);
				list = list.concat(lst);
				total = list.length;
				loadRouteCfg();
			});
			xhr.send(null);
		}
	};

	function loadRouteCfg(){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', routePath, true);
		xhr.addEventListener("load", function ()
		{
			var routes = JSON.parse(xhr.response);
			var sid = getQueryString("sid");
			if (sid == null)
			{
				sid = 1;
			}
			version = routes.defaultVersion;
			gonggao = routes.gonggao;
			isAutoShowGg = routes.isAutoShowGg;
			platformParas = routes.platformParas;
			var rules = routes.rules;
			if (rules){
				for (var i = 0; i < rules.length; i++)
				{
					var rule = rules[i];
					if (rule[0] <= sid && sid <= rule[1])
					{
						version = rule[2];
						break;
					}
				}
			}
			loadVerCfg();
		});
		xhr.send(null);
	};

	function loadVerCfg(){
		var verDicPath = "ver/" + version + "/version.json?_t=" + (new Date() - 0);
		var xhr = new XMLHttpRequest();
		xhr.open('GET', verDicPath, true);
		xhr.addEventListener("load", function ()
		{
			var vers = JSON.parse(xhr.response);
			window["verJson"] = vers;
			var verDic = vers.verDic;
			var defaultVer = vers.defaultVer;

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
				var finalJsFilePath = "ver/" + jsVer + "/" + jsFilePath;
				// var finalJsFilePath = jsFilePath;
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
		showPreLoading("加载游戏引擎...");
		  
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
		// script.src = url + "?_t=" + (new Date() - 0);
		script.src = url;// + "?_t=" + (new Date() - 0);
		script.addEventListener('load', onLoaded, false);
		var head = document.getElementsByTagName('head')[0];
		head.appendChild(script);
	};

	function $importLoaded() {
		showPreLoading("初始化游戏引擎...");
		  
		if (paths.length < 1) {
			// loadSplash();
			gameRun();
		}
		else {
			$nextImport();
		}
	};

	let enterGame = function ()
	{
		var tip = document.getElementById("preLoading");
		if(tip){tip.style.display = "block"};
		var txt = document.getElementById("isLoadingTxt");
		if(txt){txt.style.display = "block"};
		var bg = document.getElementById("preLoadBg3");
		if(bg){bg.style.display = "block"};

		if(txt){txt.innerText = "初始化游戏皮肤..."};
		var enterLoadPath = "js/default.thm.min.js";
		loadSingleScript(enterLoadPath, function ()
		{
			var onScriptLoadedCallBack = window["onScriptLoadedCallBack"];
			if (onScriptLoadedCallBack != null)
			{
				onScriptLoadedCallBack();
			}
			if(tip){tip.style.display = "none"};
			if(txt){txt.style.display = "none"};
			if(bg){bg.style.display = "none"};
		})
	}

	var loadSingleScript = function (src, callback)
	{
		var s = document.createElement('script');
		s.async = false;
		s.src = src;
		s.addEventListener('load', function ()
		{
			s.parentNode.removeChild(s);
			s.removeEventListener('load', loadSingleScript, false);
			callback();
		}, false);
		document.body.appendChild(s);
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

	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		if (window.location && window.location.search) {
			var r = window.location.search.substr(1).match(reg);
			if (r) {
				return decodeURIComponent(r[2]);//unescape
			}
		}
		return null;
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

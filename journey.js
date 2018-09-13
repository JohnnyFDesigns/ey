(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2265,950);


(lib.line = function() {
	this.initialize(img.line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2137,548);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.line();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1290.7,331), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("EhtTAu4MAAAhdvMDanAAAMAAABdvg");
	this.shape.setTransform(699.6,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1399.3,600), null);


// stage content:
(lib.journey = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(10,4,0.605,0.619);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47));

	// Layer_2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(699.6,300,1,1,0,0,0,699.6,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:730},0).wait(1).to({x:760.4},0).wait(1).to({x:790.9},0).wait(1).to({x:821.3},0).wait(1).to({x:851.7},0).wait(1).to({x:882.1},0).wait(1).to({x:912.5},0).wait(1).to({x:943},0).wait(1).to({x:973.4},0).wait(1).to({x:1003.8},0).wait(1).to({x:1034.2},0).wait(1).to({x:1064.6},0).wait(1).to({x:1095},0).wait(1).to({x:1125.5},0).wait(1).to({x:1155.9},0).wait(1).to({x:1186.3},0).wait(1).to({x:1216.7},0).wait(1).to({x:1247.1},0).wait(1).to({x:1277.6},0).wait(1).to({x:1308},0).wait(1).to({x:1338.4},0).wait(1).to({x:1368.8},0).wait(1).to({x:1399.2},0).wait(1).to({x:1429.7},0).wait(1).to({x:1460.1},0).wait(1).to({x:1490.5},0).wait(1).to({x:1520.9},0).wait(1).to({x:1551.3},0).wait(1).to({x:1581.8},0).wait(1).to({x:1612.2},0).wait(1).to({x:1642.6},0).wait(1).to({x:1673},0).wait(1).to({x:1703.4},0).wait(1).to({x:1733.9},0).wait(1).to({x:1764.3},0).wait(1).to({x:1794.7},0).wait(1).to({x:1825.1},0).wait(1).to({x:1855.5},0).wait(1).to({x:1885.9},0).wait(1).to({x:1916.4},0).wait(1).to({x:1946.8},0).wait(1).to({x:1977.2},0).wait(1).to({x:2007.6},0).wait(1).to({x:2038},0).wait(1).to({x:2068.5},0).wait(1).to({x:2098.9},0).wait(1));

	// Layer_1
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(691.3,298.5,1,1,0,0,0,645.3,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47));

	// Layer_4
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(699.6,300,1,1,0,0,0,699.6,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(700,300,1399.3,600);
// library properties:
lib.properties = {
	id: '3634128C7E6C41088A944CBC9CF3929C',
	width: 1400,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.png", id:"back"},
		{src:"images/line.png", id:"line"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3634128C7E6C41088A944CBC9CF3929C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
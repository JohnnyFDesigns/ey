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
	this.shape.graphics.f("#FFFFFF").s().p("EhtTAu4MAAAhdvMDanAAAMAAABdvg");
	this.shape.setTransform(699.6,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,1399.3,600), null);


// stage content:
(lib.journey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.back();
	this.instance.parent = this;
	this.instance.setTransform(10,4,0.605,0.619);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Layer_2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(699.6,300,1,1,0,0,0,699.6,300);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48).to({_off:false},0).wait(1).to({x:719.3},0).wait(1).to({x:739},0).wait(1).to({x:758.7},0).wait(1).to({x:778.4},0).wait(1).to({x:798.1},0).wait(1).to({x:817.8},0).wait(1).to({x:837.6},0).wait(1).to({x:857.3},0).wait(1).to({x:877},0).wait(1).to({x:896.7},0).wait(1).to({x:916.4},0).wait(1).to({x:936.1},0).wait(1).to({x:955.8},0).wait(1).to({x:975.5},0).wait(1).to({x:995.2},0).wait(1).to({x:1014.9},0).wait(1).to({x:1034.6},0).wait(1).to({x:1054.3},0).wait(1).to({x:1074.1},0).wait(1).to({x:1093.8},0).wait(1).to({x:1113.5},0).wait(1).to({x:1133.2},0).wait(1).to({x:1152.9},0).wait(1).to({x:1172.6},0).wait(1).to({x:1192.3},0).wait(1).to({x:1212},0).wait(1).to({x:1231.7},0).wait(1).to({x:1251.4},0).wait(1).to({x:1271.1},0).wait(1).to({x:1290.8},0).wait(1).to({x:1310.6},0).wait(1).to({x:1330.3},0).wait(1).to({x:1350},0).wait(1).to({x:1369.7},0).wait(1).to({x:1389.4},0).wait(1).to({x:1409.1},0).wait(1).to({x:1428.8},0).wait(1).to({x:1448.5},0).wait(1).to({x:1468.2},0).wait(1).to({x:1487.9},0).wait(1).to({x:1507.6},0).wait(1).to({x:1527.3},0).wait(1).to({x:1547.1},0).wait(1).to({x:1566.8},0).wait(1).to({x:1586.5},0).wait(1).to({x:1606.2},0).wait(1).to({x:1625.9},0).wait(1).to({x:1645.6},0).wait(1).to({x:1665.3},0).wait(1).to({x:1685},0).wait(1).to({x:1704.7},0).wait(1).to({x:1724.4},0).wait(1).to({x:1744.1},0).wait(1).to({x:1763.8},0).wait(1).to({x:1783.5},0).wait(1).to({x:1803.3},0).wait(1).to({x:1823},0).wait(1).to({x:1842.7},0).wait(1).to({x:1862.4},0).wait(1).to({x:1882.1},0).wait(1).to({x:1901.8},0).wait(1).to({x:1921.5},0).wait(1).to({x:1941.2},0).wait(1).to({x:1960.9},0).wait(1).to({x:1980.6},0).wait(1).to({x:2000.3},0).wait(1).to({x:2020},0).wait(1).to({x:2039.8},0).wait(1).to({x:2059.5},0).wait(1).to({x:2079.2},0).wait(1).to({x:2098.9},0).wait(1));

	// Layer_1
	this.instance_2 = new lib.Symbol2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(691.3,298.5,1,1,0,0,0,645.3,165.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).wait(72));

	// Layer_4
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(699.6,300,1,1,0,0,0,699.6,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

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
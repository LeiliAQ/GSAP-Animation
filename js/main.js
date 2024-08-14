/*  Autumn Greeting Card -- js */

(function($){
	'use strict';
	var $backFallingLeaves=$('#brownLeaf,#orangeLeaf,#redLeaf'),
		$textLine1= $('.text-line-1'),
		$textLine2= $('.text-line-2'),
		$textGreeting= $('.text-greeting'),
		$treeLeaves= $('[id^=treeleaf]'),
		$floorLeaves= $('[id^=floorleaf]'),
		$bird= $('#Bird'),
		$birdHat= $bird.find('#BirdHat'),
		$birdEyes= $bird.find('#leftEye,#rightEye'),
		$nest= $('#NestAndLeaves'),
		$tree= $('#tree_trunk'),
		$cardContainer=$('.card.container')

	// declare actors 

	// clear stage 
	function clearStage(){
		var clearTl= new TimelineMax()
		clearTl
			.set($backFallingLeaves,{autoAlpha:0})
			.set($textLine1,{autoAlpha:0})
			.set($textLine2,{autoAlpha:0})
			.set($textGreeting,{autoAlpha:0})
			.set($treeLeaves,{autoAlpha:0})
			.set($bird,{y:'+=65',autoAlpha:0})
			.set($nest,{autoAlpha:0})
			.set($tree,{autoAlpha:0})
			.set($floorLeaves,{y:'+=275',onComplete:showContainer})

			function showContainer(){
				$cardContainer.css('display','block')
			}
		return clearTl
	}
	// enter floor vegetation
	function enterFloorVegetation(){
		var fleavesTl=new TimelineMax()
		fleavesTl
			.staggerTo($floorLeaves,1,{y:0,ease:$backFallingLeaves.easeInOut},0.01)
			.fromTo($tree,1.1,{scaleY:0.2,autoAlpha:0,transformOrigin:'center bottom'},
				{scale:1,autoAlpha:1,transformOrigin:'center bottom',ease:Back.easeInOut})
			.fromTo($tree,0.9,{scaleX:0.2,autoAlpha:0,transformOrigin:'center bottom'},
					{scale:1,autoAlpha:1,transformOrigin:'center bottom',ease:Back.easeInOut},'-=0.9')
		return fleavesTl
	}

	// enter tree
	function enterTreestuff(){
		var treestuffTl= new TimelineMax()
		treestuffTl
			.staggerFromTo($treeLeaves,0.5,{scale:0.2,autoAlpha:0,transformOrigin:'center bottom'},
				{scale:1,autoAlpha:1,transformOrigin:'center bottom',ease:Back.easeInOut},0.02,'-=0.5')
			.fromTo($nest,1,{y:0,scale:0.2,autoAlpha:0,transformOrigin:'center center'},{y:'-=15',scale:1,autoAlpha:1,transformOrigin:'center center',ease:Elastic.easeInOut},'+=0.1')
			.to($nest,0.3,{y:'+=15',ease:Bounce.easeInOut},'-=0.2')
			.add('nest-pop-in')
			.set($birdHat,{rotation:12,x:'+=6'})
			.to($bird,1.4,{y:'-=39',autoAlpha:1,ease:Power4.easeInOut},'nest-pop-in+=0.1')
			.add('bird-peeking')
			.set($birdEyes,{autoAlpha:0})
			.set($birdEyes,{autoAlpha:1},'+=0.2')
			.set($birdEyes,{autoAlpha:0},'+=0.3')
			.set($birdEyes,{autoAlpha:1},'+=0.3')
			.add('bird-blinks')
			.to($bird,0.8,{y:'-=34',ease:Power4.easeInOut})
			.to($bird,0.8,{y:'+=8',ease:Power4.easeInOut})
			.to($birdHat,0.4,{y:'-=12'},'-=0.6')
			.to($birdHat,0.3,{y:0,rotation:0,x:0,onComplete:startBlinking},'-=0.2')
			function startBlinking(){
				var birdBlinkTl= new TimelineMax({repeat:-1,repeatDelay:3})
				.set($birdEyes,{autoAlpha:0})
				.set($birdEyes,{autoAlpha:1},'+=0.2')
				.set($birdEyes,{autoAlpha:0},'+=1.2')
				.set($birdEyes,{autoAlpha:1},'+=0.3')

			}
			
		return treestuffTl
	}
	// enter the greeting text
	
	// the GO function ...to kick things all off
	function go(){
		var masterTl=new TimelineMax()
		masterTl
			.add(clearStage(),'scene-clear-stage')
			.add(enterFloorVegetation(),'scene-floor-vegetation')
			.add(enterTreestuff(),'scene-tree-stuff')
		// Add a child timeline to masterTl
	}
	go()
})(jQuery);



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

	// enter the greeting text
	
	// the GO function ...to kick things all off
	function go(){
		var masterTl=new TimelineMax()
		masterTl
			.add(clearStage(),'scene-clear-stage')
			.add(enterFloorVegetation(),'scene-floor-vegetation')
		// Add a child timeline to masterTl
	}
	go()
})(jQuery);



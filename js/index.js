$(function(){
	//好玩的球
	for(var i=0;i<100;i++){
	var w=Math.floor(Math.random()*20+10);
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	//div是小圈圈	
	var div=$('<div>').addClass('circle').width(w).height(w)
	.addClass(function(){
		if(Math.floor(Math.random()>0.5)){
			return 'zuo';
		}else{
			return 'you';
		}
	})
	.css({
		top:Math.floor(Math.random()*600),
		left:Math.floor(Math.random()*800),
		background:'rgba('+r+','+g+','+b+',0.8)',
	})
	$('.dom').append(div);
  }
  $('.dom .circle').on('click',function(){
  	 $(this).toggleClass('selected');
  	 if($(this).hasClass('selected')){
  	 	$(this).data('color',$(this).css('background'));
  	 	$(this).css('background','red');
  	 }else{
  	 	$(this).css('background',$(this).data('color'));
  	 }
  })
	

	//换一批
	var newpic=[
		{img:"img/9.jpg",link:"https://www.baidu.com/"},
		{img:"img/10.jpg",link:"https://www.baidu.com/"},
		{img:"img/11.jpg",link:"https://www.baidu.com/"},
		{img:"img/12.jpg",link:"https://www.baidu.com/"},
		{img:"img/13.jpg",link:"https://www.baidu.com/"},
		{img:"img/14.jpg",link:"https://www.baidu.com/"},
		{img:"img/15.jpg",link:"https://www.baidu.com/"},
		{img:"img/16.jpg",link:"https://www.baidu.com/"}
	]
	$(".box .button").on("click",function(){
		$("ul img").attr("src",function(i,old){
			return newpic[i].img;
		})
		$("ul a").attr("href",function(i,old){
			return newpic[i].link;
		})
	})

    //空间照片
    $("ul li").on("click",function(e){
    	e.preventDefault();//阻止a链接默认事件
    	$(".cart").addClass("show");
    	$(".cart img").attr("src",$(this).find("img").attr("src"));
    	$(".cart").attr("data-id",$(this).index());//记录第几张

    })
    $(".cart .close").on("click",function(e){
    	e.stopPropagation();//阻止默认事件
    	$(".cart").removeClass("show");
    })
    $(".cart").on("mousedown",function(e){
    	e.preventDefault();
    })
    var imgs=$("ul img");
    $(".cart").on("click",function(e){
    	var index=parseInt($(this).attr("data-id"));
    	if(e.clientX>$(this).outerWidth(true)/2){
    		index+=1;
    	}else{
    		index-=1;
    	}
    	if(index===imgs.length){
    		/*alert("最后一张图了！");*/
    		$(".cart .end").addClass("tishi");
    		setTimeout(function(){
    			$(".cart .end").removeClass("tishi");
    		},2000)
    		return;
    	}else if(index<0){
    		/*alert("前边没有图了！");*/
    		$(".cart .first").addClass("tishi");
    		setTimeout(function(){
    			$(".cart .first").removeClass("tishi");
    		},2000)
    		return;
    	}
    	$(".cart").attr("data-id",index);//更新下标
    	$(".cart img").attr("src",imgs.eq(index).attr("src"));
    })


})
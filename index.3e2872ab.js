TweenLite.set("#petals",{perspective:600}),TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"});var total=300,warp=document.getElementById("petals"),w=window.innerWidth,h=window.innerHeight;for(i=0;i<total;i++){var Div=document.createElement("div");TweenLite.set(Div,{attr:{class:"dot"},x:R(0,w),y:R(-200,-150),z:R(-200,200)}),warp.appendChild(Div),animm(Div)}function animm(e){TweenMax.to(e,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15}),TweenMax.to(e,R(4,8),{x:"+=100",rotationZ:R(0,180),repeat:-1,yoyo:!0,ease:Sine.easeInOut}),TweenMax.to(e,R(5,11),{x:"+=100",rotationZ:R(0,180),repeat:-1,yoyo:!0,ease:Sine.easeInOut}),TweenMax.to(e,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:!0,ease:Sine.easeInOut,delay:-5}),TweenMax.to(e,R(3,10),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:!0,ease:Sine.easeInOut,delay:-5})}function R(e,t){return e+Math.random()*(t-e)}var typed=new Typed("#text",{strings:["Бажаю весняного настрою, нехай на душі завжди буде світло та радісно. Бажаю, щоб на обличчі завжди сяяла посмішка, хай життя буде щедрим на подарунки. У самий жіночий день року бажаю простого жіночого щастя та здоров'я."],startDelay:3e3,typeSpeed:20,backSpeed:0,fadeOut:!0,loop:!1,showCursor:!1,onComplete:function(){document.getElementById("author").style.opacity=1}}),woof=document.querySelector(".woof");setTimeout((function(){woof.play()}),21e3);
//# sourceMappingURL=index.3e2872ab.js.map
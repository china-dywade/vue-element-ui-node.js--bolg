<template>
<div class="radio-bg">
<!-- <div>
   <h2>Canvas直线运动</h2>
   <canvas id="test1" width="500" height="500">对不起您的浏览器不支持canvas</canvas>
</div>
 <div>
   <h2>Canvas匀变速直线运动</h2> ;
   <canvas id="test2" width="500" height="500">对不起您的浏览器不支持canvas</canvas>
</div>    -->

 <!-- <div>
   <h2>Canvas圆周运动</h2> 
   <canvas id="test3" width="500" height="500">对不起您的浏览器不支持canvas</canvas>
</div>   -->
 <!-- <div>
   <h2>Canvas高级动画</h2> 
   <canvas id="test4" width="500" height="500">对不起您的浏览器不支持canvas</canvas>
</div>   -->
 <div>
   <h2>Canvas旋转动画</h2> 
   <canvas id="test5" width="500" height="500">对不起您的浏览器不支持canvas</canvas>
</div> 
</div>

</template>

<script>
import testA from './testA.vue';
import { clearInterval } from 'timers';
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg :'我是韦德牌男人' ,
      foo:'hello,foo',
      coo:'hello coo!!!!!!!!!!!!',
      radios:[
        {
          label: '是',
          value:'是',
          isChecked: true,
        },
        {
          label: '否',
          value:'否',
          isChecked: false,
        }
      ]
    }
  },
  mounted () {
    // 匀速直线运动
    // this.test1();
    // this.test2();
    // this.test3();
    // this.test4();
    this.test5();
  },
  methods: {
    test1(){
        var canvas=document.getElementById('test1');
          canvas.height=728;
          canvas.width=1024;
          var context=canvas.getContext('2d');
          context.fillStyle='red';
          context.beginPath();
          context.arc(canvas.width-30,300,30,0,2*Math.PI,true);
          context.closePath();
          context.fill();
              var speed=0;
          var startPoint=canvas.width-30;
          var flags =true;
          setInterval(()=>{

                  if(flags){
                        if(startPoint<30){
                          speed = 7;
                          flags =false;
                        }else{
                            speed = -7;
                            flags =true;
                        }
                  }else{
                        if(startPoint>canvas.width-30){
                          speed =-7;
                          flags =true;
                        }else{
                            speed =7;
                            flags =false
                        }
                  }
                  context.clearRect(0,0,1024,728);
                  //cxt.top+=speed;    
                  startPoint+=speed;
                  context.beginPath();
                  context.arc(startPoint,300,30,0,2*Math.PI,true);
                  context.closePath();
                  context.fill();
          }, 20);



    },
    // 匀变速直线运动
    test2(){
            var canvas=document.getElementById('test2');
            canvas.height=728;
            canvas.width=1024;
            var context=canvas.getContext('2d');
            context.fillStyle='blue';
            context.beginPath();
            context.arc(canvas.width-30,300,30,0,2*Math.PI,true);
            context.closePath();
            context.fill();
            var v0=0;//初始速度
            var a=0;//加速度
            var v=0;//变化的速度
            var time=0;//时间
            var x=0;//位移量
            var startPoint=canvas.width-30;//起始点;
            var flags =true;
            setInterval(function(){
                  
                    if(time>10){
                      time =0.01;
                    }else{
                      time+=0.01;
                    } 
                    a=2;
                    
                  if(flags){
                          if(startPoint<30){
                            x=(0.5*a*(time*time));//位移公式代入
                            flags =false;
                          }else{
                            x=-(0.5*a*(time*time));//位移公式代入
                            flags =true;
                          }
                    }else{
                          if(startPoint>canvas.width-30){
                            x=-(0.5*a*(time*time));//位移公式代入
                            flags =true;
                          }else{
                            x=(0.5*a*(time*time));//位移公式代入
                            flags =false
                          }
                    }


                    startPoint+=x;
                    context.clearRect(0,0,1024,728);
                    context.beginPath();
                    context.arc(startPoint,300,30,0,2*Math.PI,true);
                    context.closePath();
                    context.fill();
            }, 50);

    },

    test3(){
          var canvas=document.getElementById('test3');
          canvas.height=728;
          canvas.width=1024;
          var ctx = document.getElementById('test3').getContext('2d');
          for (var i=0; i<6; i++){
                ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255)';
              for(var j=0;j<6; j++){
                ctx.beginPath();
                ctx.strokeRect(i*50,j*50,40,40);
                console.log(j)
              }
          }
          var img = new Image()
          img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg'
          img.onload = function() {
            // 绘制图像
            ctx.drawImage(img, 512, 220, 100, 100);
          }
            ctx.save();
            ctx.translate(512+50,220+50);
            ctx.rotate(-35*Math.PI/180);
            ctx.drawImage(img, -100, -100, 100, 100);
              // ctx.font = "10px sans-serif"
              // ctx.fillText("天若有情sadgsagdas", 10, 100);
              // ctx.strokeText("天若有情dsgsasda", 10, 200)
  
    },

    test4(){
          var canvas = document.getElementById('test4');
          var ctx = canvas.getContext('2d');
          var raf;
          var _this = this;
          canvas.width =1024;
          canvas.height = 768;
          var ball ={
            w:50,
            h:50,
            x:100,
            y:100,
            vx:5,
            vy:2,
            radius:25,
            color:'blue',
            draw:function(){
              
                  ctx.beginPath();
                  ctx.fillStyle = this.color;                
                  ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
                  ctx.fill();           
              


              }
            }

              ball.draw();
            
          

          canvas.addEventListener('mouseover', function(e){
                  raf = window.setInterval(() => {
                    _this.draw(ctx,ball,canvas)
                  }, 50);
            });

            canvas.addEventListener('mouseout', function(e){
                window.clearInterval(raf);
            });
    },

    test5(){
      var canvas  = document.getElementById("test5");
      var ctx = canvas.getContext('2d');
      canvas.width = 1000;
      canvas.height = 1000;
      this.drawNotChange(ctx)
       window.times = 0;
      ctx.beginPath();
      ctx.fillStyle = "blue";
      ctx.arc(500,550,30,0,2*Math.PI,true);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.arc(500,550,60,0,2*Math.PI,true);
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = "yellow";
      ctx.arc(500,490,5,0,2*Math.PI,true);
      ctx.fill();



      setInterval(() => {

          this.runBall(ctx);

      }, 50);

    },
  

    draw(ctx,ball,canvas){
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.fillRect(0,0,canvas.width,canvas.height);
      // ctx.clearRect(0,0,canvas.width,canvas.height);
      ball.draw();
      ball.x += ball.vx;
      ball.y += ball.vy;
      ball.vy *= 0.99;
      ball.vy += .25;
      if (ball.y+ball.radius + ball.vy > canvas.height || ball.y-ball.radius + ball.vy < 0) {
        ball.vy = -ball.vy;
      }
      if (ball.x+ball.radius + ball.vx > canvas.width || ball.x-ball.radius + ball.vx < 0) {
        ball.vx = -ball.vx;
      }
    },

    runBall(ctx){
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.fillRect(0, 0, 1000, 1000);
      this.drawNotChange(ctx)
      ctx.save(); 
      ctx.translate(500,400);
      ctx.rotate(window.times*10*Math.PI/180);//设定每次旋转的度数
      ctx.fillStyle='red';
      ctx.beginPath();
      ctx.arc(0,150,30,0,2*Math.PI,false);
      ctx.closePath();
      ctx.fill();
      ctx.restore();//将当前为(500,400)的点还原为（0,0）,其实在save中就是将上下文环境保存到栈中，在restore下面对其进行还原
      window.times+=1;
      


    },

    drawNotChange(context){
        context.fillStyle='red';
        context.beginPath();
        context.arc(500,400,30,0,2*Math.PI,true);
        context.closePath();
        context.fill();
        context.beginPath();
        context.arc(500,400,150,0,2*Math.PI,true);
        context.closePath();
        context.stroke();
        // context.beginPath();
        // context.arc(500,550,60,0,2*Math.PI,true);
        // context.stroke();

        // context.beginPath();
        // context.fillStyle = "yellow";
        // context.arc(500,490,5,0,2*Math.PI,true);
        // context.fill();

    },

    updateMsg(msg){
      this.msg = msg
    },

    touchStart(e){
      console.log(e,'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    },

    check(index) {
      // 先取消所有选中项
      this.radios.forEach((item) => {
        item.isChecked = false;
      });
      //再设置当前点击项选中
      this.radio = this.radios[index].value;
      // 设置值，以供传递
      this.radios[index].isChecked = true;
      console.log(this.radio);
    }
},

   
  components: {
    'child-testA' : testA
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
// <style scoped>
*{
  padding: 0;
  margin:0;
}
.radio-bg{
  width:1200px;
  margin:0 auto;
  text-align: center;
}
.radio-bg>div{
  width:1024px;
  height:auto;
  border:1px solid #ccc;
  border-radius:.25rem;
  margin: 0 auto;
  margin-bottom: 20px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* .radio-bg{
  position: fixed;
  left: 50%;
  top:50%;
  background-color: #000;
  opacity: .3;
} */
.reply{
  width:18.75rem;
  height: 6.25rem;
}
.radio-box{
  display: block;
  position: relative;
  height: 20px;
  line-height: 20px;
  margin-bottom: 10px;
}
.radio {
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  text-align: center;
}
.radio span{
    display: inline-block;
    width: 8px;
    height: 8px; 
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 50%;
    position: relative;
    top:-1px;
    
}
.radio.on{
  background-color: #509EFF;
  border-color:#509EFF;
}
.radio.on span{
  border-color: #fff;
}
.input-radio {
  display: inline-block;
  position: absolute;
  width: 100%;
  opacity: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
  left: 0px;
  outline: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  
}
.on {
  
}


</style>

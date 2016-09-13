$(function() {
		     //�����ʼ��
		        var size=$(".img li").size();
		        for (var i = 1; i <= size; i++) {
		            var li="<li>"+i+"</li>";
		            $(".num").append(li);
		        };
		
		        //�ֶ������ֲ�Ч��
		        $(".img li").eq(0).show();
		        $(".num li").eq(0).addClass("active");
		        $(".num li").mouseover(function() {
		            $(this).addClass("active").siblings().removeClass("active");
		            var index = $(this).index();
		            i=index;
		            $(".img li").eq(index).fadeIn(300).siblings().fadeOut(300);
		        })
		
		        //�Զ�
		        var i = 0;
		        var t = setInterval(move,500);
		        //��������ĺ���
		        function moveLeft() {
		            i--;
		            if (i == -1) {
		                  i = size-1;
		            }
		            $(".num li").eq(i).addClass("active").siblings().removeClass("active");
		            $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
		
		        }
		        //�������ҵĺ���
		        function move() {
		            i++;
		            if (i == size) {
		                i = 0;
		            }
		            $(".num li").eq(i).addClass("active").siblings().removeClass("active");
		            $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
		
		        }
		        //��ʱ���Ŀ�ʼ�����
		        $("#rm").hover(function() {
		            clearInterval(t);
		        }, function() {
		            t = setInterval(move, 500)
		        })
		        //��߰�ť�ĵ���¼�
		        $("#rm .left").click(function() {
		            moveLeft();
		        })
		        //�ұ߰�ť�ĵ���¼�
		        $("#rm .right").click(function() {
		            move();
		        })
		    })
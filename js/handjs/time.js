new Vue({
				el: "#showTime",
				data() {
					return {
						time: '',
						date: new Date()
					}
				},
				methods: {
					getCurrentTime(date) {
						var myDate = date;
						var year = myDate.getFullYear().toString();
						var month = (myDate.getMonth() + 1).toString();
						var day = myDate.getDate().toString();
						var hours = myDate.getHours().toString();
						var minute = myDate.getMinutes().toString();
						var seconds = myDate.getSeconds().toString();
						if((myDate.getHours()>=6)&&(myDate.getHours()<=12)){
							document.getElementById("timeSlot").innerHTML="早上好";
						}
						else if((myDate.getHours()>=13)&&(myDate.getHours()<=18)){
							document.getElementById("timeSlot").innerHTML="下午好";
						}
						else if((myDate.getHours()>=19)&&(myDate.getHours()<=24)){
							document.getElementById("timeSlot").innerHTML="晚上好";
						}
						if(month.length == 1) {
							month = "0" + month;
						}
						if(day.length == 1) {
							day = "0" + day;
						}
						if(hours.length == 1) {
							hours = "0" + hours;
						}
						if(minute.length == 1) {
							minute = "0" + minute;
						}
						if(seconds.length == 1) {
							seconds = "0" + seconds;
						}
						var d = new Array('星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日');
						var week = myDate.getDay();
						this.time = year + "年" + month + "月" + day + "日" + " " + hours + ":" + minute + ":" + seconds + " " + d[week - 1];

					}

				},
				mounted() {
					var _this = this;// 声明一个变量指向Vue实例this，保证作用域一致
					this.timer = setInterval(function() {
						_this.date = new Date();
						_this.getCurrentTime(_this.date);
					}, 1000);
					
				},
				beforeDestroy(){
					if(this.timer){
						clearInterval(this.timer);
					}
			  }

			});

(function (window) {
	'use strict';


let vm=new Vue({
el:"#cql",
data:{
    txt:"hello msg",
	inputtxt:""
},
methods:{
	cun(){
		alert(vm.inputtxt)
		$.ajax({
			type: "get",
			url: "http://localhost:9000/get?name="+vm.inputtxt,
			success: function(msg){
			  console.log(msg)
			}
		 });
		 alert("已经储存");
	}
}
})


})(window);

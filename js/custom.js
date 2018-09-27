/* 

1. Add your custom JavaScript code below
2. Place the this code in your template:

  

*/

            function objectifyForm(formArray) {//serialize data function

                var returnArray = {};
                for (var i = 0; i < formArray.length; i++){
                returnArray[formArray[i]['name']] = formArray[i]['value'];
                }
                return returnArray;

                
            };
       
            function submitform(form){
                form1 = document.getElementById('myForm');
                var data1 = objectifyForm(form1);
                $.ajax({
                    url: "http://localhost:9000/api/smartHome",
                    type: "POST",
                    data: data1,
                    success : function (result){
                        alert(result);
                    },
                    error: function(){
                        console.log('error happened');
                    }
                })
                
                
            };

// Created by Gaurav //

alert("Pls do not enter any punctuation marks or any space after the last letter. Click the help button on the top right corner to find out the questions you can ask. I was trying to use some API. Might be there in later update.");
function clicked(){
var ab= document.getElementById("ab").value
var ac= document.getElementById("ac").value
   if(ab==""||ac==""){
       alert("Please enter something")
   }
   else{
    document.getElementById('login').style='display:none';
    }
}
$(function() {
    $("#help").on("click",function(){
            alert("◇Hi ; Hello ; Hey\n◇Where are you from ; Where are you\n◇What is your DOB\n◇In which class do you read\n◇Can you come to my house tonight\n◇Nice ; Good ; Great ; Excellent ; Fabulous ; Splendid ; Awesome ; Wow ; Suberb ; Marvellous\n◇Third-rate ; Worst one ; Really Bad ; Useless ; So dirty ; Very shabby ; Second-rate ; Substandard ; Poor ; Inferior\n◇How are you\n◇What are you doing\n◇Are you kind and studious\n◇What are your hobbies\n◇Who is your biggest inspiration\n◇Can you call me up\n◇Are you a human or a bot\n◇Bye ; See ya ; Talk to you later\n◇What is your age");
        } )
    $("#add").on("click", function    () {
        var val = $("#inp").val();
        var value= $("#inp").val().toLowerCase();
        if(val !== '') {
            var elem = $("<p align='right' class='a'></p>").text(val); 
            $("#chat").append(elem);
            $("#inp").val("");
        } 
           setTimeout(function(){
           if(value == "hi"|value == "hello"|value=="hey"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>Hello😊</div>");
           $("#chat").append(to);
           }
           else if(value == "where are you from"|value=="where are you"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>I am from the universe, milky way, solar system, planet earth, Asia, India.</div>");
           $("#chat").append(to);
           }
           else if(value == "what is your dob?"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>It is 01/08/2003</div>");
           $("#chat").append(to);
           }
           else if(value == "in which class do you read?"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>I'm uneducated and my developer is also a 12th calss failure :( </div>");
           $("#chat").append(to);
           }
           else if(value == "can you come to my house tonight?"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>Simple answer = No 😂 I've no more time to all this stuff.</div>");
           $("#chat").append(to);
           
           }
           else if(value == "nice"|value=="good"|value=="great"|value=="excellent"|value=="fabulous"|value=="splendid"|value=="marvellous"|value=="awesome"|value=="wow"|value=="superb"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>Thanks😊</div>");
           $("#chat").append(to);
           }
           else if (value == "who are you?"){
               var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>I am a simple chat bot. My name is PSYCHO.. I was developed by Gaurav Yadav :)  </div>");
           $("#chat").append(to);
           }
           
           else if(value == "third-rate"|value=="worst one"|value=="really bad"|value=="useless"|value=="so dirty"|value=="very shabby"|value=="second-rate"|value=="substandard"|value=="poor"|value=="inferior"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>😔</div>");
           $("#chat").append(to);
           }
           else if(value=="how are you?"){
              var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>Very fine...! What about you?</div>");
           $("#chat").append(to);
           }
           
           else if(value == "what are you doing?"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>No doubt, I'm Chatting with you ;-)</div>");
           $("#chat").append(to);
           }
           else if(value == "are you kind and studious"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>Both answers YES...</div>");
           $("#chat").append(to);
           }
           else if(value == "what are your hobbies?"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>To code, to sing,hate to eat, to irritate others, etc. etc.</div>");
           $("#chat").append(to);
           }
           else if(value == "who is your biggest inspiration?"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>My mother but somehow she left me alone.😉</div>");
           $("#chat").append(to);
           }
           else if(value == "can you call me up"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>😑Never</div>");
           $("#chat").append(to);
           }
           else if(value == "are you a human or a bot?"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>I am a bot but better than humans. </div>");
           $("#chat").append(to);
           }
           else if(value == "bye"|value == "see ya"|value=="talk to you later"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>Ok bye😄... TC</div>");
           $("#chat").append(to);
           }
           else if(value == "what is your age?"){
           var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'</div>");
           $("#chat").append(to);
           }
           else if(value == ""){
           }
           else{
               var to = $("<img src='https://i.imgur.com/KFh5q2o.jpg' id='j'><div class='b'>Reaaly sorry, I didn't get you type your queries in comment section Improvemnt will soon btw.😅</div>");
           $("#chat").append(to);
           }
           },1000);
    });
});

function talk(){  
    var know = {  
     "Hi" : " Hi, How can I help you?",
     "Who are you?" : "Hi, I am Turkish Airlines' chatbot. How can I help you? ",
     "Who are you" : "Hi, I am Turkish Airlines' chatbot. How can I help you?",  
     "How are you" : "I am feeling goog to help you.",   
     "How are you?" : "I am feeling goog to help you.",  
     "Hwy" : "I am feeling goog to help you.",   
     "Bye" : "Okay! Will meet soon..",
     "Weight restrictions": "In Economy class you can bring maximum 8kg bagage.",
     
     "Help" : "If you are asking for help during the flight, call stewards for your issue.",
    }
    var user = document.getElementById('userBox').value;  
     document.getElementById('chatLog').innerHTML = user + "<br>";  
    if (user in know) {  
     document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
    }else{  
     document.getElementById('chatLog').innerHTML = "Sorry, I could not find information related with. Contact to our live support. <br>";  
    }  
   } 
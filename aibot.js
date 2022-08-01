function talk(){  
    var know = {  
     "Hi" : " Hi, How can I help you?",
     "Who are you?" : "Hi, I am Turkish Airlines' chatbot. How can I help you? ",
     "Who are you" : "Hi, I am Turkish Airlines' chatbot. How can I help you?",  
     "How are you" : "I am feeling good to help you.",   
     "How are you?" : "I am feeling good to help you.",  
     "Hwy" : "I am feeling good to help you.",   
     "Bye" : "Okay! Will meet soon..",
     "Weight restrictions": "In Economy class you can bring maximum 8kg bagage.",
     "Is there a medical assistance service at the airport?": "Turkish Airlines does not provide this kind of service. However, you can use the medical services provided by the airport.",
     "Help" : "If you are asking for help during the flight, call stewards for your issue.",
     "When can I check-in online?": "Online check-in starts 24 hours before the flight and ends 90 minutes before the flight.",
     "How are Miles earnings and spending calculated?":"The amount of Miles deducted or added to your account is calculated according to the program terms at the time of the activity that earned the Miles.",
     "When does check-in close at the airport?":"The check-in desk closes 45 minutes before departure for domestic flights and 60 minutes beforehand for international flights.",
     
    }
    var user = document.getElementById('userBox').value;  
     document.getElementById('chatLog').innerHTML = user + "<br>";  
    if (user in know) {  
     document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
    }else{  
     document.getElementById('chatLog').innerHTML = "Sorry, I could not find information related with your question. Contact to our live support. <br>";  
    }  
   } 
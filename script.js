let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")


function speak(text){
     let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1 
    text_speak.lang="en-IN"
    window.speechSynthesis.speak(text_speak)
}
  
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
 let recognition =new speechRecognition()
 recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
   let transcript=event.results[currentIndex][0].transcript
   content.innerText=transcript
     takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{ 
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"

})


 function takeCommand(message){
     btn.style.display="flex"
      voice.style.display="none"
     if (message.includes("hello")){
        speak("hello sir,i am light, how can i help you?")
     }
    else if (message.includes("what are you")||message.includes("what r u")||message.includes("kaun ho tum")){
        speak("i am virtual assistant,light")
    }else if (message.includes("what can you do")||message.includes(" tum kya kya kar sakte")){
        speak("i am light I Answer Questions: You can ask about any topic, like science, history, or technology Information and News: Get updates and knowledge on current events or general topics ")
    }
    else if (message.includes("open youtube")){
       speak("okay sir opening youtube...")
      window.open("https://www.youtube.com/","_blank")
    }else if (message.includes("open google")){
        speak("okay sir opening google...")
       window.open("https://www.google.com/","_blank")
    }else if (message.includes("open facebook")){
        speak("okay sir opening facebook...")
       window.open("https://www.facebook.com/","_blank")
    }else if (message.includes("open instagram")){
        speak("okay sir opening instagram...")
       window.open("https://www.instagram.com/","_blank")
    }
    else if (message.includes("open calculator")){
        speak("okay sir opening calculator...")
       window.open("calculator://")
    }
    else if (message.includes("what is your name")||message.includes("namm")){
        speak("my name is light ")
    }
    else if (message.includes("open whatsapp")){
        speak("okay sir opening whatsapp...")
       window.open("whatsapp://")
    }
    else if (message.includes("created")||message.includes("create")){
        speak(" I am created in 20 september 2024 , i am created by krish sir")
    }
    
    else if (message.includes("time")||message.includes("samay")){
    let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if (message.includes("date")||message.includes("tarikh")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
          speak(date)
    }
     else if (message.includes("goodbye")||message.includes("bye")){
      speak("okay tata bye byee")
 }
     else if(message.includes("tell me a story")){
        speak("no sir i do not tell you a story ")
     }
     else if(message.includes("hello sir")){
        speak("you are joking sir ")
     }
     else if(message.includes("why")){
        speak("because i do not remember the story ")
        
     }
     else if(message.includes("what happen")){
        speak("noo sir nothing ,i am playing with you ") 
     }
     else if(message.includes("say somthing")){
        speak("ok sir, than ask me a question?") 
     } 
     else if(message.includes("sutup")){
        speak("okay")
     }
     

  else if(message.includes("open my search engine")){
      speak("okay sir")
    window.open("https://cse.google.com/cse?cx=b54f4d43e54dc4593")

  }
     else{
        let finalText="this is what i found on internet regarding" + message.replace("light","") || message.replace("lite","")
          speak(finalText)
          
          window.open(`https://www.google.com/search?q=${message.replace("light","")}`,"_blank")
    }
}
// Function to check the online/offline status
function checkInternetConnection() {
   if (!navigator.onLine) {
       // Show the image in full screen when offline
       document.getElementById('offlineMessage').style.display = 'flex';
   } else {
       // Hide the image if the connection is back
       document.getElementById('offlineMessage').style.display = 'none';
   }
}

// Add event listeners for online/offline status change
window.addEventListener('load', checkInternetConnection);
window.addEventListener('online', checkInternetConnection);
window.addEventListener('offline', checkInternetConnection);

// Example of Debounce
function debounce(func, delay) {
   let timer;
   return function (...args) {
     clearTimeout(timer);
     timer = setTimeout(() => func(...args), delay);
   };
 }
 // Usage
 window.addEventListener('scroll', debounce(function() {
   console.log('Scroll event');
 }, 200));
 








 

















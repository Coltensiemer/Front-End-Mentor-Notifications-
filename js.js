'use strict'





 // const profileElement = document.getElementById("profile-element"); 
    const profile = document.querySelectorAll(".profile-container"); 
    const removeAllBtn = document.querySelector('.remove-all-btn');
    const spanDot = document.querySelector('.span-dot')
    const redDot =document.querySelectorAll('.red-dot')
    const theDot = document.querySelectorAll('.the-dot')
    const theCounter = document.getElementById('counter')
    const active = document.querySelector('.active'); 
    const divDot = document.querySelector('div-dot'); 

    

    // Counter total unread
      let counter = 0; 

for (const active of profile){ 
    
    if (active.classList.contains('active')){ 
        counter++; 

    theCounter.textContent = counter; 
    }

    console.log(counter)
}


        
    // Mark all as read 
    
    removeAllBtn.addEventListener('click', ()=> { 
        profile.forEach(profiles => { 
            profiles.classList.remove('active')
            theCounter.textContent = 0; 
            redDot.forEach(dot => { 
                dot.classList.remove('span-dot')
               
            })
           
        })
    })



    profile.forEach(profiles => { 
        profiles.addEventListener('click', () => { 
            if (profiles.classList.contains('active')) {
            profiles.classList.remove('active')
            counter = counter - 1; 
            theCounter.textContent = counter;
          
        for (const dot of redDot){ 
             console.log(dot.classList)
            }

    }}
        )
    })


       

  

// profile.forEach(e) { 
//     e.classList.remove('active')
// }





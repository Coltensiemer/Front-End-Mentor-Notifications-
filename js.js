'use strict'


 // const profileElement = document.getElementById("profile-element"); 
    const profile = document.querySelectorAll(".profile-container"); 
    const removeAllBtn = document.querySelector('.remove-all-btn');
    const dot= document.querySelectorAll(".span-dot") ;
    const divDot = document.getElementById('div-dot')
    
    
    
    
    // divDot.classList.add('hidden')// does not work 
    
    // When you click on profile 
    
    profile.forEach(profiles => { 
        profiles.addEventListener('click', ()=> { 
          profiles.classList.remove('active');
          
        })
        dot.addEventListener('click', ()=> { 
            dot.classList.add('hidden')
        })
    })
    
    //Mark all as read 
    
    removeAllBtn.addEventListener('click', ()=> { 
        profile.forEach(profiles => { 
            profiles.classList.remove('active')
           
        })
    })





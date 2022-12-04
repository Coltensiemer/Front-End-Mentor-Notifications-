'use strict'


 // const profileElement = document.getElementById("profile-element"); 
    const profile = document.querySelectorAll(".profile-container"); 
    const removeAllBtn = document.querySelector('.remove-all-btn');
    const dot= document.querySelectorAll(".span-dot") ;
    
    
    
    
    
    
    
    // When you click on profile 
    
    profile.forEach(profiles => { 
        profiles.addEventListener('click', ()=> { 
          profiles.classList.remove('active')
        })
        }); 
    
        
    
    //Mark all as read 
    
    removeAllBtn.addEventListener('click', ()=> { 
        profile.forEach(profiles => { 
            profiles.classList.remove('active')
           
        })
    })





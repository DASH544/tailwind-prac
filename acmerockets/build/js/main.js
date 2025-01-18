const initApp = ()=>
{
    const hammbug=document.getElementById("hamburger-btn")
    const mobilemenu=document.getElementById("mobile-section")
    const toggleMenu=()=>
    {
        mobilemenu.classList.toggle('hidden');
        mobilemenu.classList.toggle('flex');
       
    }  
    hammbug.addEventListener('click',toggleMenu); 
    mobilemenu.addEventListener('click',toggleMenu); 
}
document.addEventListener('DOMContentLoaded',initApp);
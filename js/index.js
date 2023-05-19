
const about =  document.querySelector('.about');
const projects =  document.querySelector('.projects');
const profile =  document.querySelector('.profile');
const contactMe =  document.querySelector('.contact_Me');
const showDiv = document.querySelector('.rightDiv');
const dark = document.querySelector('.dark');
const white = document.querySelector('.white');
const pageStyle = document.querySelector('#pageStyle');
const aboutCom = '<h1 class="homeHead">Hello There, </h1> <h2 class="homeBody">  I am Krishna Prasad A, Currently pursuing My  B.Tech in Computer Science and Engineering at Rajiv Gandhi Institute OfTechnology, Kottayam. I am trying to build a career in Development</h2> <h2 class="homeSd">Krishna Prasad A <br> sd/-</h2>'
const projectsCom = '<h1 class="homeHead">Projects</h1> <ul><li class="homeBody"> <a  href="https://github.com/krishna-kpa/Store-Api" target:"_balnk">Store Api</a><li  class="homeBody"><a  href="https://github.com/krishna-kpa/Task-Manager" target:"_balnk">Task-Manager Api</a><li  class="homeBody"><a  href="https://github.com/krishna-kpa/" target:"_balnk">Jobs Api</a><li  class="homeBody"><a  href="https://github.com/krishna-kpa/" target:"_balnk">Personal Web Page</a><li  class="homeBody"><a  href="https://github.com/krishna-kpa/" target:"_balnk">E-Class Mobile Application</a><li  class="homeBody"><a  href="https://github.com/krishna-kpa/JWT-basics" target:"_balnk">JWt Basics</a></ul>'
const profilesCom = '<h1 class="homeHead">Profiles</h1> <ul><li class="homeBody"> <a  href="https://github.com/krishna-kpa" target:"_balnk">Git Hub</a><li  class="homeBody"><a  href="https://www.hackerrank.com/krishnaprasad_k5" target:"_balnk">Hacker Rank</a><li  class="homeBody"><a  href="https://www.linkedin.com/in/krishna-prasad-a-579261214/" target:"_balnk">Linkedin</a><li  class="homeBody"><a  href="https://leetcode.com/user1336xq/" target:"_balnk">Leet Code</a><li  class="homeBody"><a  href="https://gitlab.com/kpa.krishnaprasada" target:"_balnk">Git Lab</a></ul>'
const contactMeCom   = '<h1 class="homeHead">Contact Me</h1> <ul><li class="homeBody"> <a  href="https://twitter.com/krishna_kpa" target:"_balnk">Twitter</a><li  class="homeBody"><a  href="https://wa.me/919048580029" target:"_balnk">Whats App</a><li  class="homeBody"><a  href="mailto:krishnaprasad.kp9048@gmail.com" target:"_balnk">Gmail</a></ul>'
var name1 ;
var check = false;
var mode = 'w';

about.addEventListener("click",()=>{
    if(check==true && name1 != about && mode == 'w'){
        name1.style.color = 'black'
    }
    if(check==true && name1 !=about && mode == 'b'){
        name1.style.color = 'white'
    }

    about.style.color='purple'
    showDiv.innerHTML=aboutCom
    name1 = about;
    check = true;
})
projects.addEventListener("click",()=>{
    if(check==true && name1 !=projects && mode == 'w'){
        name1.style.color = 'black'
    }
    if(check==true && name1 !=projects && mode == 'b'){
        name1.style.color = 'white'
    }
    projects.style.color='purple'
    showDiv.innerHTML=projectsCom
    name1 = projects;
    check = true;
})
profile.addEventListener("click",()=>{
    if(check==true  && name1 !=profile  && mode == 'w'){
        name1.style.color = 'black'
    }
    if(check==true && name1 !=profile && mode == 'b'){
        name1.style.color = 'white'
    }
    profile.style.color='purple'
    showDiv.innerHTML=profilesCom
    name1 = profile;
    check = true;
})
contactMe.addEventListener("click",()=>{
    if(check==true  && name1 !=contactMe && mode == 'w'){
        name1.style.color = 'black'
    }
    if(check==true && name1 !=contactMe && mode == 'b'){
        name1.style.color = 'white'
    }
    contactMe.style.color='purple'
    showDiv.innerHTML=contactMeCom
    name1 = contactMe;
    check = true;
})

function swapStyleSheet(sheet) {
    pageStyle.setAttribute("href", sheet);  
}


dark.onclick = function () { swapStyleSheet("./css/dark.css"); mode = 'b' };
white.onclick = function () { swapStyleSheet("./css/main.css"); mode ='w' };
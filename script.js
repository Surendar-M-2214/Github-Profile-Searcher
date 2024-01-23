
const APIURL= "https://api.github.com/users/";
const form=document.getElementById("form");
const main=document.getElementById("profile");
const repos=document.getElementById("repos")
const search=document.getElementById("search");
const repoitem=[];

// const formSubmit=()=>{
//   const searchBox =document.querySelector("#search")
//   if(searchBox.value!=""){
//     getUser(searchBox.value);
//     getRepo(searchBox.value);
//     searchBox.value=""
//   }
//   const list = document.getElementById("col-id");
  
//   while (list.hasChildNodes()) {
//     list.removeChild(list.firstChild);
//   }
// }


const getUser= async(username)=>{
   const responses= await fetch(APIURL + username);
   const data = await responses.json()
console.log(data)
   const profilecard=`
   <!-- Bg -->
   <div class="card rounded-bottom h-25 d-inline-blocksmooth-shadow-sm">
     <div class="d-flex align-items-center justify-content-between
       pt-4 pb-6 px-4">
       <div class="d-flex align-items-center my-2">
         <div class="avatar-xxl avatar-indicators avatar-online 
           position-relative d-flex justify-content-start
           align-items-end mt-n10">
           <img src="${data.avatar_url}" class="avatar-xxl
           rounded-circle border border-2 w-25 my-2" alt="Image">
       
         <div class="lh-1">
           <h2 class="mb-0 fs-1 mx-3">${data.name}
             <a href="#!" class="text-decoration-none">

             </a>
           </h2>
           <p class="mx-4 fs-6 text-muted mb-4"> @${username}</p>
          <h6> Public Repo : ${data.public_repos}</h6>
           
         </div>
          </div> 
       </div>
           <ul class="nav nav-lt-tab px-4" id="pills-tab" role="tablist">

       <li class="nav-item">
       <h6>Followers</h6>
         <a class="nav-link active text-muted" href="#"> ${data.followers} </a>
       </li>
     </div>
   </div>    
   `
   main.innerHTML=profilecard;
}



const getRepo= async(username)=>{
    const repos =document.getElementById("col-id"); 
    const pagebox=document.getElementById("pagebox");
    // https://api.github.com/repositories/1300192/issues?page=1
    const responses= await fetch(APIURL + username+"/repos?per_page=10");
    const data = await responses.json();
    console.log(data.length)
const calrepo= document.getElementById("col-id")
data.forEach((item)=>

 {
      const repocard=`
<div class="col ">
   <div class="card shadow-sm">
<div class="card-body min-vh-10" >
    <h4><a id="repo-title" class="link-offset-2  link-underline-opacity- " style="text-decoration: none" target="blank" href=${item.html_url}>${item.name}</a></h1>
        <p>${item.description}</p>
       <div class="d-flex justify-content-between align-items-center">
     <div class="btn-group">
           <button type="button" class="btn mx-2 btn-sm btn-outline-secondary">View</button>
       <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
             </div>
    <small class="text-muted">9 mins</small>
     </div>
    </div> 
 </div>
</div>
`
      calrepo.insertAdjacentHTML("beforeend",repocard)
      
    });

}


getUser("surendar-m-2214");
getRepo("surendar-m-2214")

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = search.value
  if(user){
    getUser(user)
    getRepo(user)
    search.value = ''
  }
  else{
    return false;
  }
  const list = document.getElementById("col-id");

while (list.hasChildNodes()) {
  list.removeChild(list.firstChild);}
}


)

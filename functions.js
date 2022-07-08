const prettyNames = (str) => {
  return str.split(/[\-_]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}
const load_data = () => {
  fetch("https://api.github.com/users/SeraphDev6/repos?per_page=100")
  .then(response => response.json())
  .then(data => data.filter(repo => repo.has_pages && repo.name !='seraphdev6.github.io'))
  // .then(data => {console.log(data); return data})
  .then(data => data.map(repo => [repo.name, repo.default_branch,repo.topics]))
  .then(data => {
    document.getElementById('main').innerHTML+="<div id='projects'></div>";
    data.forEach(project =>{
      document.getElementById('projects').innerHTML +=(
        `<a href='./${project[0]}' class='projLink'>
          <div class='project'>
            <img class='cardImg' src='./img/SeraphDevLogo.png' alt='Image for repo ${project[0]}'>
            <div class='projectFooter'>
              <h3>${prettyNames(project[0])}</h3>
            </div>
          </div>
        </a>`
      )
    })
  })
}
setTimeout(()=>{
  document.querySelectorAll('img').forEach(img => img.className+=' top');
  load_data()
},1000)
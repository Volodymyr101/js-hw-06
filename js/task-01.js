const el = document.getElementById('categories');
const em = el.children;

console.log(`Number of categories: ${em.length}`);

for (let i=0; i<em.length; i+=1){
   let groupName = em[i].firstElementChild;
   console.log(`Category: ${groupName.textContent}`);
  
   let groupContent = em[i].lastElementChild;
   console.log(`Elements: ${groupContent.children.length}`);
}

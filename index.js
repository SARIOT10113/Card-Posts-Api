//dumy dada
// const posts = [
//     {
//         title:"This is title 01",
//         body:"This is body 01"

//     },
//     {
//         title:"This is title 02",
//         body:"This is body 02"

//     },
//     {
//         title:"This is title 03",
//         body:"This is body 03"

//     },
//     {
//         title:"This is title 04",
//         body:"This is body 04"

//     },
//     {
//         title:"This is title 05",
//         body:"This is body 05"

//     },
//     {
//         title:"This is title 06",
//         body:"This is body 06"

//     },
//     {
//         title:"This is title 07",
//         body:"This is body 07"

//     },
//     {
//         title:"This is title 08",
//         body:"This is body 08"

//     }
    
// ];
/* <div class="post">
            <h2 class="post-title">Post title</h2>
            <p class="post-dese">Lorem ipsum dolor sit amet.</p>
        </div> */

    // fetch data

    const fectDada = async (config) => {
        try{
            const res =await axios(config)
            return res.data;
        }catch(error){
         Error("data is not fetched")
        }

    } 




//selection
 const postsElement = document.querySelector(".posts");
 

 const loadAllData = async () => {
     const posts = await fectDada("https://jsonplaceholder.typicode.com/posts")
     posts.map(post => {
        const postElement =document.createElement("div");
        postElement.classList.add("post")
        postElement.innerHTML = 
        `<h2 class="post-title">${post.title}</h2>
        <p class="post-dese">F${post.body}.</p>
        `;
        postsElement.appendChild(postElement);
     });
     
 };
 loadAllData();



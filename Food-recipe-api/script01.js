let input = document.querySelector(".form-control")
let icon = document.querySelector("#search-icon")
let data_container_div = document.querySelector("#data-container");

async function fetchRecipe(para){
    let recipe;
    await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${para}`)
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        // console.log(data.meals[0])
        recipe = data
    })
    .catch((error)=>{
        return error
    })

    return recipe
}

    icon.addEventListener("click", async function(e){
        e.preventDefault()
        const searchInput = input.value.trim();
        let data =await fetchRecipe(searchInput)
        // console.log(data);
        data.meals.forEach(recipe => {
            console.log(recipe)
        });
        createRecipeDiv(data.meals)
    })


function createRecipeDiv(data) {
     // Clear previous content
     data_container_div.style.backgroundColor = "#dbe1e7d3";
    data.forEach(recipe => {
        let data_item_div = document.createElement("div");
        data_item_div.setAttribute("class", "data-item");

        let img_container_div = document.createElement("div");
        img_container_div.setAttribute("class", "img-container");

        let img_tag = document.createElement("img");
        img_tag.setAttribute("src", recipe.strMealThumb);

        let data_info_div = document.createElement("div");
        data_info_div.setAttribute("class", "data-info");

        let h2_title = document.createElement("h2");
        h2_title.textContent = recipe.strMeal;

        let view_info_btn = document.createElement("button");
        view_info_btn.classList.add("view-btn");
        view_info_btn.textContent = "View Recipe";

        let data_container_close = document.createElement("i");
        data_container_close.setAttribute("class", "fa-solid fa-circle-xmark");
        data_container_close.setAttribute("id", "close-btn");
        
        img_container_div.appendChild(img_tag);
        data_item_div.appendChild(img_container_div);
        data_item_div.appendChild(data_info_div);

        data_info_div.appendChild(h2_title);
        data_info_div.appendChild(view_info_btn);
        
        data_item_div.appendChild(data_container_close); // Append close button

        data_container_div.appendChild(data_item_div); // Append data item to container

        let main_close_btn =document.querySelector("#main-close-btn")
        main_close_btn.style.color="black"
        main_close_btn.addEventListener("click",function(){
            data_container_div.style.display="none"
        })
        // Event listener for close button
        data_container_close.addEventListener("click", function() {
            data_item_div.style.display = "none";
        });

        document.querySelectorAll('.view-btn').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelector('.view-recipe-data').style.display = 'block';
                
            });
        });
    
        // Close the modal when the 'close' button is clicked
        document.querySelector('.view-recipe-data .close').addEventListener('click', () => {
            document.querySelector('.view-recipe-data').style.display = 'none';
        });


    });

    gsap.from(".data-item", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3
    });

    let data_items = document.querySelectorAll(".data-item");
    data_items.forEach(item => {
        item.addEventListener("mouseenter", function() {
            gsap.to(item, {
                scale: 1.1,
                duration: 0.4
            });
        });
        item.addEventListener("mouseleave", function() {
            gsap.to(item, {
                scale: 1,
                duration: 0.4
            });
        });
    });
}


    // Show the modal when any 'view-btn' button is clicked
    
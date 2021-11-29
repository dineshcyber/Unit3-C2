let get_meal = document.getElementById("get_meal");
    let meal_container = document.getElementById("meal");

    

    let createMeal = meal =>{
        let ingredients =[];
        for(let i=1;i<=10;i++){
            if(meal[`strIngredient${i}`]){
                ingredients.push(
                    `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
                );
            } else {
              break;
            }
        }
        let newrow = `<div class = "row">
          <div class = "columns">
              <img src = "${meal.strMealThumb}">
              ${meal.strCategory ? `<p>Category: ${meal.strCategory}</p>` :''}
          ${meal.strArea ? `<p>Area: ${meal.strArea}</p>` :''}
          ${meal.strTags ? `<p>Tags: ${meal.strTags.split(',').join(", ")}</p>` :''}
          Ingredients:
          <ul>
            ${ingredients.map(ingredient => `<li>
                ${ingredient}
            </li>`).join('')}
          </ul>
          </div>
           </div>`;
        meal_container.innerHTML = newrow;
    }
    get_meal.addEventListener("click",() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(
            res => res.json()
            ).then(res => {
                createMeal(res.meals[0]);
            }).catch(e =>{
                console.warn(e);
            });
    });
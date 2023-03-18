
export class Home{
    ui="";
    constructor(){
        this.getAllApi();
    }

    hide(){
        $("#menu").animate({left:-$("#menu .col-9").outerWidth(true)},500);
         $("#menu .links .lists li.one").animate({top : "100px"},500)
         $("#menu .links .lists li.two").animate({top : "100px"},500)
         $("#menu .links .lists li.three").animate({top : "100px"},500)
         $("#menu .links .lists li.four").animate({top : "100px"},500)
         $("#menu .links .lists li.five").animate({top : "100px"},500)
        $("#ev .close").addClass("d-none");
        $("#ev .show").removeClass("d-none");
    }
    show(){
 
        $("#menu .links .lists li.one").animate({top : 0},200)  
        $("#menu .links .lists li.two").animate({top : 0},400)
        $("#menu .links .lists li.three").animate({top : 0},600)
        $("#menu .links .lists li.four").animate({top : 0},800)
        $("#menu .links .lists li.five").animate({top : 0},1000)          

        $("#ev .show").addClass("d-none");
        $("#menu").animate({left:0},500)
        $("#ev .close").removeClass("d-none");
    }

    async getAllApi(){
        const request =  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        const response = await request.json();
        const data = response.meals;
        // console.log(data[0].strMeal);
        this.setApiData(data);
    }


    setApiData(arr){
        for (let i = 0; i < arr.length; i++) {
            this.ui+=`
            <div class="col-md-3  text-center">
                <div class="me-1 imgs position-relative overflow-hidden">
                    <img src="${arr[i].strMealThumb}" class=" rounded-3 img-fluid" alt="">
                    <div id="info" class=" position-absolute w-100 start-0 h-100 d-flex align-items-center justify-content-start rounded-4">
                    <h3>${arr[i].strMeal}</h3>
                    </div>                
                </div>
            </div>     
            `
        }
        document.querySelector("header .header-api").innerHTML = this.ui;
    }

}
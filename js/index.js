import { Home } from './Home/Home.js';
const hideMenu = new Home;

class Main{

    constructor(){
        
        $("#ev .close").click(function(){
            hideMenu.hide();
        
        });
        
        $("#ev .show").click(function(){
            hideMenu.show()
        });

    }
    
    
    
    
}

const main = new Main;

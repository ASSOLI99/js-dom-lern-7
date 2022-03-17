let checkBoxes=document.querySelectorAll(".item input");
let one;   
function namee(e){
    console.log(e);
    let isBetween=false;
    if(e.shiftKey && this.checked){
        checkBoxes.forEach(checking => {
            console.log(checking);
            if(checking==this || checking== one){
                
                isBetween=!isBetween;
                console.log("hi");
            }
            if(isBetween){
                checking.checked=true;
            }
        });
    }
    one=this;  
};
checkBoxes.forEach(function(e){
    e.addEventListener('click',namee);

}); 


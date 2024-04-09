function beforeSubmit(){
    let inputDate = document.querySelector(".inputDate");
    console.log("inputDate",inputDate.value);
    
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");    
    outputDate.value = formattedDate;
    console.log("outputDate",outputDate.value);
}
$(function () {
    $("#myForm").submit(handleFormSubmit);
  });

  
  
  function handleFormSubmit(e) {
    var name= $("#name").val();
    var password=$("#password").val();
    var email=$("#email").val();
    var c_password=$("#confirm_password").val();
    var success=1;

    console.log(name.length);
    console.log(typeof name);
    
    if(name.length<5){
        $("#name").addClass("error");
        if(name=="")
        {
            errorMessage="Name Field Should not be empty";
        }
        else
        {
            errorMessage="Please add more than 5 characters";
        }
        $("#nError").html(errorMessage); 
        var success=0;       
    }
    if(password.length<8){
        $("#password").addClass("error");
        if(password=="")
        {
            errorMessage="Password Field Should not be empty";
        }
        else
        {
            errorMessage="Please add more than 8 characters";
        }
        $("#pError").html(errorMessage);
        var success=0;        
    }
    if(email.length==""){
        $("#email").addClass("error");
        
        errorMessage="Email Field Should not be empty";
       
        $("#eError").html(errorMessage);   
        var success=0;     
    }
    if(c_password=="" || c_password!=password){
        $("#confirm_password").addClass("error");
        if(c_password=="")
        {
            errorMessage="Field Should not be empty";
        }
        else if(c_password!=password)
        {
            errorMessage="Password should be the same";
        }
        $("#cpError").html(errorMessage);
        var success=0;        
    }

    if(success==1){
        alert("Form Submitted Successfully");
    }
    else{
        alert("Form have errors");
    }

    

  
    e.preventDefault();
}



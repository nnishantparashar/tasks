


function getMessage(callback){
    setTimeout(() =>{
        const t = 10;
        document.getElementById("timer").innerHTML= t;
        callback(t);
    }, 1000);
    
}
function call1(t, callback){
    setTimeout(() =>{
        t = t-1;
        document.getElementById("timer").innerHTML= t;
        callback(t);
    }, 1000);
    
}
function call2(t, callback){
    setTimeout(() =>{
        t = t-2;
        document.getElementById("timer").innerHTML= t;
        callback(t);
    }, 1000);
    
}
function call3(t, callback){
    setTimeout(() =>{
        t = t-3
        document.getElementById("timer").innerHTML= t;
        callback(t);
    }, 1000);
    
}
function call4(t, callback){
    setTimeout(() =>{
        t = t-4
        document.getElementById("timer").innerHTML= t;
        callback(t);
    }, 1000);
    
}
function call5(t, callback){
    setTimeout(() =>{
        t = t-5
        document.getElementById("timer").innerHTML= t;
        callback(t);
    }, 1000);
    
}
function call6(t, callback){
    setTimeout(() =>{
        t = t-6
        document.getElementById("timer").innerHTML= t;
        callback(t);
    }, 1000);
    
}
function call7(t, callback){
    setTimeout(() =>{
        t = t-7
        document.getElementById("timer").innerHTML= t;
        callback(t);
    }, 1000);
    
}
function call8(t, callback){
    setTimeout(() =>{
        t = t-8
        document.getElementById("timer").innerHTML= t;
        callback(t);
    }, 1000);
    
}
function call9(t, callback){
    setTimeout(() =>{
        t = t-9
        document.getElementById("timer").innerHTML= t;
        callback(t);
    }, 1000);
    
}
function call10(t, callback){
    setTimeout(() =>{
        t = t-10
        document.getElementById("timer").innerHTML= t;
        callback(t);
    }, 1000);
    
}

getMessage((t) => {
    call1(t, (cb) =>{
        call2(t, (cb) =>{
            call3(t, (cb) =>{
                call4(t, (cb) =>{
                    call5(t, (cb) =>{
                        call6(t, (cb) =>{
                            call7(t, (cb) =>{
                                call8(t, (cb) =>{
                                    call9(t, (cb) =>{
                                        call10(t, (cb) =>{
                                            document.getElementById("timer").innerHTML="Happy Independence Day";
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});



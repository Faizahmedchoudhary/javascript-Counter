console.log('counter js ');


decrease =  document.getElementById('decrease');
increase =   document.getElementById('increase');
reset  =    document.getElementById('reset');


main = () => {
    let count = 0;
    document.getElementById('counter-p').innerHTML = count ;
    btn = document.querySelectorAll('.btn');
    
    btn.forEach(element => {
        element.addEventListener('click' , function(e)  {
            
            const ele = e.currentTarget.classList ;
            
            if(ele.contains('decrease')){
                console.log('decrease counter');
                count-- ;
                document.getElementById('counter-p').innerHTML = count ;

            }
            else if(ele.contains('increase')){
                console.log('increase counter');
                count++ ;
                document.getElementById('counter-p').innerHTML = count ;

            }
            else if(ele.contains('reset')){
                console.log('reset counter');
                count = 0 ;
                document.getElementById('counter-p').innerHTML = count ;

            }
        });
    });
        
}

main()




// decrease.addEventListener('click' , () => {
    
//     console.log('decrease click');
//     a = count-- ;
//     console.log(a);
//     document.getElementById('counter-p').innerHTML = a ;
//     });


//     increase.addEventListener('click' , () => {
//         console.log('increase click');
//         b = count++ ;
//         console.log(b);
//         document.getElementById('counter-p').innerHTML = b ;
        
//     });


//     reset.addEventListener('click' , () => {
//         console.log('reset click');
//         c = 0;
//         console.log(c);
//         document.getElementById('counter-p').innerHTML = c ;
//     });
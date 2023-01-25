


/// This request is responsible for fetching the items within the API and returning them to the user depending 
///on the value that the auto generator gives

const fetchItems = async(item) => {

   
    const APIResponse = await fetch("http://localhost:8080/usuarios");

    const data = await APIResponse.json();


    const button = document.getElementById('generate');




// This event listener is responsible for calculating the random number depending 
// on the minimum and maximum values delimited by the user
button.addEventListener('click', function() {
    
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);


    let result = Math.floor(Math.random() * (max - min + 1)) + min;




    if (isNaN(result)) {
    
        result = 'Valor inválido';
    
    }
                 

    document.querySelector('#result > span').textContent = result;
    document.querySelector('#description > span').textContent =    data[result]['nome']; 
});



}
fetchItems('3')

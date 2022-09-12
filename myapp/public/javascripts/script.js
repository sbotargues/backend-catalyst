
document.addEventListener("DOMContentLoaded", function(){   
    let addToList = document.getElementById('add-to-list');
    let searchInput = document.querySelector('input[name=search]'); 

    /* this variable will hold the script tag with your desired data */
    var myScript = document.createElement('script');

    //Create the AmazonAutocomplete with our desired properties
    let masthead__search = new AmazonAutocomplete({
        selector: '#search-input',
        hideOnblur: false
    });

    function myAmazingFunction(data){
        document.getElementById('output').innerHTML = data;
    }

    searchInput.addEventListener("keyup", function(){
        if(searchInput.value.length > 0) {  
            addToList.removeAttribute('disabled'); 
            //let target = $('[name=search]').val();

            //Log the selected word to the console
            searchInput.onSelectedWord(word => console.log(`searching for ${word}...`));

            //Populate your custom panel whenever there are new suggested words available
            searchInput.onNewWords(words => words.forEach(word => addWordToCustomPanel(word)));


        } else {
            addToList.removeAttribute('disabled', 'disabled'); 
        } 
    });
});
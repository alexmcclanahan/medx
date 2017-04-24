$(document).ready(script);

function script() {


$('.codes-button').on('click', function dbsearchfunction() {

        console.log("in script");
        window.location = "http://209.208.62.117/dataByTx?tx=" + $("treatment_input");
        /* figure out how to relate to SQL DB and print codes 
            user input ---> SQL database information ---> store in js as var codes 
                (document.getElementById("ICD_codes").innerHTML = codes; ---> HTML
        */

  });
}

//now need .onclick to trigger the function codes()...

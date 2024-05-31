window.addEventListener('load', function () {
    fetchCountries()  


        // add event listeners to the ul
        var foreachcountryOptInput= Array.from(document.getElementsByTagName('ul'))                    
        foreachcountryOptInput.forEach(element => {
            element.addEventListener('click', async function (event) {
                //   console.log(event.target.innerHTML); 
                 var list = event.target         
                 var countrynames=  event.target.innerHTML
                //  console.log(countrynames);
                 document.getElementById("upperText").innerText = countrynames;
                 Flag (countrynames);
            })
        
        });
     })

     



      async function fetchCountries() {

            // fetching the resource by setting values in the fetch function
            var response = await fetch('https://restcountries.com/v3.1/all?fields=name'
                           );
            if (response.ok) {
                var res = await response.json()
                var Countrynameres = res
                // converting the Countrynameres object to an array
                var arrCountries = Object.values(Countrynameres)                  
                var liHTML='';
                countryNamesArray =[];
                arrCountries.forEach(function (foreachcountry) {
                    countryNamesArray[countryNamesArray.length] = foreachcountry['name']['common']
                });
                countryNamesArray.sort() 
                   countryNamesArray.forEach(function(country){
                    liHTML += '<li> <a style="text-decoration: none; color: black; id="coun"  href="javascript:void(0)"  >'+country+'</a> </li>';
                   })
            //    console.log(liHTML );
                document.getElementById('countries').innerHTML = liHTML  
            } else {
                alert('Something went wrong ...')
            }

      }


      async function Flag (countrynames) { 
                // fetching the resource by setting values in the fetch function
                var response = await fetch('https://restcountries.com/v3.1/name/'+countrynames+'?fields=flags'
                              );
                //   console.log(response);
                if (response.ok) {
                    var res = await response.json()
                    console.log(res);
                    res.forEach(function (foreachflag) {
                     var flagOfCountry = foreachflag;
                    var propertyFlag = Object.entries(flagOfCountry)
                     var arrayOfFlag = propertyFlag[0];
                     var countryFlag = arrayOfFlag[1];
                      var ValuesFlag = Object.values(countryFlag)
                    var flagpng = ValuesFlag[0];
                   var flag = document.getElementById('Flag').src = flagpng;
                    // console.log(flag);
                      return flag;
                })
                    
                } else {
                   return {'success':false}
                }

    
        }

        
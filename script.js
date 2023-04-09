document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
      const choice = document.querySelector('input').value
      const url = `https://api.nasa.gov/planetary/apod?api_key=hf1a7tWhwvM52X38hFgcd8sTazYbaHpsDircyf3E&date=${choice}`  // be sure to use tic marks at the beginning and end of the url ex ; `https://www.wtf.com` use the ` not ' // Use the API Documentation to find the correct parameters
            console.log('choice') // to see your choice in the Console's log in the inspect tool 

      fetch(url)
      
            .then(res => res.json()) // parse response as json
            .then(data => {

                  console.log(data)
                  document.querySelector('img').src = data.hdurl
                  document.querySelector('h3').innerText = data.explanation
            if (data.media_type === 'image' ){                   // media ties to the data object make sure use data. to attach the para
                  document.querySelector('img').src = data.hdurl
            
            }else if(data.media_type === 'video'){
                  document.querySelector('iframe').src = data.url // videos only need url not hd url
            }
            
            })  
      .catch(err => {
            console.log(`error ${err}`)
      });




      // WE FUCKIN DID IT FINALLY !!!!!!!


}
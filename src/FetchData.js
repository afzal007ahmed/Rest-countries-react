import axios from 'axios'
function ToFetch() {

    return new Promise((resolve, reject) => {
            axios.get('https://restcountries.com/v3.1/all')
            .then((data) => {
                console.log(data.data)
                return data.data;
            })
            .then((finalData) => {
                resolve( finalData )
            })
            .catch((err) => {
                reject(err) ;
            })

    })
}

let promise = new Promise(( resolve , reject ) => {
    ToFetch().then((data) => {
        console.log( data )
        resolve( data ) ;
    })
    .catch((err) => {
        reject(err) ;
    })
}) 

export default promise ; 
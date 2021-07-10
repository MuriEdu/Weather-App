const appKey = 'mZVJQv6P7G7QPcPzHO7wvBjUnx4VBwwE' 

export const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${appKey}&q=${city}`
    try {
        const response = await fetch(base + query)
        const data = await response.json()
        const code = data[0].Key
        getCurrentConditions(code)
        
    } catch (error) {
        console.log(error);
    }
}

export const getCurrentConditions = async (code) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${code}?apikey=${appKey}`
    try {
        const response = await fetch(base + query)
        const data = await response.json()
        console.log( await data);
    } catch (error) {
        console.log(error);
    }  
}

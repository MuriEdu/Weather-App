const appKey = 'OlXUL7PWa2yco8L66BvgSVTT5TWXpTr0 ' 

export const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${appKey}&q=${city}`
    try {
        const response = await fetch(base + query)
        const data = await response.json()
        return data[0]
    } catch (error) {
        console.error(error);
    }
}

export const getCurrentConditions = async (code) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${code}?apikey=${appKey}`
    try {
        const response = await fetch(base + query)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
    }  
}


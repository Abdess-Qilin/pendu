async function api() {
    try {
        let fetchOptions = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache'
        };

        const response = await fetch('https://trouve-mot.fr/api/sizemax/4/10', fetchOptions);
        const jsonResponse = await response.json();
        return (jsonResponse)
    } catch (error) {
        console.log('Fetch error: ', error);
    }
}


export async function catchApi() {
    try {
        const tab = await api();
        return tab
    } catch (error) {
        // Gérer les erreurs qui se sont produites dans fetchAPI()
    }
}


const test = catchApi()
console.log(test)

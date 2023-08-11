
const mainComtroller = {

    accueil: function (req, res) {

        res.send('ok')
    },

    mot4: async function (req, res) {

        try {
            let fetchOptions = {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache'
            };

            const response = await fetch('https://trouve-mot.fr/api/sizemax/4/10', fetchOptions);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            res.json(jsonResponse);
        } catch (error) {
            console.log('Fetch error: ', error);
        }

    },
    mot5: async function (req, res) {

        try {
            let fetchOptions = {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache'
            };

            const response = await fetch('https://trouve-mot.fr/api/size/5/10', fetchOptions);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            res.json(jsonResponse);
        } catch (error) {
            console.log('Fetch error: ', error);
        }

    },
    mot6: async function (req, res) {

        try {
            let fetchOptions = {
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache'
            };

            const response = await fetch('https://trouve-mot.fr/api/sizemin/6/10', fetchOptions);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            res.json(jsonResponse);
        } catch (error) {
            console.log('Fetch error: ', error);
        }

    },

}

export default mainComtroller;
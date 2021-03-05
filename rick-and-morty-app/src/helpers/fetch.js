export const getCharacters = async(page) => {

    const corsHeroku = 'https://obscure-mesa-98003.herokuapp.com';
    const urlApi = `https://rickandmortyapi.com/api/character?page=${page}`;
    const url = `${corsHeroku}/${urlApi}`;

    try {

        const resp = await fetch(url);
        if (!resp.ok) throw new Error('No se pudo realizar la petición Characters');
        const data = await resp.json();

        return data;

    } catch (error) {

        console.log(error);

    }

};

export const getEpisodes = async(page) => {

    const corsHeroku = 'https://obscure-mesa-98003.herokuapp.com';
    const urlApi = `https://rickandmortyapi.com/api/episode?page=${page}`;
    const url = `${corsHeroku}/${urlApi}`;

    try {

        const resp = await fetch(url);
        if (!resp.ok) throw new Error('No se pudo realizar la petición Episodes');
        const data = await resp.json();

        return data;

    } catch (error) {

        console.log(error);

    }

};

export const getSearchParams = async (pages, params) => {

    const corsHeroku = 'https://obscure-mesa-98003.herokuapp.com';
    const urlApi = `https://rickandmortyapi.com/api/character?page=${pages}&name=${params}`;
    const url = `${corsHeroku}/${urlApi}`;
   
    try {

        const resp = await fetch(url);
        if (!resp.ok) throw new Error('No se pudo realizar la petición Params');
        const data = await resp.json();

        return data;

    } catch(error) {

        console.log(error);

    }

}; 
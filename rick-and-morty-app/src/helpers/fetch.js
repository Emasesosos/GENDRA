export const getCharacters = async(page) => {

    const corsHeroku = 'https://obscure-mesa-98003.herokuapp.com';
    const urlApi = `https://rickandmortyapi.com/api/character?page=${page}`;
    const url = `${corsHeroku}/${urlApi}`;

    try {

        const resp = await fetch(url);
        if (!resp.ok) throw new Error('No se pudo realizar la petición');
        const data = await resp.json();

        return data;

    } catch (error) {

        throw error;

    }

};
import Swal from 'sweetalert2';

export const getCharacters = async(page) => {

    const corsHeroku = 'https://obscure-mesa-98003.herokuapp.com';
    const urlApi = `https://rickandmortyapi.com/api/character?page=${page}`;
    const url = `${corsHeroku}/${urlApi}`;

    try {

        const resp = await fetch(url);
        if (!resp.ok) throw new Error(resp.statusText);
        const data = await resp.json();

        return data;

    } catch (error) {

        console.log(error);

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
        });

    }

};

export const getEpisodes = async(page) => {

    const corsHeroku = 'https://obscure-mesa-98003.herokuapp.com';
    const urlApi = `https://rickandmortyapi.com/api/episode?page=${page}`;
    const url = `${corsHeroku}/${urlApi}`;

    try {

        const resp = await fetch(url);
        if (!resp.ok) throw new Error(resp.statusText);
        const data = await resp.json();

        return data;

    } catch (error) {

        console.log(error);

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
        });

    }

};

export const getSearchParams = async(pages, params) => {

    const corsHeroku = 'https://obscure-mesa-98003.herokuapp.com';
    const urlApi = `https://rickandmortyapi.com/api/character?page=${pages}&name=${params}`;
    const url = `${corsHeroku}/${urlApi}`;

    try {

        const resp = await fetch(url);
        if (!resp.ok) throw new Error(resp.statusText);
        const data = await resp.json();

        return data;

    } catch (error) {

        console.log(error);

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
        });

    }

};
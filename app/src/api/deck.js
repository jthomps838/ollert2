import axios from 'axios';

export const getDeckById = async ({ queryKey }) => {
    try {
        const { data } = await axios.get(
            `${import.meta.env.VITE_SERVER_URL}/api/decks/${queryKey[0]}`,
        );
        return data?.deck;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};

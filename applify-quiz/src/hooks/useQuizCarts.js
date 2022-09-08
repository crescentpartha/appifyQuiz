import { useEffect, useState } from "react";

const useQuizCarts = () => {
    const [carts, setCarts] = useState([]);

    useEffect( () => {
        fetch('quizzes.json')
        .then(res => res.json())
        .then(data => setCarts(data.quizzesCart));
    }, []);

    return [carts, setCarts];
}

export default useQuizCarts;
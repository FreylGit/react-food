import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";
function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);
    return (
        <div>
            <button className="btn btn-color" onClick={() => navigate(-1)}>
                Назад
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </div>
    );
}
export { Category };

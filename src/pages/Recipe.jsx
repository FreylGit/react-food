import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6>{recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Область: {recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>
                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ингредиент</th>
                                <th>Количество</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes("Ingredient") && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                            <tr>
                                <td>Alvin</td>
                                <td>Eclair</td>
                            </tr>
                        </tbody>
                    </table>
                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5>Видео рецепт</h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                allowfullscreen
                            />
                        </div>
                    ) : null}
                </div>
            )}
            <button className="btn btn-color" onClick={() => navigate(-1)}>
                Назад
            </button>
        </>
    );
}
export { Recipe };

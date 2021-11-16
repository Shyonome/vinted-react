import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Publish = () => {
  const [data, setData] = useState();
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState();
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState();

  const token = Cookies.get("UserPass");

  const checkSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("picture", file);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>Publish Page</div>

      <div>Vend ton article</div>

      <form onSubmit={checkSubmit}>
        <input
          onChange={(event) => setFile(event.target.files[0])}
          type="file"
        />

        <div>
          <h4>Titre</h4>
          <input
            type="text"
            placeholder="Titre"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <h4>Décris ton article</h4>
          <textarea
            placeholder="Description"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <h4>Marque</h4>
          <input
            type="text"
            placeholder="Marque"
            onChange={(event) => setBrand(event.target.value)}
          />
        </div>
        <div>
          <h4>Taille</h4>
          <input
            type="number"
            placeholder="Taille"
            onChange={(event) => setSize(Number(event.target.value))}
          />
        </div>
        <div>
          <h4>Couleur</h4>
          <input
            type="text"
            placeholder="Couleur"
            onChange={(event) => setColor(event.target.value)}
          />
        </div>
        <div>
          <h4>Etat</h4>
          <input
            type="text"
            placeholder="Etat"
            onChange={(event) => setCondition(event.target.value)}
          />
        </div>
        <div>
          <h4>Lieu</h4>
          <input
            type="text"
            placeholder="Lieu"
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div>
          <h4>Prix</h4>
          <input
            type="number"
            placeholder="Prix"
            onChange={(event) => setPrice(Number(event.target.value))}
          />
        </div>

        <div>
          <button type="submit">Ajouter</button>
        </div>
      </form>
      {console.log(data)}
      {data && <img src={data.product_image.secure_url} alt="" />}
    </div>
  );
};

export default Publish;

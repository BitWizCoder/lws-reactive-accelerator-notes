import { getImageUrl } from "./utils.js";
import "./style.css";

function Profile({
  name,
  imageID,
  Profession,
  awards,
  discovery,
  imageSize = 70,
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageID)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {Profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function PassingProps() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name={"Maria Skłodowska-Curie"}
        imageID="szV5sdG"
        Profession={"geochemist"}
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovery={"a method for measuring carbon dioxide in seawater"}
        imageSize={80}
      />

      <Profile
        name="Maria Skłodowska-Curie"
        imageID="YfeOqp2"
        Profession="geochemist"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovery={"a method for measuring carbon dioxide in seawater"}
        imageSize={80}
      />
      <Profile
        name={"Maria Skłodowska-Curie"}
        imageID="szV5sdG"
        Profession={"geochemist"}
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovery={"a method for measuring carbon dioxide in seawater"}
        imageSize={80}
      />
    </div>
  );
}

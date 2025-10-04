import { Card } from "antd";

const CardComponent = ({ hero }) => {
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
    url,
  } = hero;

  return (
    <Card style={{ width: "100%", maxWidth: 500, margin: "auto" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          alignItems: "stretch",
        }}
      >
       
        <div
          style={{
            flex: "0 0 40%",
            maxHeight: "200px",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <img
            src={url}
            alt={superhero}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              display: "block",
            }}
          />
        </div>

      
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3>{superhero} - {alter_ego}</h3>
          <h4>{first_appearance}</h4>
          <h5>{characters}</h5>
          <h6>{publisher}</h6>
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;

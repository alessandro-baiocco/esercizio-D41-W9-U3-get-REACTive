const PostoCard = (props) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <div style={{ width: "21%", padding: "4px", border: "3px solid blue" }}>
        <img src={props.src} alt={props.alt} style={{ width: "90%", height: "40%" }} />
        <p style={{ width: "90%", height: "40%" }}>{props.text}</p>
      </div>
      <div style={{ width: "21%", padding: "4px", border: "3px solid blue" }}>
        <img src={props.src} alt={props.alt} style={{ width: "90%", height: "40%" }} />
        <p style={{ width: "90%", height: "40%" }}>{props.text}</p>
      </div>
      <div style={{ width: "21%", padding: "4px", border: "3px solid blue" }}>
        <img src={props.src} alt={props.alt} style={{ width: "90%", height: "40%" }} />
        <p style={{ width: "90%", height: "40%" }}>{props.text}</p>
      </div>
      <div style={{ width: "21%", padding: "4px", border: "3px solid blue" }}>
        <img src={props.src} alt={props.alt} style={{ width: "90%", height: "40%" }} />
        <p style={{ width: "90%", height: "40%" }}>{props.text}</p>
      </div>
      <div style={{ width: "21%", padding: "4px", border: "3px solid blue" }}>
        <img src={props.src} alt={props.alt} style={{ width: "90%", height: "40%" }} />
        <p style={{ width: "90%", height: "40%" }}>{props.text}</p>
      </div>
      <div style={{ width: "21%", padding: "4px", border: "3px solid blue" }}>
        <img src={props.src} alt={props.alt} style={{ width: "90%", height: "40%" }} />
        <p style={{ width: "90%", height: "40%" }}>{props.text}</p>
      </div>
      <div style={{ width: "21%", padding: "4px", border: "3px solid blue" }}>
        <img src={props.src} alt={props.alt} style={{ width: "90%", height: "40%" }} />
        <p style={{ width: "90%", height: "40%" }}>{props.text}</p>
      </div>
      <div style={{ width: "21%", padding: "4px", border: "3px solid blue" }}>
        <img src={props.src} alt={props.alt} style={{ width: "90%", height: "40%" }} />
        <p style={{ width: "90%", height: "40%" }}>{props.text}</p>
      </div>
    </div>
  );
};

export default PostoCard;

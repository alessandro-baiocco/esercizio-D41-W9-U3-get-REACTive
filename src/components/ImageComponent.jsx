import react from "react";

class ImageComponent extends react.Component {
  render() {
    return <img src={this.props.src} alt={this.props.alt} style={{ width: "100%", height: "100px" }} />;
  }
}

export default ImageComponent;

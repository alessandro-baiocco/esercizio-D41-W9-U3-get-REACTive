import react from "react";

class ImageComponent extends react.Component {
  render() {
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}

export default ImageComponent;

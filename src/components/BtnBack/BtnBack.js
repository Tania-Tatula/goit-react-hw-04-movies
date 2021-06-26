import { Component } from "react";
import { withRouter } from "react-router-dom";
import routes from "../../routes";

class BtnBack extends Component {
  renderBackUrl = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.home);

    // if(location.state && location.state.from){
    //     return history.push(location.state.from);
    // }
    // history.push(routes.home);
  };

  render() {
    return (
      <button variant='contained' onClick={this.renderBackUrl}>
        Back
      </button>
    );
  }
}
export default withRouter(BtnBack);

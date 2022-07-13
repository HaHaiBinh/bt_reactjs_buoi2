import React, { Component } from "react";
import { glasses } from "./data_renderGlass";

export default class BaiTapThuKinh extends Component {
  state = {
    listGlases: glasses,
    glassesCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderListGlasses = () => {
    return this.state.listGlases.map((item, index) => {
      return (
        <img
          onClick={() => {
            this.changeGlasses(item);
          }}
          className="ml-1 p-2 border border-width-1"
          style={{ width: "120px", cursor: "pointer" }}
          key={index}
          src={item.url}
        />
      );
    });
  };

  changeGlasses = (newGlasses) => {
    this.setState({
      glassesCurrent: newGlasses,
    });
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "1550px",
          minHeight: "730px",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.5)", minHeight: "730px" }}>
          <h3
            style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            className="text-center text-light p-5"
          >
            TRY GLASSES APP ONLINE
          </h3>

          <div className="container">
            <div className="row mt-5">
              <div className="col-6 text-center position-relative">
                <img
                  className="position-absolute"
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="model.jpg"
                />
                <img
                  style={{
                    width: "140px",
                    top: "78px",
                    right: "89px",
                    opacity: "0.8",
                  }}
                  className="position-absolute"
                  src={this.state.glassesCurrent.url}
                />
                <div
                  style={{
                    width: "250px",
                    backgroundColor: "rgba(255,127,0,0.5)",
                    textAlign: "left",
                    left: "270px",
                    top: "205px",
                    height: "100px",
                  }}
                  className="position-relative"
                >
                  <span
                    style={{ color: "#A020F0" }}
                    className="font-weight-bold"
                  >
                    {this.state.glassesCurrent.name}
                  </span>
                  <br />
                  <span style={{ fontSize: "14px" }}>
                    {this.state.glassesCurrent.desc}
                  </span>
                </div>
              </div>

              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* render glasses */}

          <div className=" bg-light container text-center mt-5 d-flex justify-content-center">
            {this.renderListGlasses()}
          </div>
        </div>
      </div>
    );
  }
}

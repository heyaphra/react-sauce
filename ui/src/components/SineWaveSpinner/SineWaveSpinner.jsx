import React, { Component, createRef } from "react";
import "./SineWaveSpinner.css";

const colorModel = {
  C: "#1892CB",
  Db: "#3D5AA7",
  D: "#463E8C",
  Eb: "#783A91",
  E: "#F5BC1A",
  F: "#EFE83D",
  Gb: "#CBDC3E",
  G: "#64AE51",
  Ab: "#A5264B",
  A: "#E93229",
  Bb: "#EA522A",
  B: "#F29622",
};

const TWO_PI = 2 * Math.PI;

function pxToNum(px) {
  return +px.split("px")[0];
}

class WaveNode {
  constructor(shape, container, strokeWidth) {
    this.shape = shape;
    this.container = container;
    this.shape.ref = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    this.shape.ref.setAttribute("stroke-width", strokeWidth || 4);

    this.shape.ref.setAttribute("x1", shape.x1);
    this.shape.ref.setAttribute("y1", shape.y1);
    this.shape.ref.setAttribute("x2", shape.x2 || 0);
    this.shape.ref.setAttribute("stroke", shape.stroke);

    container.ref.appendChild(shape.ref);
  }

  setColor(color) {
    this.shape.ref.setAttribute("stroke", color);
  }

  moveTo(x1, y1, x2, y2) {
    this.shape.ref.setAttribute("x1", x1);
    this.shape.ref.setAttribute("y1", y1);
    this.shape.ref.setAttribute("x2", x2);
    this.shape.ref.setAttribute("y2", y2);
  }
}

class SineWaveSpinner extends Component {
  viewbox = createRef();

  calcWave = () => {
    const { dx, canvasHeight } = this;
    let x = this.theta;
    for (let i = 0; i < this.yvalues.length; i++) {
      let x1 =
        this.canvasWidth / 4 + ((this.WAVE_WIDTH + this.xspacing) / 12) * i;
      this.yvalues[i] = Math.sin(x) * this.amplitude;
      this.nodes[i].moveTo(
        x1,
        canvasHeight / 2 + this.yvalues[i],
        x1,
        canvasHeight / 2 + this.yvalues[(i + 6) % this.yvalues.length]
      );
      x += dx;
    }
    this.theta += (this.props.speed || 2) * 0.012345679;
  };

  play = () => {
    this.paused = false;
    this.calcWave();
    this.anim = requestAnimationFrame(this.play);
  };

  componentDidMount() {
    const { amplitude, period, strokeWidth } = this.props;
    if (!this.viewbox.current) return;
    const { width, height } = getComputedStyle(this.viewbox.current);
    this.canvasWidth = pxToNum(width);
    this.canvasHeight = pxToNum(height);
    this.amplitude = amplitude || 12;
    this.period = period || 1;
    this.WAVE_WIDTH = this.canvasWidth / 2;
    this.xspacing = this.WAVE_WIDTH / this.amplitude;
    this.dx = (TWO_PI / this.period) * this.xspacing;
    this.theta = this.props.theta || 0;
    this.yvalues = new Array(12).fill(0);
    this.nodes = Object.keys(colorModel).map((color, idx) => {
      return new WaveNode(
        {
          x1: idx * (pxToNum(width) / this.amplitude),
          y1: idx * (pxToNum(height) / this.amplitude),
          stroke: colorModel[color],
        },
        { ref: this.viewbox.current },
        strokeWidth
      );
    });
    this.play();
  }

  render() {
    const { loadingTextTop, loadingTextBottom, style } = this.props;
    return (
      <div
    
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2vh",
        }}
      >
        {loadingTextTop ? <small>{loadingTextTop}</small> : null}
        <svg
          className="sine-wave"
          style={this.props.style}
          ref={this.viewbox}
        ></svg>
        {loadingTextBottom ? <small>{loadingTextBottom}</small> : null}
      </div>
    );
  }
}

export { SineWaveSpinner };

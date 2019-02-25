import React, { Component } from 'react';
import { defaults, Line } from 'react-chartjs-2';

class Chart extends Component {
  state = {
    pointData: []
  }

  async componentDidUpdate(prevProps) {
    const { token } = this.props;

    if (token !== prevProps.token) {
      const totalSupply = await token.methods.totalSupply().call();
      const pointData = this.createData(totalSupply, 16);
      this.setState({ pointData });
    }
  }

  createData = (totalSupply, numPoints) => {
    if (numPoints < 2) {
      throw new Error('Chart data requires at least 2 points');
    }

    const { web3 } = this.props;

    const xEnd = web3.utils.fromWei(totalSupply, 'ether');

    return Array.from(Array(numPoints).keys()).map(index => {
      const x = xEnd * index / (numPoints - 1);
      return {
        x: x,
        y: x / 1000000
      }
    });
  };

  render() {
    const { pointData } = this.state;

    const data = {
      datasets: [{
        label: 'ETH Contributed',
        data: pointData,
        backgroundColor: '#ec4d37',
        fill: false,
        borderCapStyle: 'square',
        borderColor: '#ec4d37',
        borderWidth: 5,
        pointRadius: 0,
        lineTension: 0
      }]
    };

    defaults.global.defaultFontFamily = "'Open Sans', 'Helvetica Neue', Arial, Helvetica, sans-serif";
    defaults.global.defaultFontColor = '#1d1b1b';
    defaults.global.defaultFontSize = 14;

    const xValues = pointData.map(point => point.x);

    const options = {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          type: 'linear',
          scaleLabel: {
            display: true,
            labelString: 'Tokens Sold',
            fontStyle: 'bold'
          },
          gridLines: {
            color: 'rgba(34,36,38,.1)',
            drawTicks: false,
            zeroLineColor: 'rgba(0,0,0,0)'
          },
          ticks: {
            min: Math.min.apply(this, xValues),
            max: Math.max.apply(this, xValues),
            maxTicksLimit: 2,
            beginAtZero: true,
            padding: 10
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Token Price',
            fontStyle: 'bold'
          },
          gridLines: {
            color: 'rgba(34,36,38,.1)',
            drawTicks: false,
            zeroLineColor: 'rgba(0,0,0,0)'
          },
          ticks: {
            beginAtZero: true,
            padding: 10
          }
        }]
      }
    }

    return (
      <Line data={data} options={options} />
    );
  }
}

export default Chart;

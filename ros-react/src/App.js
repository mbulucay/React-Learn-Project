import React from 'react';
import {
  CircularGauge, Geometry, Scale, Label, ValueIndicator, SubvalueIndicator, RangeContainer, Range, Title, Export, Tooltip, Font, Margin, Tick, MinorTick
} from 'devextreme-react/circular-gauge';
import {
  LinearGauge,
  Geometry as LinearGaugeGeometry,
  Scale as LinearGaugeScale,
  Label as LinearGaugeLabel,
  ValueIndicator as LinearValueIndicator,
} from 'devextreme-react/linear-gauge';



class App extends React.Component {
  state = {
    value: 76
  }

  render() {
    // return (
    //   <PageNavbar/>
    // )

    return (
      <div>
        <div className="long-title">
          <h3>Deviation from the Target (Horizontal and Vertical)</h3>
        </div>
        <div id="gauge-demo">

        <CircularGauge
      id="gauge" /* style={{ width: 500, height: 500 }} */
      value={this.state.value}
      subvalues={[this.state.value, this.state.value * 2]}

    >
      <Scale startValue={0} endValue={1000} tickInterval={50} minorTickInterval={25}>
        <Label useRangeColors={true} />
        <Tick color="#9c9c9c" />
        <MinorTick visible={true} color="#9c9c9c" />
      </Scale>

      <Geometry
        startAngle={225}
        endAngle={315}>
      </Geometry>
      <ValueIndicator
        type="triangleNeedle"
        color="#8FBC8F"
        width={8}
        spindleGapSize={8}
        offset={2}
        spindleSize={16}
      ></ValueIndicator>

      <SubvalueIndicator
        type="triangleMarker"
        color="#8FBC8F"
        offset={-5}
      ></SubvalueIndicator>
      
      <RangeContainer >
        {
          [...Array(10)].map((_, i) =>
            <Range key={i} startValue={i * 100} endValue={(i + 1) * 100} />
          )
        }
      </RangeContainer>

      {/* <RangeContainer backgroundColor="none" /> */}

      <Title text="Temperature of the Liquid in the Boiler">
        <Font size={28} />
      </Title>

      <Export enabled={true} />

    </CircularGauge>

          <CircularGauge
            id="c1"
            value={20}
          >
            <Geometry startAngle={135} endAngle={45} />
            <Scale startValue={45} endValue={-45} tickInterval={45}>
              <Label customizeText={this.customizeText} />
            </Scale>
            <ValueIndicator baseValue={0} type="rangebar" />
          </CircularGauge>
          <LinearGauge
            id="c2"
            value={-10}
          >
            <LinearGaugeGeometry orientation="vertical" />
            <LinearGaugeScale startValue={-45} endValue={45} tickInterval={45}>
              <LinearGaugeLabel customizeText={this.customizeText} />
            </LinearGaugeScale>
            <LinearValueIndicator baseValue={0} />
          </LinearGauge>
        </div>
      </div>
    );
  }

  customizeText({ valueText }) {
    return `${valueText}°`;
  }
}

export default App;

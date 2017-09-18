import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount(){
    /*
9a5ed1c5-74cc-4c5-0b5b6-66a48e7ccff1
8af982b-1f1f-f4d4-983f-0a56db4c431a7
84a0dd6-2e8a-a4d0-f91d-b819b6724c69e
0f29174-60c8-0472-687a-73c501fd3b4b6
00001234-0000-1000-8000-00805f9b34fb
*/
  }
  async click(){
    try{
      //const device = await navigator.bluetooth.requestDevice({
      //  acceptAllDevices: true,
      //});
      const delay = time => new Promise(res=>setTimeout(()=>res(),time));
      const device = await window.navigator.bluetooth.requestDevice({
        filters: [{
          name: '00106013',
        }],
        optionalServices: [
          //'9a5ed1c5-74cc-4c50-b5b6-66a48e7ccff1'
            '1d0f3602-8dfb-4340-9045-513040dad991'
        ]
      });
      console.log('device', device.gatt);
      const service = await device.gatt.connect();
      console.log('service', service);
      //const serve = await service.getPrimaryService('9a5ed1c5-74cc-4c50-b5b6-66a48e7ccff1');
      const serve = await service.getPrimaryService('1d0f3602-8dfb-4340-9045-513040dad991');
      console.log('serve', serve);
      //const cha = await serve.getCharacteristic('35fe6272-6aa5-44d9-88e1-f09427f51a71');
      const cha = await serve.getCharacteristic(  'fec1805c-8905-4477-b862-ba5e447528a5');
      console.log('cha', cha);
      //cha.addEventListener('characteristicvaluechanged', (event) => {
      //  console.log(event);
      //});
      //const readData = await cha.readValue();
      //console.log('readData', readData);
      await cha.writeValue(new Uint8Array([1]));
    }catch(e){
      console.error(e);
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.click}>
          click
        </button>
      </div>
    );
  }
}

export default App;

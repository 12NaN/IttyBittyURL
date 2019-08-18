import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { createShortUrl} from './API';
class Home extends Component {
  constructor(){
    super();
    this.state = ({
        longUrl: ""
    })
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
  handleUserInput(e) {
    this.setState({ longUrl : e.target.value });
  }

  handleSubmit(e){
    let reqObj = {
      longUrl: this.state.longUrl
    };
    createShortUrl(reqObj)
    .then(json =>{
      setTimeout(() =>{
        this.setState({
          longUrl: this.state.longUrl,
          shortUrl: json.data.shortUrl
        });
      }, console.log(json.data.longUrl))

    })
  }
  render() {
    return (
    <form>
        <h1>IttyBittyUrl</h1>
        <h5>Enter Original Url</h5>
        <input type='text' onChange={this.handleUserInput.bind(this)} value={this.state.longUrl} placeholder='Enter link' name='link'/>
      <button type="button" onClick={this.handleSubmit}>ENTER</button>
      <div>
        <br></br>
        <h5>Your IttyBittyUrl:</h5>
        <a  refs = "a" href={this.state.shortUrl}>
          {this.state.shortUrl}
        </a>
        <br></br>
        <CopyToClipboard text={this.state.shortUrl}>
          <button type="button">Copy Link</button>
        </CopyToClipboard>
      </div>
   
   </form>

    );
  }
}

export default Home;
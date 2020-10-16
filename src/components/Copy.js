import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './Copy.css';

class Copy extends React.Component {
  state = {
    value: '0x9FA0f414357EC08fcC6c4DD9BaEa74eca32c842b',
    copied: false,
  };


  render() {
    return (
      <div>
        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({copied: true})}>
          <button className='cpButton'>Copy</button>
        </CopyToClipboard>

        {this.state.copied ? <span className='copied'>Copied.</span> : null}
      </div>
    );
  }
}
export default Copy;

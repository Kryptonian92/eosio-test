import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props){
        super(props);
        this.state={
          items: [],
          isLoaded: false,
          toggle: false,
        }
      }
    state = {
        on: false,
    }

    componentDidMount() {
        fetch('https://api.eosnewyork.io/v1/chain/get_info')
          .then(res => res.json())
          .then(json =>{
            this.setState({
              isLoaded: true,
              items: json,
            })
          });
      }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render() {
        var {isLoaded, items} = this.state;

        return (
            <div>
                <button onClick={this.toggle}>LOAD</button>
                {this.state.on && (
                    <ol>
                        <li><b>Block id:</b> {items.head_block_id}, <b>Timestamp:</b> {items.head_block_time}, <b>Number of actions:</b> {items.block_cpu_limit}</li>

                    </ol>

                )}
            </div>
        )
    }
}

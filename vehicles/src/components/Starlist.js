import React, { Component } from 'react'
import gridView from './Gridview'
import listView from './Listview'
import { nextPage, prevPage, massfilter, myFunctionMass } from './Displaystars'

class Starshtml extends Component {
	render() {
		return (
      <div>
        <section id="btnContainer">
          <button id="dibs" className="btn active" onClick={function() {listView()}}><i className="fa fa-bars" /> List</button>
          <button className="btn" onClick={() => gridView()}><i className="fa fa-th-large" /> Grid</button>
        </section>
        <br />
        <section id="filter"><button> Sort by:</button>
          <select>
            <option id="alphabet">alphabetically</option>
            <option id="fromheavier">from heavier</option>
            <option id="fromlighter">from lighter</option>
            <option id="frombigger">from bigger</option>
            <option id="fromsmaller">from smaller</option>
          </select>
        </section>
        <section className="row" id="stars" />
        <section id="paging">
          <a className="page clicked" onClick={() => prevPage()} id="btn_prev">1</a>
          <a className="page" onClick={() => nextPage()} id="btn_next">2</a>
        </section>
        <section>
          <h3>Heavier then:</h3>
          <button onClick="myFunctionMass()">Search</button>
          <input id="massofstar" type="number" />
          <p id="starmass" />
          <h3>Bigger then:</h3>
          <button onClick="myFunctionSize()">Search</button>
          <input id="sizeofstar" type="number" />
          <p id="starsize" />
        </section>
      </div>
    );
	}
}

export default Starshtml
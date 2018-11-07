import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';

export default class SearchBarView extends Component {
  addFilter(type, filter) {
    console.log("type", type);
    console.log("filter", filter);
  }

  render() {
    return (
      <div className="searchBar grid-layout">
        <div className="filter-form grid-layout">
          <form className="grid-item">
            <div>
              <h3>Robe du vin</h3>
              <div>
                <label><Field name="rouge" component="input" type="checkbox" value="rouge" onChange={(e, { checked }) => input.onChange(checked)} /> Rouge</label>
              </div>
              <div>
                <label><Field name="rose" component="input" type="checkbox" value="rose" /> Rosé</label>
              </div>
              <div>
                <label><Field name="blanc" component="input" type="checkbox" value="male" /> Blanc</label>
              </div>
              <div>
                <label><Field name="effervescent" component="input" type="checkbox" value="male" /> Effervescent</label>
              </div>
            </div>
          </form>
          <div className="grid-item">
            <h3>Catégorie</h3>
            <div>
              <label><Field name="sex" component="input" type="checkbox" value="male" /> Prix doux</label>
            </div>
            <div>
              <label><Field name="sex" component="input" type="checkbox" value="male" /> Belles découvertes</label>
            </div>
            <div>
              <label><Field name="sex" component="input" type="checkbox" value="male" /> Valeurs sûres</label>
            </div>
            <div>
              <label><Field name="sex" component="input" type="checkbox" value="male" /> Vins d'exceptions</label>
            </div>
          </div>
          <div className="grid-item">
            <h3>Région</h3>
            <div>
              <label><Field name="sex" component="input" type="checkbox" value="male" /> Alsaces</label>
            </div>
            <div>
              <label><Field name="sex" component="input" type="checkbox" value="male" /> Beaujolais</label>
            </div>
            <div>
              <label><Field name="sex" component="input" type="checkbox" value="male" /> Bordeaux</label>
            </div>
            <div>
              <label><Field name="sex" component="input" type="checkbox" value="male" /> Bourgogne</label>
            </div></div>
        </div>
      </div>
    )
  }
};

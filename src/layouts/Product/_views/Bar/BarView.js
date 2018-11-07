import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';

export default class SearchBarView extends Component {
  render() {
    return (
      <div className="searchBar grid-layout">
        <div className="filter-form grid-layout">
          <form className="grid-item">
            <div>
              <h3>Robe du vin</h3>
              <div>
                <label><Field name="rouge" component="input" type="radio" value="rouge" /> Rouge</label>
              </div>
              <div>
                <label><Field name="sex" component="input" type="radio" value="ale" /> Rosé</label>
              </div>
              <div>
                <label><Field name="sex" component="input" type="radio" value="male" /> Blanc</label>
              </div>
              <div>
                <label><Field name="sex" component="input" type="radio" value="male" /> Effervescent</label>
              </div>
            </div>
          </form>
          <div className="grid-item">
            <h3>Catégorie</h3>
            <div>
              <label><Field name="sex" component="input" type="radio" value="male" /> Prix doux</label>
            </div>
            <div>
              <label><Field name="sex" component="input" type="radio" value="male" /> Belles découvertes</label>
            </div>
            <div>
              <label><Field name="sex" component="input" type="radio" value="male" /> Valeurs sûres</label>
            </div>
            <div>
              <label><Field name="sex" component="input" type="radio" value="male" /> Vins d'exceptions</label>
            </div>
          </div>
          <div className="grid-item">
            <h3>Région</h3>
            <div>
              <label><Field name="sex" component="input" type="radio" value="male" /> Alsaces</label>
            </div>
            <div>
              <label><Field name="sex" component="input" type="radio" value="male" /> Beaujolais</label>
            </div>
            <div>
              <label><Field name="sex" component="input" type="radio" value="male" /> Bordeaux</label>
            </div>
            <div>
              <label><Field name="sex" component="input" type="radio" value="male" /> Bourgogne</label>
            </div></div>
        </div>
      </div>
    )
  }
};

import React, { Component } from "react";
import kebabCase from "lodash/kebabCase";

class FacilitatorCard extends Component {
  render() {
    const { card } = this.props;
    const { For } = this.props;
    const { explanation } = this.props;
    const { group } = this.props;
    const { prop1 } = this.props;
    const { prop2 } = this.props;
    const { prop3 } = this.props;

    return (
      <div className="back">
        <div className={`card ${kebabCase(For)}`}>
          <header className="card-header">
            <ul className="icon-list">
              <li className="icon group-size">
                <i className={`fci fci-${kebabCase(group)}`}></i>
              </li>
              <li className="icon category">
                <i className={`fci fci-${kebabCase(For)}`}></i>
              </li>
              <li className="icon props">
                { prop1 && <i className={`fci fci-${kebabCase(prop1)}`}></i>}
                { prop2 && <i className={`fci fci-${kebabCase(prop2)}`}></i>}
                { prop3 && <i className={`fci fci-${kebabCase(prop3)}`}></i>}
              </li>
            </ul>
            <span className="title">
                { card }
            </span>
          </header>
        <footer className="card-description">
          <p>{ explanation }</p>
        </footer>
      </div>
    </div>
    );
  }
}

export default FacilitatorCard;

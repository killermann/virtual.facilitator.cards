import React, { Component } from "react";
import kebabCase from "lodash/kebabCase";

class FacilitatorCard extends Component {
  render() {
    const { Card } = this.props;
    const { For } = this.props;
    const { Explanation } = this.props;
    const { Group } = this.props;
    const { Prop_1 } = this.props;
    const { Prop_2 } = this.props;
    const { Prop_3 } = this.props;

    return (
      <div className="back">
        <div className={`card ${kebabCase(For)}`}>
          <header className="card-header">
            <ul className="icon-list">
              <li className="icon group-size">
                <i className={`fci fci-${kebabCase(Group)}`}></i>
              </li>
              <li className="icon category">
                <i className={`fci fci-${kebabCase(For)}`}></i>
              </li>
              <li className="icon props">
                { Prop_1 && <i className={`fci fci-${kebabCase(Prop_1)}`}></i>}
                { Prop_2 && <i className={`fci fci-${kebabCase(Prop_2)}`}></i>}
                { Prop_3 && <i className={`fci fci-${kebabCase(Prop_3)}`}></i>}
              </li>
            </ul>
            <span className="title">
                { Card }
            </span>
          </header>
        <footer className="card-description">
          <p>{ Explanation }</p>
        </footer>
      </div>
    </div>
    );
  }
}

export default FacilitatorCard;

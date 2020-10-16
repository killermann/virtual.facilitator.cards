import React, { Component } from "react";
import { Link, navigate } from "gatsby";
import kebabCase from "lodash/kebabCase";

class Nav extends Component {
  render() {
    return (
      <header id="masthead" className="header shadow-md relative">
        <div className="wrap flex justify-between items-center py-4 lg:py-6">
          <Link className="logo" to={'/'} title="Go Home">Home</Link>
          <div className="flex items-center">
            <div className="relative mr-4">
              <select 
              className="block appearance-none w-full bg-white border-2 border-gray-200 theme-font font-black text-sm md:text-base lg:text-lg py-3 px-4 pr-8 rounded-sm leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
              onChange={(ev) => {
                const newPath =
                  `/processes/${kebabCase(ev.target.value)}`;
                  navigate(newPath);
              }}
              >
                <option value="none" selected disabled hidden>
                  Pick a Card (any card)
                </option>
                <option>I Know vs. "I Wonder" Lists</option>
                <option>4 Squares</option>
                <option>5 Whys</option>
                <option>10/10/10 Analysis</option>
                <option>100 (Bad) Ideas</option>
                {/* <option>Airport Signs</option> */}
                {/* <option>Analogizing</option>*/} */}
                <option>Anonymous Q&amp;A</option>
                {/* <option>Blank Clarification Card</option> */}
                {/* <option>Blank Emotion Card</option> */}
                {/* <option>Blank Execution Card</option> */}
                {/* <option>Blank Ideation Card</option> */}
                <option>Case Studies</option>
                {/* <option>Causal Diagram</option> */}
                {/* <option>Comparison Table</option> */}
                {/* <option>Concentric Circles</option> */}
                <option>Counterfactuals</option>
                {/* <option>Debate Club</option> */}
                {/* <option>Declarative Pairs</option> */}
                <option>Different Angles</option>
                <option>Dot Voting</option>
                <option>Drawing Caricatures</option>
                <option>Echoed Dialogue</option>
                <option>Fill in the Gap</option>
                {/* <option>Fill in the Model</option> */}
                <option>Finger Voting</option>
                <option>Fishbowl</option>
                <option>Frequently Asked Questions</option>
                <option>Gallery Exhibit</option>
                {/* <option>Generate a List</option> */}
                <option>Go-Around Share</option>
                <option>Heads Down, Hands Up</option>
                <option>Hot Seat</option>
                <option>Inside vs. Outside Thinking</option>
                {/* <option>Magnet Statements</option> */}
                {/* <option>Make a Model</option> */}
                {/* <option>Matchstick Convos</option> */}
                <option>Mindmapping</option>
                <option>Minute Papers</option>
                {/* <option>Opposite Thinking</option> */}
                <option>Pair &amp; Share</option>
                <option>Popcorn Share</option>
                {/* <option>Poster Presentation</option> */}
                {/* <option>Pro/Con Lists</option> */}
                <option>Rank Order Voting</option>
                <option>Red Team vs. Blue Team</option>
                <option>Reverse Engineering</option>
                <option>Sharing Withholds</option>
                {/* <option>Silent Reflection</option> */}
                <option>Spectrum Questions</option>
                <option>Sticky Note Generator</option>
                <option>Strike a Pose</option>
                {/* <option>Subcommittees</option> */}
                {/* <option>SWOT Analysis</option> */}
                {/* <option>Thinking &amp; Feeling</option> */}
                <option>Timeline Map</option>
                <option>Urgent vs. Important Grid</option>*/}
                <option>Vanishing Options</option>
                {/* <option>Venn Diagram</option>*/}
                {/* <option>What's the MVP?</option> */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Nav;

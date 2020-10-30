import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="bg-gradient-to-br from-teal-400 to-green-400 rounded text-white p-3">
        <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
        <form
            action="https://app.convertkit.com/forms/1779202/subscriptions"
            method="post"
            data-sv-form="1779202"
            data-uid="078699fe7b"
            data-format="inline"
            data-version="5"
            data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
            min-width="400 500 600 700 800"
        >
            <div>
              <div className="font-black text-lg leading-none theme-font text-teal-900 p-3 text-center">Get New Virtual Activities via Email:</div>
                <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                <div data-element="fields" className="seva-fields text-gray-900 formkit-fields flex flex-wrap items-center justify-center">
                    <input
                        className="m-3 mb-1 shadow appearance-none border-none rounded-sm w-full p-3 leading-tight focus:outline-none focus:shadow-outline"
                        aria-label="Your first name"
                        name="fields[first_name]"
                        placeholder="Your first name"
                        type="text"
                    />
                    <input
                        className="m-3 mb-1 shadow appearance-none border-none rounded-sm w-full p-3 leading-tight focus:outline-none focus:shadow-outline"
                        name="email_address"
                        aria-label="Your email address"
                        placeholder="Your email address"
                        required=""
                        type="email"
                    />
                    <button data-element="submit" className="btn btn-cta-alt uppercase font-black m-3 w-full" style={{boxShadow: '0 1px 4px rgba(0,0,0,.5)'}}>
                        <div className="formkit-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <span className="">Subscribe</span>
                    </button>
                </div>
            </div>
        </form>

      </div>
    );
  }
}

export default About;

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <div className="form-group">
        <h3>Get in Touch</h3>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/mgeppewq"
          method="POST"
        >
        <label>Email</label><br />
        <input size="70" type="email" name="email" /><br />
        <label>Message</label><br />
        <textarea 
          placeholder="Hi Sarah! I would like to schedule a meeting with you"
          cols="60" 
          rows="5" 
          type="text" 
          name="message" 
        /><br />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </div>
    );
  }
}


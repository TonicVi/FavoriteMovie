import React, { Component } from 'react';

class FormMovies extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      poster: '',
      comment: ''
     }
     this.onChange = this.onChange.bind(this);
     this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(e) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    e.preventDefault();
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Film ajouté avec l'ID${res}`);
        }
      }).catch(e => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film`)
      });
  }
  render() {
    return (
      <div className="FormMovie">
        <h1>Ton film préféré</h1>
        <form onSubmit={this.submitForm}>
          <fieldset>
            <div className="form-data">
              <label htmlFor="title">Titre</label>
              <input 
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input 
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>
            <div className="form-data1">
              <label htmlFor="comment">Commentaires</label>
              <textarea
                id="comment"
                name="comment"
                rows="5"
                cols="65"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovies;
import fetch from 'isomorphic-unfetch';

class APIHelper {

  static get API_URL() {
    return 'https://api.omaralbeik.com/v1';
  }

  static get BLOG_URL() {
    return `${this.API_URL}/blog/`;
  }

  static get PROJECTS_URL() {
    return `${this.API_URL}/projects/`;
  }

  static get CONTENTS_URL() {
    return `${this.API_URL}/contents/`;
  }

  static get SNIPPETS_URL() {
    return `${this.API_URL}/snippets/`;
  }

  static get CONTACT_URL() {
    return `${this.API_URL}/contact/`;
  }

  static fetchBlogPosts() {
    return this._fetchObject(this.BLOG_URL);
  }

  static fetchProjects() {
    return this._fetchObject(this.PROJECTS_URL);
  }

  static searchProjects(query) {
    return this._fetchObject(this.PROJECTS_URL, this._searchQuery(query));
  }

  static fetchBlogPost(post_id) {
    return this._fetchObject(this.BLOG_URL, post_id);
  }

  static fetchRelatedBlogPosts(post_id) {
    return this._fetchObject(this.BLOG_URL, `${post_id}/related`);
  }

  static searchBlogPost(query) {
    return this._fetchObject(this.BLOG_URL, this._searchQuery(query));
  }

  static fetchContent(slug) {
    return this._fetchObject(this.CONTENTS_URL, slug);
  }

  static fetchAbout() {
    return this._fetchObject(this.CONTENTS_URL, 'about');
  }

  static fetchSnippets() {
    return this._fetchObject(this.SNIPPETS_URL);
  }

  static fetchSnippet(snippet_id) {
    return this._fetchObject(this.SNIPPETS_URL, snippet_id);
  }

  static searchSnippet(query) {
    return this._fetchObject(this.SNIPPETS_URL, this._searchQuery(query));
  }

  static sendContactMessage(body) {
    const init = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
    return fetch(this.CONTACT_URL, init).then(res => res.json());
  }

  static _searchQuery(query) {
    return `?search=${this._fixQuery(query)}`
  }

  static _fixQuery(query) {
    return encodeURI(query).replace(/%20/g, '+');
  }

  static _fetchObject(url, id=null, child=null) {
    return new Promise((resolve, reject) => {
      let completeUrl = url;
      if (id) {
        completeUrl += id;
      }
      if (child) {
        completeUrl += `/${child}/`
      }
            
      var init = { method: 'GET'};
      fetch(completeUrl, init).then(response => {
        if (!response.ok) {
          response.json().then(data => {
            reject(data.detail || 'Something wrong happened');
          }).catch(error => {
            reject(error.message)
          });
        } else {
          return response.json();
        }
      }).then(data => {
        if (!data) { // no data!
          reject('No Results');
        } else if (Array.isArray(data)) { // response is an array of objects
          resolve(data);
        } else if (data.results) { // response has pagination and results
          resolve(data.results);
        } else if (data.id) { // response is a single object
          resolve(data);
        } else { // response is not valid
          reject('No Results');
        }
      }).catch(error => {
        reject(error.message);
      });
    });
  }

}

export default APIHelper;

/**
 * Common API helper functions.
 */
class APIHelper {

  static get API_URL() {
    return 'http://localhost:1337/';
  }

  static get BLOG_URL() {
    return `${this.API_URL}blog/`;
  }

  static get PROJECTS_URL() {
    return `${this.API_URL}project/`;
  }

  static get ABOUT_URL() {
    return `${this.API_URL}about/`;
  }

  static get CONTACT_URL() {
    return `${this.API_URL}contact/`;
  }

  /**
   * Get all blog posts.
   */
  static fetchBlogPosts() {
    return this._fetchObject(this.BLOG_URL);
  }

  /**
   * Get all projects.
   */
  static fetchProjects() {
    return this._fetchObject(this.PROJECTS_URL);
  }

  /**
   * Helper function to fetch object/s from a URL.
   */
  static _fetchObject(url, id = null, child = null, method = 'GET') {
    return new Promise(function(resolve, reject) {
      let completeUrl = url;
      if (id) {
        completeUrl += id;
      }
      if (child) {
        completeUrl += `/${child}/`
      }
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      var init = { method: method, headers: headers};
      fetch(completeUrl, init).then(response => {
        console.log(completeUrl);
        return response.json();
      }).then( data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  }

}

export default APIHelper;

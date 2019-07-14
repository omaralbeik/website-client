/**
 * Common API helper functions.
 */
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
   * Search for a project containing a query.
   */
  static searchProject(query) {
    query = encodeURI(query).replace(/%20/g, '+');
    return this._fetchObject(this.PROJECTS_URL, `?search=${query}`);
  }

  /**
   * Get a blog post by id.
   */
  static fetchBlogPost(post_id) {
    return this._fetchObject(this.BLOG_URL, post_id);
  }

  /**
   * Search for a blog post containing a query.
   */
  static searchBlogPost(query) {
    query = encodeURI(query).replace(/%20/g, '+');
    return this._fetchObject(this.BLOG_URL, `?search=${query}`);
  }

  /**
   * Get about contents.
   */
  static fetchAbout() {
    return this._fetchObject(this.CONTENTS_URL, 'about');
  }

  /**
   * Get snippets.
   */
  static fetchSnippets() {
    return this._fetchObject(this.SNIPPETS_URL);
  }

  /**
   * Get a snippet by id.
   */
  static fetchSnippet(snippet_id) {
    return this._fetchObject(this.SNIPPETS_URL, snippet_id);
  }

  /**
   * Search for a snippet containing a query.
   */
  static searchSnippet(query) {
    query = encodeURI(query).replace(/%20/g, '+');
    return this._fetchObject(this.SNIPPETS_URL, `?search=${query}`);
  }

  /**
   * Helper function to fetch object/s from a URL.
   */
   static _fetchObject(url, id = null, child = null) {
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

       var init = { method: 'GET', headers: headers};
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

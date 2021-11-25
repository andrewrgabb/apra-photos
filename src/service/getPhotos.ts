export {};

// Types

// GraphQL request

/* JSON Body
query($options: PageQueryOptions) {
  photos(options: $options) {
    meta {
      totalCount
    }
    data {
      id
      title
      url
    }
  }
}
*/

/* Query Variables
{
  "options": {
    "search": {
   		"q": "officia"
    },
    "paginate": {
      "page": 1,
      "limit": 4
    }
  }
}
*/

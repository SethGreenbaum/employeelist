import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
    return [
      {
        id: 1,
        name: "Steve Sperling",
        department: "accounting",
        salary: 90000
      },
      {
        id: 2,
        name: "Leonard Rossbach",
        department: "accounting",
        salary: 100000
      },
      {
        id: 3,
        name: "Maureen Fetchik",
        department: "sales",
        salary: 60000
      },
      {
        id: 4,
        name: "Carol Kordonski",
        department: "sales",
        salary: 70000
      },
      {
        id: 5,
        name: "John Kestler",
        department: "maintenance",
        salary: 50000
      },
      {
        id: 6,
        name: "Joe Brack",
        department: "maintenance",
        salary: 90000
      },
      {
        id: 7,
        name: "Joseph Nemethe",
        department: "production",
        salary: 30000
      },
      {
        id: 8,
        name: "Nellie Cooper",
        department: "production",
        salary: 40000
      },
    ]
  }
};

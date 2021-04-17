import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer 1q9k4U5OjdQO6GXlXKOF34sTMyTWmakIlxf7x3-AvZ8OIn53VQXPBeXnl0vYy_BgiaLOmQEWCfqIOlg7ysM01BCQWkSBoKxi8kGa7EJKHj5eDD1rSaU1c8bHu0x5YHYx`,
  },
});

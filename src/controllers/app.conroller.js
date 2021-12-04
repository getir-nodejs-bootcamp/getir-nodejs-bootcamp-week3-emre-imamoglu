/**
 *  This page will contain the fuctions that return corresponding
 * responses to route calls.
 */

const getHomePage = (req, res) => {
  res.status(200).send("Home Page");
};
const getAboutPage = (req, res) => {
  res.status(200).send("About Page");
};
const getContactPage = (req, res) => {
  res.status(200).send("Contact Page");
};

module.exports = {
  getHomePage,
  getAboutPage,
  getContactPage
};

export default (req, res) => {
  const {
    query: { pid },
  } = req; // req.query.pidと同じ意味

  res.end(`Post:${pid}`);
};

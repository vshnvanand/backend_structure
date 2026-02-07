export const signup = async (req, res) => {
  const user = await authService.signup(req.body);
  res.json(user);
};

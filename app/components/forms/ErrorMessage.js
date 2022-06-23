import React, { useContext }  from "react";

import AppText from "../AppText";

function ErrorMessage({ error, visible }) {

  if (!visible || !error) return null;

  return <AppText style={{ color: 'red' }}>{error}</AppText>;
}

export default ErrorMessage;

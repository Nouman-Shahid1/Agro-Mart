import React, { useEffect, useState } from "react";

function ContactPage() {
  const [clientSideValue, setClientSideValue] = useState(null);

  useEffect(() => {
    // Browser-specific logic
    setClientSideValue("This is set on the client");
  }, []);

  return (
    <div>
      <h1>Contact Us</h1>
      <p>{clientSideValue || "Loading..."}</p>
    </div>
  );
}

export default ContactPage;

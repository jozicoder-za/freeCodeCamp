let email = "lucky.masemola@jozicoder.co.za";

function emailMasker(email) {
  const domainAt = email.indexOf("@");
  const username = email.slice(0, domainAt);
  const domain = email.slice(domainAt);
  const firstLetter = username[0];
  const lastLetter = username[username.length - 1];
  const maskedLetter = "*".repeat(username.length - 2);

  if (username.length <= 2) {
    return username + domain;
  }

  return `${firstLetter}${maskedLetter}${lastLetter}${domain}`;
}

console.log(emailMasker(email));

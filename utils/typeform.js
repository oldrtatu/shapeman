import * as typeformEmbed from "@typeform/embed";

const reference = typeformEmbed.makePopup(
  "https://adityajain527147.typeform.com/to/kwZI5S", // NOTE: Replace with your typeform URL
  {
    mode: "popup",
    autoClose: 1000,
    hideHeaders: true,
    hideFooters: true,
    onSubmit: function() {
      console.log("Typeform successfully submitted");
    }
  }
);

export default reference;

function validateForm() {
  const form = document["pet-info-form"];
  const otherText = document.getElementById("other-info-text-area");
  let checked = [];
  // Get all checked boxes in an array
  for (let i = 0; i < form.elements.length; i++) {
    const input = form.elements[i];

    if (input.type == "checkbox" && input.checked) {
      checked.push(input.value);
    }
  }
  // Validate other response is filled out if no checked boxes
  if (checked.length == 0 && !otherText.value) {
    otherText.required = true;
    return false;
  }

  return true;
}

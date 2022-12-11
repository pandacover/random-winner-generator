const container = document.getElementById("container");
const participantsContainer = document.getElementById("participants");
const submitButton = document.getElementById("submit");
const inputParticipants = document.getElementById("participants-input");
const error = document.createElement("div");
error.classList.add("error");

const removeChild = (from, which, type) => {
  if (which) {
    const errorChild = from.querySelector(".error");
    if (errorChild) errorChild.innerText = "";
  } else {
    Object.keys(from.children).forEach((keys) => {
      const child = from.children[keys];
      if (child.innerText.toLowerCase() === type.toLowerCase())
        from.removeChild(child);
    });
  }
};

submitButton.addEventListener("click", (event) => {
  removeChild(container, "error", undefined);
  const participantName = inputParticipants.value;
  if (!participantName) {
    const errorMessage = document.createTextNode(
      "Please input a participant before submitting."
    );
    error.appendChild(errorMessage);
    container.appendChild(error);
    return;
  }

  const newParticipants = document.createElement("div");
  newParticipants.classList.add("pariticipant-item");
  newParticipants.appendChild(document.createTextNode(participantName));

  participantsContainer.appendChild(newParticipants);
});

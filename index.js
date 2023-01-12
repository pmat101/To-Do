let del_count = 0;
let cc = 65;

document.querySelector(".addButton").addEventListener("click", function () {
  //    Creating list item elements
  let item = document.createElement("div");
  let itemText = document.createElement("p");
  let option = document.createElement("div");
  let edit_b = document.createElement("span");
  let delete_b = document.createElement("span");

  //    Setting element attributes
  item.setAttribute("class", "item");
  item.style.display = "flex";
  itemText.setAttribute("class", "item_input");
  edit_b.setAttribute("class", "editButton");
  let ed_count = String.fromCharCode(cc++);
  edit_b.setAttribute("id", ed_count);
  delete_b.setAttribute("class", "deleteButton");
  del_count++;
  delete_b.setAttribute("id", del_count);

  //    Adding text
  itemText.innerText = document.querySelector(".input").value;
  edit_b.innerText = "EDIT";
  delete_b.innerText = "DELETE";

  //    Appending elements
  option.appendChild(edit_b);
  option.appendChild(delete_b);
  item.appendChild(itemText);
  item.appendChild(option);
  document.querySelector(".container").appendChild(item);
  document.querySelector(".input").value = "";

  //    Below functions can only be invoked after adding the parent list item, ie. why they can't be written outside
  //    Delete specific item using ID
  document.getElementById(del_count).addEventListener("click", function () {
    let parent = this.parentElement;
    let grandParent = parent.parentElement;
    grandParent.remove();
  });

  //    Edit speciic items
  document.getElementById(ed_count).addEventListener("click", function () {
    let parent = this.parentElement;
    let grandParent = parent.parentElement;
    let tau = parent.previousElementSibling;
    document.querySelector(".input").value = tau.innerText;
    grandParent.remove();
  });
});
